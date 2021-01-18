import Avatar from "@/assets/person.jpg";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <section class="container max-w-6xl m-auto my-8 font-sans">
        <div class="text-center">
          <h1 class="my-4 font-medium">Show Your Work</h1>
          <p class="max-w-sm m-auto mb-4 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
        <div class="flex flex-col flex-wrap my-8 sm:flex-row">
          <div class="flex flex-col items-center justify-center w-full h-48 p-8 duration-200 transform bg-white border-b border-r border-gray-300 group sm:w-1/2 md:w-1/3 md:h-64 hover:shadow-md hover:border-transparent hover:scale-105">
            <img src={Avatar} class="w-12 h-12 bg-gray-300 rounded-full" />
            <h3 class="mt-4 mb-1">Digital</h3>
            <p class="hidden mt-4 leading-normal text-center text-gray-700 group-hover:block">
              Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim
              pellentesque felis.
            </p>
          </div>
          <div class="flex flex-col items-center justify-center w-full h-48 p-8 duration-200 transform bg-white border-b border-r border-gray-300 group sm:w-1/2 md:w-1/3 md:h-64 hover:shadow-md hover:border-transparent hover:scale-105">
            <img src={Avatar} class="w-12 h-12 bg-gray-300 rounded-full" />
            <h3 class="mt-4 mb-1">Branding</h3>
            <p class="hidden mt-4 leading-normal text-center text-gray-700 group-hover:block">
              Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat.
              Aliquam erat volutpat.
            </p>
          </div>
          <div class="flex flex-col items-center justify-center w-full h-48 p-8 duration-200 transform bg-white border-b border-gray-300 group sm:w-1/2 md:w-1/3 md:h-64 hover:shadow-md hover:border-transparent hover:scale-105">
            <img src={Avatar} class="w-12 h-12 bg-gray-300 rounded-full" />
            <h3 class="mt-4 mb-1">Excellence</h3>
            <p class="hidden mt-4 leading-normal text-center text-gray-700 group-hover:block">
              Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique
              cursus.
            </p>
          </div>
          <div class="flex flex-col items-center justify-center w-full h-48 p-8 duration-200 transform bg-white border-r border-gray-300 group sm:w-1/2 md:w-1/3 md:h-64 hover:shadow-md hover:border-transparent hover:scale-105">
            <img src={Avatar} class="w-12 h-12 bg-gray-300 rounded-full" />
            <h3 class="mt-4 mb-1">Strategy</h3>
            <p class="hidden mt-4 leading-normal text-center text-gray-700 group-hover:block">
              Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim
              pellentesque felis.
            </p>
          </div>
          <div class="flex flex-col items-center justify-center w-full h-48 p-8 duration-200 transform bg-white border-r border-gray-300 group sm:w-1/2 md:w-1/3 md:h-64 hover:shadow-md hover:border-transparent hover:scale-105">
            <img src={Avatar} class="w-12 h-12 bg-gray-300 rounded-full" />
            <h3 class="mt-4 mb-1">Design</h3>
            <p class="hidden mt-4 leading-normal text-center text-gray-700 group-hover:block">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div class="flex flex-col items-center justify-center w-full h-48 p-8 duration-200 transform bg-white border-gray-300 group sm:w-1/2 md:w-1/3 md:h-64 hover:shadow-md hover:border-transparent hover:scale-105">
            <img src={Avatar} class="w-12 h-12 bg-gray-300 rounded-full" />
            <h3 class="mt-4 mb-1">Development</h3>
            <p class="hidden mt-4 leading-normal text-center text-gray-700 group-hover:block">
              Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            </p>
          </div>
        </div>
      </section>
    );
  },
});
