import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <div class="flex justify-center w-screen h-full py-12 bg-gray-50">
        <div class="w-full">
          <nav class="flex justify-between flex-shrink-0 px-4 py-4 mx-auto overflow-hidden font-sans text-center bg-white border-b border-gray-200 sm:px-6 lg:px-8">
            <button class="px-3 py-2 text-sm text-gray-900 bg-transparent hover:text-gray-700">Subscribe</button>
            <ul class="flex items-center p-0 text-sm text-gray-700 list-none">
              <li>
                <a href="#" class="inline-block px-3 py-2 text-gray-900 no-underline hover:text-gray-700">
                  Products
                </a>
              </li>
              <li>
                <a href="#" class="inline-block px-3 py-2 text-gray-900 no-underline hover:text-gray-700">
                  Pricing
                </a>
              </li>
              <li class="px-6">
                <a href="/">
                  <img
                    src="https://stitches.hyperyolo.com/images/logo.png"
                    class="h-10 rounded-full sm:h-10"
                    alt="logo"
                  />
                </a>
              </li>
              <li>
                <a href="#" class="inline-block px-3 py-2 text-gray-900 no-underline hover:text-gray-700">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" class="inline-block px-3 py-2 text-gray-900 no-underline hover:text-gray-700">
                  Status
                </a>
              </li>
            </ul>
            <button class="px-3 py-2 ml-4 text-sm text-white bg-black hover:bg-text-gray-800">Log In</button>
          </nav>
        </div>
      </div>
    );
  },
});
