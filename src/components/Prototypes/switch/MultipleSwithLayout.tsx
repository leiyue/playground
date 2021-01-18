import { defineComponent } from "vue";
import Switch from "./Switch";

export default defineComponent({
  setup() {
    const separator = () => (
      <div>
        <div class="relative rounded-md shadow-sm">
          <input class="block w-full h-6 px-4 py-2 form-input sm:text-sm sm:leading-5" placeholder="you@example.com" />
        </div>
      </div>
    );
    return () => (
      <div class="flex justify-center w-screen h-full p-12 space-x-4 bg-gray-50">
        <Switch layoutClass="" />
        {separator()}
        <Switch layoutClass="" labelClass="w-16" labelText={{ off: "Disabled", on: "Enabled" }} />
        {separator()}
        <Switch layoutClass="" labelClass="" labelText={{ off: "关闭", on: "开启" }} />
      </div>
    );
  },
});
