import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <section class="py-4 font-sans bg-white">
        <div class="container flex flex-wrap items-center justify-between max-w-4xl m-auto md:flex-nowrap">
          <div class="flex justify-center w-full md:justify-start">
            <div class="flex flex-col items-center px-8 border-r">
              <h1 class="">34%</h1>
              <span class="block mt-1 text-xs tracking-wide text-gray-900 uppercase">clickrate</span>
            </div>
            <div class="flex flex-col items-center px-8 border-r">
              <h1 class="">465</h1>
              <span class="block mt-1 text-xs tracking-wide text-gray-900 uppercase">pageviews</span>
            </div>
            <div class="flex flex-col items-center px-8">
              <h1 class="">65%</h1>
              <span class="block mt-1 text-xs tracking-wide text-gray-900 uppercase">influence</span>
            </div>
          </div>
          <button class="w-full px-4 py-2 mt-6 text-white bg-gray-700 md:w-32 hover:bg-black md:mt-0" type="button">
            Read More
          </button>
        </div>
      </section>
    );
  },
});
