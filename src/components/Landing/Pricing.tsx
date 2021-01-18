import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <section class="py-8 bg-gray-100">
        <div class="container px-2 pt-4 pb-12 mx-auto text-gray-800">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Pricing</h1>
          <div class="w-full mb-4">
            <div class="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
          </div>
          <div class="flex flex-col justify-center pt-12 my-12 sm:flex-row sm:my-4">
            <div class="flex flex-col w-5/6 mx-auto mt-4 bg-white rounded-none lg:w-1/4 lg:mx-0 lg:rounded-l-lg">
              <div class="flex-1 overflow-hidden text-gray-600 bg-white rounded-t rounded-b-none shadow">
                <div class="p-8 text-3xl font-bold text-center border-b-4">Free</div>
                <ul class="w-full text-sm text-center">
                  <li class="py-4 border-b">Thing</li>
                  <li class="py-4 border-b">Thing</li>
                  <li class="py-4 border-b">Thing</li>
                </ul>
              </div>
              <div class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
                <div class="w-full pt-6 text-3xl font-bold text-center text-gray-600">
                  £0
                  <span class="text-base">for one user</span>
                </div>
                <div class="flex items-center justify-center">
                  <button class="px-8 py-4 mx-auto my-6 font-bold text-white rounded-full shadow-lg lg:mx-0 hover:underline gradient">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div class="z-10 flex flex-col w-5/6 mx-auto mt-4 bg-white rounded-lg shadow-lg lg:w-1/3 lg:mx-0 sm:-mt-6">
              <div class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow">
                <div class="w-full p-8 text-3xl font-bold text-center">Basic</div>
                <div class="w-full h-1 py-0 my-0 rounded-t gradient"></div>
                <ul class="w-full text-base font-bold text-center">
                  <li class="py-4 border-b">Thing</li>
                  <li class="py-4 border-b">Thing</li>
                  <li class="py-4 border-b">Thing</li>
                  <li class="py-4 border-b">Thing</li>
                </ul>
              </div>
              <div class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
                <div class="w-full pt-6 text-4xl font-bold text-center">
                  £x.99
                  <span class="text-base">/ per user</span>
                </div>
                <div class="flex items-center justify-center">
                  <button class="px-8 py-4 mx-auto my-6 font-bold text-white rounded-full shadow-lg lg:mx-0 hover:underline gradient">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div class="flex flex-col w-5/6 mx-auto mt-4 bg-white rounded-none lg:w-1/4 lg:mx-0 lg:rounded-l-lg">
              <div class="flex-1 overflow-hidden text-gray-600 bg-white rounded-t rounded-b-none shadow">
                <div class="p-8 text-3xl font-bold text-center border-b-4">Pro</div>
                <ul class="w-full text-sm text-center">
                  <li class="py-4 border-b">Thing</li>
                  <li class="py-4 border-b">Thing</li>
                  <li class="py-4 border-b">Thing</li>
                </ul>
              </div>
              <div class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
                <div class="w-full pt-6 text-3xl font-bold text-center text-gray-600">
                  £x.99
                  <span class="text-base">/ per user</span>
                </div>
                <div class="flex items-center justify-center">
                  <button class="px-8 py-4 mx-auto my-6 font-bold text-white rounded-full shadow-lg lg:mx-0 hover:underline gradient">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
});
