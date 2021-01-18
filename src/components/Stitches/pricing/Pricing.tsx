import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <section class="container flex flex-col flex-wrap justify-center max-w-6xl m-auto font-sans sm:flex-row">
        <div class="w-full py-8 text-center sm:w-1/2 lg:w-1/4">
          <label for="Basic" class="text-sm font-bold uppercase tracking-loose">
            Basic Plan
          </label>
          <h1 class="my-2 text-5xl font-bold uppercase tracking-loose">
            $29<span class="text-xs font-light text-gray-700">/mo</span>
          </h1>
          <p class="my-2 text-gray-700">
            <strong class="pr-2 text-black">5</strong>Projects
          </p>
          <p class="my-2 text-gray-700">
            <strong class="pr-2 text-black">20</strong>Images
          </p>
          <p class="mt-2 mb-6 text-gray-700">
            <strong class="pr-2 text-black">9/5</strong>Support
          </p>
          <button class="px-4 py-2 font-semibold bg-transparent border border-black hover:bg-black text-black-dark hover:text-white hover:border-transparent">
            Buy Now
          </button>
        </div>
        <div class="w-full py-8 text-center sm:w-1/2 lg:w-1/4">
          <label for="Team" class="text-sm font-bold uppercase tracking-loose">
            Team Plan
          </label>
          <h1 class="my-2 text-5xl font-bold uppercase tracking-loose">
            $59<span class="text-xs font-light text-gray-700">/mo</span>
          </h1>
          <p class="my-2 text-gray-700">
            <strong class="pr-2 text-black">10</strong>Projects
          </p>
          <p class="my-2 text-gray-700">
            <strong class="pr-2 text-black">40</strong>Images
          </p>
          <p class="mt-2 mb-6 text-gray-700">
            <strong class="pr-2 text-black">12/7</strong>Support
          </p>
          <button class="px-4 py-2 font-semibold bg-transparent border border-black hover:bg-black text-black-dark hover:text-white hover:border-transparent">
            Buy Now
          </button>
        </div>
        <div class="w-full py-8 text-center sm:w-1/2 lg:w-1/4">
          <label for="Corporate" class="text-sm font-bold uppercase tracking-loose">
            Corporate Plan
          </label>
          <h1 class="my-2 text-5xl font-bold uppercase tracking-loose">
            $79<span class="text-xs font-light text-gray-700">/mo</span>
          </h1>
          <p class="my-2 text-gray-700">
            <strong class="pr-2 text-black">Unlimited</strong>Projects
          </p>
          <p class="my-2 text-gray-700">
            <strong class="pr-2 text-black">Unlimited</strong>Images
          </p>
          <p class="mt-2 mb-6 text-gray-700">
            <strong class="pr-2 text-black">24/7</strong>Support
          </p>
          <button class="px-4 py-2 font-semibold bg-transparent border border-black hover:bg-black text-black-dark hover:text-white hover:border-transparent">
            Buy Now
          </button>
        </div>
        <div class="w-full py-8 text-center sm:w-1/2 lg:w-1/4">
          <label for="Enterprise" class="text-sm font-bold uppercase tracking-loose">
            Enterprise Plan
          </label>
          <h1 class="my-2 text-5xl font-bold uppercase tracking-loose">
            $199<span class="text-xs font-light text-gray-700">/mo</span>
          </h1>
          <p class="my-2 text-gray-700">
            <strong class="pr-2 text-black">Unlimited</strong>Projects
          </p>
          <p class="my-2 text-gray-700">
            <strong class="pr-2 text-black">Unlimited</strong>Images
          </p>
          <p class="mt-2 mb-6 text-gray-700">
            <strong class="pr-2 text-black">24/7</strong>Support
          </p>
          <button class="px-4 py-2 font-semibold bg-transparent border border-black hover:bg-black text-black-dark hover:text-white hover:border-transparent">
            Buy Now
          </button>
        </div>
      </section>
    );
  },
});
