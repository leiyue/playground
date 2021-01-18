import Header from "@/components/Estevanmaito/Header";
import Main from "@/components/Estevanmaito/Main";
import NavBar from "@/components/Estevanmaito/NavBar";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <div class="dark:bg-gray-900">
        <NavBar />
        <Header />
        <Main />
      </div>
    );
  },
});
