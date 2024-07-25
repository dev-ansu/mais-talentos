import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import alias from '@rollup/plugin-alias';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  alias({
    entries:[
      {find:"@", replacement: path.resolve(__dirname, "src")}
    ]
  })
  ],
  resolve:{
    alias:{
      "@":path.resolve(__dirname, "src")
    }
  }
  
  // base:"/react-multistep-form"
})
