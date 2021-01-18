import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <section class="container flex flex-col font-sans lg:flex-row">
        <div class="w-full lg:w-1/2">
          <img class="mx-auto" src="/images/demo-phone.png" alt="" />
        </div>
        <div class="flex flex-col items-center justify-center w-full p-8 text-center lg:w-1/2">
          <h1 class="my-4 font-normal">App Features</h1>
          <p class="w-2/3 mb-4 leading-normal text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </section>
    );
  },
});
