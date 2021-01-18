import Avatar from "@/assets/person.jpg";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <section class="container py-8 m-auto font-sans text-center">
        <label for="tagline" class="font-bold tracking-wide text-gray-700 uppercase">
          Various Aspects
        </label>
        <h1 class="max-w-sm m-auto mt-2 mb-4 font-medium">Those are important in Vanue Management</h1>
        <hr class="w-8 m-auto my-6 border-b" />
        <div class="flex flex-wrap items-start justify-between">
          <div class="flex flex-col items-center justify-center w-full p-4 sm:w-1/2 md:w-1/4">
            <img src={Avatar} class="mr-4 bg-gray-300 rounded-full w-14 h-14" />
            <h2 class="my-4 font-medium">Cras ornare tristique elit.</h2>
            <p class="mb-4 leading-normal text-gray-700">
              Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim
              pellentesque felis.
            </p>
          </div>
          <div class="flex flex-col items-center justify-center w-full p-4 sm:w-1/2 md:w-1/4">
            <img src={Avatar} class="mr-4 bg-gray-300 rounded-full w-14 h-14" />
            <h2 class="my-4 font-medium">Vivamus vestibulum ntulla nec ante.</h2>
            <p class="mb-4 leading-normal text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
          <div class="flex flex-col items-center justify-center w-full p-4 sm:w-1/2 md:w-1/4">
            <img src={Avatar} class="mr-4 bg-gray-300 rounded-full w-14 h-14" />
            <h2 class="my-4 font-medium">Praesent placerat risus quis eros.</h2>
            <p class="mb-4 leading-normal text-gray-700">
              Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam.
              Sed arcu. Cras consequat.
            </p>
          </div>
          <div class="flex flex-col items-center justify-center w-full p-4 sm:w-1/2 md:w-1/4">
            <img src={Avatar} class="mr-4 bg-gray-300 rounded-full w-14 h-14" />
            <h2 class="my-4 font-medium">Fusce pellentesque suscipit nibh.</h2>
            <p class="mb-4 leading-normal text-gray-700">
              Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat.
              Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
            </p>
          </div>
        </div>
      </section>
    );
  },
});
