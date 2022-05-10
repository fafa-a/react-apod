import type { PluginOption } from "vite"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import UnoCss from "unocss/vite"
import presetUno from "@unocss/preset-uno"
import presetAttributify from "@unocss/preset-attributify"
import presetWebFonts from "@unocss/preset-web-fonts"
// https://vitejs.dev/config/
const plugins: (PluginOption | PluginOption[])[] = [
  UnoCss({
    presets: [
      presetUno(),
      presetAttributify(),
      presetWebFonts({
        provider: "google",
        fonts: {
          nunito: {
            name: "Nunito Sans",
            weights: ["400", "700", "900"]
          },
          playball: "Playball"
        }
      })
    ]
  }),
  react()
]

export default defineConfig({ plugins })
