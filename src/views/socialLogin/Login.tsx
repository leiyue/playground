import SleepyPuppy from "@/assets/sleepy_puppy.webp";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <div class="flex flex-row flex-grow w-full h-screen bg-gray-100">
        <div class="flex-grow-0 hidden w-full pr-4 md:flex">
          <div class="relative w-full h-full">
            <div
              class="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover"
              style={{ background: `url('${SleepyPuppy}')` }}
            ></div>
          </div>
        </div>

        <div class="flex flex-grow-0 w-full px-4 md:1/2 lg:w-1/3 xl:w-1/4">
          <div class="flex flex-col items-center justify-center w-full h-full">
            <div class="flex flex-col w-full h-full p-5">
              <div></div>
              <div class="flex flex-col justify-center flex-1">
                <h2 class="my-4 text-xl font-bold text-center text-gray-700">Sign in to get started</h2>

                <p class="mb-4 text-base font-normal text-center text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing.
                </p>
                <button class="relative inline-flex items-center justify-center w-full h-10 px-4 mb-3 mr-4 text-base font-semibold leading-tight whitespace-no-wrap align-middle transition-all duration-200 bg-gray-200 rounded-md outline-none appearance-none select-none focus:outline-none min-w-10 focus:shadow-outline hover:bg-gray-300 active:bg-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-2"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  Sign in with Github
                </button>

                <button class="relative inline-flex items-center justify-center w-full h-10 px-4 mb-3 mr-4 text-base font-semibold leading-tight text-white whitespace-no-wrap align-middle transition-all duration-200 bg-indigo-500 rounded-md outline-none appearance-none select-none focus:outline-none min-w-10 focus:shadow-outline hover:bg-indigo-600 active:bg-indigo-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-2"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                  Sign in with Twitter
                </button>

                <button class="relative inline-flex items-center justify-center w-full h-10 px-4 mb-3 mr-4 text-base font-semibold leading-tight text-white whitespace-no-wrap align-middle transition-all duration-200 bg-red-500 rounded-md outline-none appearance-none select-none focus:outline-none min-w-10 focus:shadow-outline hover:bg-red-600 active:bg-red-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-2"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M17.788 5.108A9 9 0 1021 12h-8" />
                  </svg>
                  Sign in with Google
                </button>

                <button class="relative inline-flex items-center justify-center w-full h-10 px-4 mb-3 mr-4 text-base font-semibold leading-tight text-white whitespace-no-wrap align-middle transition-all duration-200 bg-blue-500 rounded-md outline-none appearance-none select-none focus:outline-none min-w-10 focus:shadow-outline hover:bg-blue-600 active:bg-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-2"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  Sign in with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
