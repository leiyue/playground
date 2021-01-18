import { defineComponent } from "vue";
import Listbox from "./Listbox";

export default defineComponent({
  props: {
    listboxWidthClass: { type: String, default: "w-48" },
  },
  setup(props) {
    const separator = () => (
      <div>
        <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
          Email
        </label>
        <div class="relative mt-1 rounded-md shadow-sm">
          <input class="block w-full px-4 py-2 form-input sm:text-sm sm:leading-5" placeholder="you@example.com" />
        </div>
      </div>
    );
    return () => (
      <div class="flex justify-center w-screen h-full p-12 space-x-4 bg-gray-50">
        <Listbox layoutClass={props.listboxWidthClass} />
        {separator()}
        <Listbox layoutClass={props.listboxWidthClass} />
        {separator()}
        <Listbox layoutClass={props.listboxWidthClass} />
      </div>
    );
  },
});
