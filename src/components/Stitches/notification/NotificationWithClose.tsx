import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <section class="py-4 text-gray-900 bg-gray-100 lg:px-4" role="alert">
        <div class="flex items-center leading-none">
          <div class="w-6 h-6 mr-2 bg-gray-300 rounded-full"></div>
          <span class="mr-auto text-left">
            New Feature! It is a long established fact that a reader will be distracted.
            <a href="#" class="ml-2 text-sm text-blue-500 uppercase">
              read more
            </a>
          </span>
          <span
            class="w-4 h-4 opacity-70 iconify hover:opacity-100"
            data-icon="fa-solid:times"
            data-inline="false"
          ></span>
        </div>
      </section>
    );
  },
});
