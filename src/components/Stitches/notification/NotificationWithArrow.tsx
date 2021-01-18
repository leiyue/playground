import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <section class="py-4 text-gray-900 bg-gray-100 lg:px-4" role="alert">
        <div class="container flex items-center max-w-4xl m-auto leading-none">
          <span class="flex px-2 py-1 mr-3 text-xs font-bold uppercase bg-gray-300 rounded-full">New</span>
          <span class="mr-auto text-left">
            New Feature! It is a long established fact that a reader will be distracted.
          </span>
          <span
            class="w-4 h-4 opacity-70 iconify hover:opacity-100"
            data-icon="fa-solid:chevron-right"
            data-inline="false"
          ></span>
        </div>
      </section>
    );
  },
});
