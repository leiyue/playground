import Footer from "@/components/Blog/Footer";
import Main from "@/components/Blog/Main";
import NavBar from "@/components/Blog/NavBar";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <div class="overflow-x-hidden bg-gray-100">
        <NavBar />
        <Main />
        <Footer />
      </div>
    );
  },
});
