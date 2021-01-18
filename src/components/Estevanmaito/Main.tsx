import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <main>
        <div class="flex flex-col max-w-6xl px-6 mx-auto mb-16 md:flex-row">
          <div class="grid gap-8 md:grid-cols-3">
            <div class="flex items-center p-4 space-x-4 text-gray-700 rounded-lg shadow-xl dark:bg-gray-800 dark:text-gray-300">
              <div class="p-2 text-indigo-700 bg-indigo-100 rounded-full dark:text-indigo-100 dark:bg-indigo-700">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-semibold">Start where you are</h3>
                <p class="">No new syntax or configuration. Start with one property.</p>
              </div>
            </div>
            <div class="flex theme-dark">
              <div class="flex items-center w-full p-4 space-x-4 text-gray-700 rounded-lg shadow-xl dark:bg-gray-800 dark:text-gray-300">
                <div class="p-2 text-indigo-700 bg-indigo-100 rounded-full dark:text-indigo-100 dark:bg-indigo-700">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-semibold">This is dark!</h3>
                  <p class="">You can apply themes to every element, inside themes!</p>
                </div>
              </div>
            </div>
            <div class="flex items-center p-4 space-x-4 text-gray-700 rounded-lg shadow-xl dark:bg-gray-800 dark:text-gray-300">
              <div class="p-2 text-indigo-700 bg-indigo-100 rounded-full dark:text-indigo-100 dark:bg-indigo-700">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-semibold">See the code</h3>
                <p class="">
                  <a
                    class="text-blue-600 dark:text-blue-300"
                    href="https://github.com/estevanmaito/tailwindcss-multi-theme/tree/master/examples/simple"
                  >
                    The code
                  </a>{" "}
                  for this example is available for you to copy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  },
});
