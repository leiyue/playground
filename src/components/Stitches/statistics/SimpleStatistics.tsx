import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <section class="py-4 font-sans bg-white">
        <div class="container flex flex-wrap items-center justify-center max-w-4xl m-auto md:flex-no-wrap">
          <h1 class="w-full mb-4 font-medium tracking-normal md:w-1/4 md:mb-0">
            Important
            <br />
            Stats
          </h1>
          <div class="w-1/3 md:w-1/4">
            <span class="inline-block mr-2 text-xs tracking-wide text-gray-900 uppercase">clickrate</span>
            <h2 class="inline-block">34%</h2>
          </div>
          <div class="w-1/3 md:w-1/4">
            <span class="inline-block mr-2 text-xs tracking-wide text-gray-900 uppercase">pageviews</span>
            <h2 class="inline-block">465</h2>
          </div>
          <div class="w-1/3 md:w-1/4">
            <span class="inline-block mr-2 text-xs tracking-wide text-gray-900 uppercase">influence</span>
            <h2 class="inline-block">65%</h2>
          </div>
        </div>
      </section>
    );
  },
});
