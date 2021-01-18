import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <section class="px-4 py-8 font-sans text-center bg-gray-300 lg:px-0">
        <div class="container flex flex-col max-w-2xl m-auto bg-white shadow sm:flex-row">
          <div class="flex flex-col justify-center w-full px-6 pt-6 text-left sm:w-3/4">
            <h2 class="font-medium capitalize">Ready to get started?</h2>
            <p class="mt-2 mb-6 text-gray-700">But I must explain to you how all this mistaken idea of denouncing </p>
          </div>
          <div class="flex items-center justify-start w-full pb-6 pl-6 sm:w-1/4 sm:justify-center sm:pl-0 sm:pb-0">
            <button class="px-6 py-3 text-xs tracking-wide text-white uppercase bg-black hover:bg-gray-900 hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </section>
    );
  },
});
