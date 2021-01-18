import Hero from "@/components/Landing/Hero";
import NavBar from "@/components/Landing/NavBar";
import WavesBottom from "@/components/Landing/WavesBottom";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <>
        <NavBar />
        <Hero />
        <WavesBottom />
      </>
    );
  },
});
