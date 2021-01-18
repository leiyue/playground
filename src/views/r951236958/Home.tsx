import NavBar from "@/components/R951236958/NavBar";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <div class="h-screen App dark:bg-gray-800 dark:text-gray-100">
        <NavBar title="hello" />
        <div class="flex flex-col justify-center min-w-full min-h-screen p-10 bg-gray-100">
          <div class="relative w-full max-w-full mx-auto lg:max-w-6xl xl:max-w-screen-2xl">
            <div class="absolute inset-0 -mr-3.5 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl" />
            <div class="relative bg-white shadow-lg sm:rounded-3xl">
              <div class="flex items-center justify-start pt-6 pl-6">
                <span class="w-3 h-3 mr-2 bg-red-400 rounded-full" />
                <span class="w-3 h-3 mr-2 bg-yellow-400 rounded-full" />
                <span class="w-3 h-3 mr-2 bg-green-400 rounded-full" />
              </div>
              <div class="px-20 py-6">
                <nav class="flex items-center justify-between">
                  <div class="flex items-center justify-center">
                    <div class="flex items-center justify-center text-3xl font-bold text-true-gray-800">
                      <svg
                        class="w-10 h-10 mr-1 text-blue-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width={2}
                          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width={2}
                          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                        />
                      </svg>
                      AR
                    </div>
                    <div class="items-center justify-center hidden pt-1 antialiased lg:flex lg:ml-20">
                      <a
                        href="#"
                        class="flex items-center justify-center mr-10 text-base font-medium tracking-tight text-gray-700 transition duration-150 ease-in-out text-opacity-90 hover:text-cool-gray-600"
                      >
                        Product
                        <svg
                          class="w-3.5 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width={3} d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        class="flex items-center justify-center mr-10 text-base font-medium tracking-tight text-gray-700 transition duration-150 ease-in-out text-opacity-90 hover:text-cool-gray-600"
                      >
                        Community
                        <svg
                          class="w-3.5 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width={3} d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        class="flex items-center justify-center mr-10 text-base font-medium tracking-tight text-gray-700 transition duration-150 ease-in-out text-opacity-90 hover:text-cool-gray-600"
                      >
                        Plans
                      </a>
                    </div>
                  </div>
                  <div class="items-center justify-center hidden md:flex">
                    <a
                      href="#"
                      class="mr-5 text-lg font-medium transition duration-150 ease-in-out text-true-gray-800 hover:text-cool-gray-700"
                    >
                      Login
                    </a>
                    <button class="px-6 py-3 font-medium text-white transition duration-200 ease-in-out outline-none rounded-3xl bg-gradient-to-b from-gray-900 to-black focus:outline-none hover:shadow-md hover:from-true-gray-900">
                      Sign Up
                    </button>
                  </div>
                </nav>
                <div class="mt-20 text-left lg:2/6 xl:w-2/4 lg:mt-40 lg:ml-16">
                  <div class="text-6xl font-semibold leading-none text-gray-900">Bring all your work together</div>
                  <div class="mt-6 text-xl antialiased font-light text-true-gray-500">
                    A better experience for yout attendees and less stress yout team.
                  </div>
                  <button class="px-8 py-4 mt-6 font-normal tracking-wide text-white transition duration-200 ease-in-out rounded-full outline-none bg-gradient-to-b from-blue-600 to-blue-700 focus:outline-none hover:shadow-lg hover:from-blue-700">
                    Download for Free
                  </button>
                </div>
                <div class="h-40 my-6 text-gray-100 bg-gray-800">
                  <div class="flex items-center p-4 mx-auto ">
                    <span
                      class="text-3xl text-blue-400 iconify"
                      data-icon="ic:outline-move-to-inbox"
                      data-inline="false"
                    ></span>
                  </div>
                </div>
                <div class="mt-12 text-left lg:mt-32 lg:ml-20">
                  <bottom
                    type="button"
                    class="flex items-center justify-center w-12 h-12 text-gray-800 transition duration-300 ease-in-out rounded-full cursor-pointer bg-cool-gray-100 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </bottom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
