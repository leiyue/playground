import CallToActions from "@/components/Landing/CallToActions";
import Footer from "@/components/Landing/Footer";
import Header from "@/components/Landing/Header";
import Pricing from "@/components/Landing/Pricing";
import ThreeFeatures from "@/components/Landing/ThreeFeatures";
import TwoFeatures from "@/components/Landing/TwoFeatures";
import WavesTop from "@/components/Landing/WavesTop";
import { defineComponent } from "vue";
import "./loading.scss";

export default defineComponent({
  setup() {
    return () => (
      <div class="leading-normal tracking-normal text-white gradient">
        <Header />
        <TwoFeatures />
        <ThreeFeatures />
        <Pricing />
        <WavesTop />
        <CallToActions />
        <Footer />
      </div>
    );
  },
});
