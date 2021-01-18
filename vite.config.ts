import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import { defineConfig } from "vite";
import { buildPreloadFile } from "./src/utils/build/preload";

const playground = process.env.PLAYGROUND || "views";
const extensions = ["tsx"];
buildPreloadFile(playground, extensions);

export default defineConfig({
  optimizeDeps: {
    include: ["gsap/ScrollTrigger"],
  },
  alias: {
    "@": resolve(__dirname, "./src"),
  },
  define: {
    __PLAYGROUND__: playground,
  },
  plugins: [vueJsx({})],
});
