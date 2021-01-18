import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <header class="">
        <div class="flex flex-col max-w-6xl px-6 py-16 mx-auto md:flex-row">
          <div class="flex flex-col justify-center pr-4 md:w-1/2">
            <div>
              <a class="inline-flex items-center pl-1 pr-2 mb-3 bg-indigo-100 rounded-full dark:bg-gray-800" href="#">
                <span class="px-2 py-px mr-2 text-xs font-bold text-indigo-100 uppercase bg-indigo-700 rounded-full">
                  New
                </span>
                <span class="text-sm leading-loose text-indigo-800 dark:text-gray-300">
                  Visit our new products page &RightArrow;
                </span>
              </a>
            </div>
            <h1 class="text-5xl font-extrabold leading-none tracking-tight text-gray-800 lg:text-6xl dark:text-gray-400">
              It was never so easy to create themes
            </h1>
            <p class="mt-6 mb-12 text-lg text-gray-700 dark:text-gray-400">
              You can change this theme even by inspecting the code and applying the class{" "}
              <code class="px-1 text-purple-500 bg-gray-100 rounded dark:text-purple-200 dark:bg-gray-800">
                theme-dark
              </code>{" "}
              around
            </p>
            <div>
              <a class="px-6 py-2 font-semibold text-orange-100 bg-orange-600 rounded-full" href="#">
                Read more
              </a>
            </div>
          </div>
          <div class="md:w-1/2">
            <img class="w-full" src="https://tailwindcss-multi-theme.now.sh/wfh_1.svg" alt="Woman working from home" />
          </div>
        </div>
      </header>
    );
  },
});
