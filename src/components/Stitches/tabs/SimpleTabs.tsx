import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <>
        <section class="py-4 font-sans bg-white">
          <div class="container flex items-baseline justify-start max-w-6xl m-auto mb-10 border-b-2 border-gray-300">
            <h2 class="px-6 py-4 text-base font-bold tracking-wide text-gray-700 uppercase">All</h2>
            <h2 class="px-6 py-4 -mb-4 text-base font-bold tracking-wide uppercase border-b-2 border-black">Recent</h2>
            <h2 class="px-6 py-4 text-base font-bold tracking-wide text-gray-700 uppercase">Assigned to Me</h2>
            <h2 class="px-6 py-4 text-base font-bold tracking-wide text-gray-700 uppercase">Pending</h2>
          </div>
        </section>
      </>
    );
  },
});
