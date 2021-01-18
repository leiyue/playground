import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <section class="w-full py-8 font-sans antialiased text-left text-black bg-gray-300">
        <div class="container max-w-xl py-8 mx-auto font-normal leading-normal">
          <h3 class="text-2xl">Grow Your Business</h3>
          <p class="">
            Build high performing teams, establish design practices, mentor and grow the next generation of great
            designers, and design interfaces and experiences.
          </p>
          <div class="max-w-sm mt-4 sm:flex">
            <input
              type="email"
              class="block w-full px-6 py-3 mb-2 bg-white focus:outline-0 sm:mb-0"
              name="email"
              placeholder="Enter your email"
              required
            />
            <button class="w-full px-6 text-sm tracking-wide text-white uppercase bg-black focus:outline-0 sm:w-auto hover:bg-gray-900 focus:bg-gray-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    );
  },
});
