import Avatar from "@/assets/person.jpg";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <section class="container flex flex-col max-w-6xl m-auto my-8 font-sans md:flex-row sm:items-center">
        <div class="flex flex-col items-start justify-center w-full px-6 py-0 md:w-1/2 md:py-8 md:px-8 lg:items-start">
          <label for="tagline" class="font-bold tracking-wide text-gray-700 uppercase">
            various aspects
          </label>
          <h1 class="mt-2 mb-4 font-medium">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h1>
          <p class="mb-4 leading-normal text-gray-700">
            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam.
            Sed arcu. Cras consequat. Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu
            vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
            facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
            vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.
          </p>
        </div>
        <div class="flex flex-row items-center justify-between w-full p-2 md:w-1/2 md:flex-col md:justify-center md:p-8 md:items-start">
          <div class="flex items-center w-1/2 p-4 sm:border-r md:border-b md:border-r-0 md:w-auto">
            <img src={Avatar} class="mr-4 bg-gray-300 rounded-full w-14 h-14" />
            <div>
              <h2 class="font-medium text-black">Aliquam tincidunt mauris eu risus.</h2>
              <p class="leading-normal text-gray-700">
                Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu
                erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
              </p>
            </div>
          </div>
          <div class="flex items-center w-1/2 p-4 md:w-auto">
            <img src={Avatar} class="mr-4 bg-gray-300 rounded-full w-14 h-14" />
            <div>
              <h2 class="font-medium text-black">Vestibulum auctor dapibus neque.</h2>
              <p class="leading-normal text-gray-700">
                Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in,
                diam. Sed arcu. Cras consequat.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  },
});
