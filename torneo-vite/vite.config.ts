import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server:{
    proxy:{
      '/api': 'http://localhost:5000' // this is for express, port 5000
                                      // vite(react) runs on 5173
    }
  }
})
