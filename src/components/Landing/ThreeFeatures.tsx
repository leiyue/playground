import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <section class="py-8 bg-white border-b">
        <div class="container flex flex-wrap pt-4 pb-12 mx-auto">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Title</h1>
          <div class="w-full mb-4">
            <div class="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
          </div>
          <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
            <div class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full px-6 text-xs text-gray-600 md:text-sm">xGETTING STARTED</p>
                <div class="w-full px-6 text-xl font-bold text-gray-800">Lorem ipsum dolor sit amet.</div>
                <p class="px-6 mb-5 text-base text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et
                  sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
              <div class="flex items-center justify-start">
                <button class="px-8 py-4 mx-auto my-6 font-bold text-white rounded-full shadow-lg lg:mx-0 hover:underline gradient">
                  Action
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
            <div class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full px-6 text-xs text-gray-600 md:text-sm">xGETTING STARTED</p>
                <div class="w-full px-6 text-xl font-bold text-gray-800">Lorem ipsum dolor sit amet.</div>
                <p class="px-6 mb-5 text-base text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et
                  sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
              <div class="flex items-center justify-center">
                <button class="px-8 py-4 mx-auto my-6 font-bold text-white rounded-full shadow-lg lg:mx-0 hover:underline gradient">
                  Action
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
            <div class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full px-6 text-xs text-gray-600 md:text-sm">xGETTING STARTED</p>
                <div class="w-full px-6 text-xl font-bold text-gray-800">Lorem ipsum dolor sit amet.</div>
                <p class="px-6 mb-5 text-base text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et
                  sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
              <div class="flex items-center justify-end">
                <button class="px-8 py-4 mx-auto my-6 font-bold text-white rounded-full shadow-lg lg:mx-0 hover:underline gradient">
                  Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
});
