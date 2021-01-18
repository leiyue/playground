import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <section class="font-sans bg-gray-300">
        <div class="container flex flex-col max-w-2xl m-auto md:flex-row">
          <div class="flex flex-col items-start justify-center w-full py-8 lg:w-1/2">
            <label for="tagline" class="uppercase tracking-loose">
              best app ever
            </label>
            <h1 class="my-4 font-normal">Our Work Flow</h1>
            <p class="mb-4 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, ex ea commodo consequat. Sed ut perspiciatis unde omnis iste
              natus error sit voluptatem accusantium natus error sit.
            </p>
            <button class="px-4 py-2 font-semibold text-black bg-transparent border border-black hover:bg-black hover:text-white hover:border-transparent">
              Learn More
            </button>
          </div>
          <div class="w-full lg:w-1/2 lg:py-6">
            <img src="/images/demo-devices.png" alt="image" class="w-full" />
          </div>
        </div>
      </section>
    );
  },
});
