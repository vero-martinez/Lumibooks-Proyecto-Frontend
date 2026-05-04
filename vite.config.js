/* Este archivo es la configuracion principal de Vite para el proyecto React. 
Aquí se definen los plugins que se utilizarán, como el plugin de React y 
el plugin de Tailwind CSS. 
Esta configuración permite que Vite compile y sirva la aplicación React con soporte 
para Tailwind CSS.*/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
