import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   headers: {
  //     'Permissions-Policy': 'interest-cohort=()',
  //   },
  // },
  // base: '/portfolio/',
})
  
