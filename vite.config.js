import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // 1. 导入插件

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. 添加到插件列表
  ],
  // base: '/meow-creative-app/',   // 👈 替换为你的仓库名，首尾都要斜杠
  base: '/'
})
