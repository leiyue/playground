import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <section class="px-8 my-8 font-sans text-center">
        <h1 class="font-medium capitalize">Ready to get started?</h1>
        <p class="mt-2 mb-6 text-gray-700">But I must explain to you how all this mistaken idea of denouncing </p>
        <button class="px-6 py-3 text-xs tracking-wide text-white uppercase bg-black hover:bg-gray-900 hover:text-white">
          Learn More
        </button>
      </section>
    );
  },
});
