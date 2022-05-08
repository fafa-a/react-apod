import type { PluginOption } from "vite"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import UnoCss from "unocss/vite"
import presetUno from "@unocss/preset-uno"
import presetAttributify from "@unocss/preset-attributify"
// https://vitejs.dev/config/
const plugins: (PluginOption | PluginOption[])[] = [
  UnoCss({
    presets: [presetUno(), presetAttributify()]
  }),
  react()
]

export default defineConfig({ plugins })
