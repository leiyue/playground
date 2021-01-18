import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <>
        <section class="container flex flex-col max-w-6xl m-auto my-8 font-sans text-center lg:flex-row lg:text-left sm:items-center">
          <div class="w-full lg:w-1/2">
            <img src="/images/demo-phone.png" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center w-full p-8 lg:w-1/2 lg:items-start">
            <label for="tagline" class="font-bold tracking-wide text-gray-700 uppercase">
              best app ever
            </label>
            <h1 class="my-4 font-normal">Our Work Flow</h1>
            <p class="mb-4 leading-normal text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </section>
        <section class="container flex flex-col-reverse max-w-6xl pt-8 m-auto my-8 font-sans text-center lg:flex-row lg:text-left sm:items-center">
          <div class="flex flex-col items-center justify-center w-full p-8 lg:w-1/2 lg:items-start">
            <label for="tagline" class="font-bold tracking-wide text-gray-700 uppercase">
              best app ever
            </label>
            <h1 class="my-4 font-normal">Our Work Flow</h1>
            <p class="mb-4 leading-normal text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
          <div class="w-full lg:w-1/2">
            <img src="/images/demo-phone.png" alt="" />
          </div>
        </section>
      </>
    );
  },
});
