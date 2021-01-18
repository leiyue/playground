import { defineComponent } from "vue";
import { ComponentsLayout, ViewsLayout } from "./layouts";

export default defineComponent({
  setup() {
    return () => (__PLAYGROUND__ === "components" ? <ComponentsLayout /> : <ViewsLayout />);
  },
});
