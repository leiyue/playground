import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <div class="pt-24">
        <div class="container flex flex-col flex-wrap items-center px-3 mx-auto md:flex-row">
          <div class="flex flex-col items-start justify-center w-full text-center md:w-2/5 md:text-left">
            <p class="w-full uppercase tracking-loose">What business are you?</p>
            <h1 class="my-4 text-5xl font-bold leading-tight">Main Hero Message to sell yourself!</h1>
            <p class="mb-8 text-2xl leading-normal">
              Sub-hero message, not too long and not too short. Make it just right!
            </p>
            <button
              id="subscribe-button"
              class="px-8 py-4 mx-auto my-6 font-bold text-gray-800 bg-white rounded-full shadow-lg lg:mx-0 hover:underline"
            >
              Subscribe 0
            </button>
          </div>
          <div class="w-full py-6 text-center md:w-3/5">
            <img class="z-50 w-full md:w-4/5" src="https://i.ibb.co/LYZ0Hsy/hero.png" alt="hero" />
          </div>
        </div>
      </div>
    );
  },
});
