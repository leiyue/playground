import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <div class="flex justify-center w-screen h-full py-12 bg-gray-50">
        <div class="w-full">
          <footer class="px-4 py-8 mx-auto overflow-hidden font-sans text-center text-white bg-black sm:px-6 lg:px-8">
            <div class="flex items-center justify-between">
              <ul class="flex items-center p-0 space-x-4 text-sm text-gray-700 list-none">
                <li>
                  {" "}
                  <a href="/" class="block w-32 mr-4">
                    <img src="https://stitches.hyperyolo.com/images/logo-white.png" class="" alt="logo" />
                  </a>
                </li>
                <li>
                  <a href="#" class="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-400">
                    Product
                  </a>
                </li>
                <li>
                  <a href="#" class="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-400">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#" class="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-400">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" class="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-400">
                    About Us
                  </a>
                </li>
              </ul>
              <p class="inline-block px-3 py-2 text-xs text-gray-700"> ©2021 Leiyue. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    );
  },
});
