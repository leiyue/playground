import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <div class="flex justify-center w-screen h-full py-12 bg-gray-50">
        <div class="w-full">
          <nav class="flex justify-between flex-shrink-0 px-4 py-4 mx-auto overflow-hidden font-sans text-center bg-white border-b border-gray-200 sm:px-6 lg:px-8">
            <div class="flex items-center">
              <a href="/" class="w-32 mr-4">
                <img src="https://stitches.hyperyolo.com/images/logo.png" class="w-full rounded-full" alt="logo" />
              </a>
              <ul class="flex items-center p-0 text-sm text-gray-700 list-none">
                <li>
                  <a href="#" class="inline-block px-3 py-2 text-gray-900 no-underline hover:text-gray-700">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" class="inline-block px-3 py-2 text-gray-900 no-underline hover:text-gray-700">
                    Questions
                  </a>
                </li>
              </ul>
              <input
                type="search"
                placeholder="Search"
                class="px-2 py-1 pl-10 text-sm leading-normal placeholder-gray-900 transition bg-gray-300 border border-transparent rounded appearance-none focus:outline-0 focus:bg-white focus:border-gray-300 ds-input"
              />
            </div>
            <ul class="flex items-center p-0 text-sm text-gray-700 list-none">
              <li>
                <a href="#" class="inline-block px-3 py-2 text-gray-900 no-underline hover:text-gray-700">
                  Log In
                </a>
              </li>
              <li>
                <button class="px-3 py-2 ml-4 text-white bg-black hover:bg-text-gray-800">Sign Up</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  },
});
