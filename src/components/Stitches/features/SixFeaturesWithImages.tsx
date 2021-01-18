import Avatar from "@/assets/person.jpg";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <section class="container flex flex-col justify-center max-w-6xl m-auto my-8 font-sans lg:flex-row">
        <div class="flex flex-col items-center justify-center order-2 w-full mt-8 ml-0 text-center lg:order-1 lg:w-1/4 lg:items-end lg:text-right lg:ml-8">
          <img src={Avatar} class="w-12 h-12 mb-2 bg-gray-300 rounded-full" alt="" />
          <h2 class="mb-2 font-normal text-black">Praesent placerat.</h2>
          <p class="mb-8 leading-normal text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <img src={Avatar} class="w-12 h-12 mb-2 bg-gray-300 rounded-full" alt="" />
          <h2 class="mb-2 font-normal text-black">Fusce pellentesque suscipit nibh.</h2>
          <p class="mb-8 leading-normal text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <img src={Avatar} class="w-12 h-12 mb-2 bg-gray-300 rounded-full" alt="" />
          <h2 class="mb-2 font-normal text-black">Ut aliquam sollicitudin leo.</h2>
          <p class="leading-normal text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div class="order-1 w-full max-w-sm m-auto mb-6 lg:order-2 lg:w-1/2 lg:mb-0">
          <img src="/images/demo-phone.png" alt="" />
        </div>
        <div class="flex flex-col items-center justify-center order-last w-full mt-8 mr-8 text-center lg:w-1/4 lg:items-start lg:text-left">
          <img src={Avatar} class="w-12 h-12 mb-2 bg-gray-300 rounded-full" alt="" />
          <h2 class="mb-2 font-normal text-black">Cras iaculis ultricies nulla.</h2>
          <p class="mb-8 leading-normal text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <img src={Avatar} class="w-12 h-12 mb-2 bg-gray-300 rounded-full" alt="" />
          <h2 class="mb-2 font-normal text-black">Praesent placerat risus quis eros.</h2>
          <p class="mb-8 leading-normal text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <img src={Avatar} class="w-12 h-12 mb-2 bg-gray-300 rounded-full" alt="" />
          <h2 class="mb-2 font-normal text-black">Nunc dignissim risus id metus.</h2>
          <p class="leading-normal text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </section>
    );
  },
});
