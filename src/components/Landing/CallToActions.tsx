import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <section class="container py-6 mx-auto mb-12 text-center">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Call to Action</h1>
        <div class="w-full mb-4">
          <div class="w-1/6 h-1 py-0 mx-auto my-0 bg-white rounded-t opacity-25"></div>
        </div>
        <h3 class="my-4 text-3xl leading-tight">Main Hero Message to sell yourself!</h3>
        <button class="px-8 py-4 mx-auto my-6 font-bold text-gray-800 bg-white rounded-full shadow-lg lg:mx-0 hover:underline">
          Action!
        </button>
      </section>
    );
  },
});
