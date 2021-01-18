import { defineComponent } from "vue";
import Posts from "./Posts";
import SideBar from "./SideBar";

export default defineComponent({
  setup() {
    return () => (
      <div class="px-6 py-8">
        <div class="container flex justify-between mx-auto">
          <Posts />
          <SideBar />
        </div>
      </div>
    );
  },
});
