const express = requrie('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
const PORT = 5000; // express is running on local port 5000

//allows the backend to communicate with the frontend
app.use(cors())
app.use(express.json())

//connects the mongoDB atlas to the backend

//unsure which database it is connected too, might make a new database
mongoose.connect('<insert mongodb link>',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => console.log("MongoDB is connected"))
.catch(err => console.log("MongoDB can't connect", err));

const User = require('./models/Users')

app.post('/api/register', async (req, res) => {
    const {username, email, password} = req.body;

    try{
        const newUser = new User({username, email, password})
        await newUser.save()

        // res.status(###) sets respected HTTP status for the response
        res.status(201).json({message: 'User registeration is complete'})
        
    }
    catch (error){
        console.error(error);
        res.status(500).json({message: 'User registeration failed'})
    }
});

app.post('/api/tournaments', async (req, res) => {
    const { name, participants } = req.body;

    try {
        const brackets = [];
        for (let i = 0; i < participants.length; i += 2) {
            brackets.push({ match: [participants[i], participants[i + 1] || null], winner: null });
        }
        const newTournament = new Tournament({ name, participants, brackets });
        await newTournament.save();
        res.status(201).json({ message: 'Tournament created successfully', tournament: newTournament });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create tournament' });
    }
});

// Get all tournaments
app.get('/api/tournaments', async (req, res) => {
    try {
        const tournaments = await Tournament.find();
        res.status(200).json(tournaments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch tournaments' });
    }
});

// Update match results
app.put('/api/tournaments/:id/match', async (req, res) => {
    const { id } = req.params;
    const { matchIndex, winner } = req.body;

    try {
        const tournament = await Tournament.findById(id);
        if (!tournament) return res.status(404).json({ message: 'Tournament not found' });

        // Update the winner of the match
        tournament.brackets[matchIndex].winner = winner;

        // Save the updated tournament
        await tournament.save();
        res.status(200).json(tournament);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update match result' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));