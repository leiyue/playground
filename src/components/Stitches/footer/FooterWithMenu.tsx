import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <div class="flex justify-center w-screen h-full py-12 bg-gray-50">
        <div class="w-full">
          <footer class="px-4 py-8 mx-auto overflow-hidden font-sans text-center text-white bg-black sm:px-6 lg:px-8">
            <div class="container flex items-center justify-between w-3/5">
              <a href="/" class="block w-1/2">
                <img src="https://stitches.hyperyolo.com/images/logo-white.png" class="w-32" alt="logo" />
              </a>
              <div class="flex justify-center w-1/2 mt-6 text-sm lg:mt-0">
                <ul class="flex flex-col p-0 font-thin text-left text-gray-700 list-none">
                  <li class="inline-block px-3 py-2 font-medium tracking-wide text-white no-underline uppercase">
                    Product
                  </li>
                  <li>
                    <a href="#" class="inline-block px-3 py-2 text-gray-200 no-underline hover:text-gray-400">
                      Popular
                    </a>
                  </li>
                  <li>
                    <a href="#" class="inline-block px-3 py-2 text-gray-200 no-underline hover:text-gray-400">
                      Trending
                    </a>
                  </li>
                  <li>
                    <a href="#" class="inline-block px-3 py-2 text-gray-200 no-underline hover:text-gray-400">
                      Catalog
                    </a>
                  </li>
                  <li>
                    <a href="#" class="inline-block px-3 py-2 text-gray-200 no-underline hover:text-gray-400">
                      Features
                    </a>
                  </li>
                </ul>
                <ul class="flex flex-col p-0 font-thin text-left text-gray-700 list-none">
                  <li class="inline-block px-3 py-2 font-medium tracking-wide text-white no-underline uppercase">
                    Company
                  </li>
                  <li>
                    <a href="#" class="inline-block px-3 py-2 text-gray-200 no-underline hover:text-gray-400">
                      Press Release
                    </a>
                  </li>
                  <li>
                    <a href="#" class="inline-block px-3 py-2 text-gray-200 no-underline hover:text-gray-400">
                      Mission
                    </a>
                  </li>
                  <li>
                    <a href="#" class="inline-block px-3 py-2 text-gray-200 no-underline hover:text-gray-400">
                      Strategy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="inline-block px-3 py-2 text-gray-200 no-underline hover:text-gray-400">
                      Works
                    </a>
                  </li>
                </ul>
                <ul class="flex flex-col p-0 font-thin text-left text-gray-700 list-none">
                  <li class="inline-block px-3 py-2 font-medium tracking-wide text-white no-underline uppercase">
                    Info
                  </li>
                  <li>
                    <a href="#" class="inline-block px-3 py-2 text-gray-200 no-underline hover:text-gray-400">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#" class="inline-block px-3 py-2 text-gray-200 no-underline hover:text-gray-400">
                      Developers
                    </a>
                  </li>
                  <li>
                    <a href="#" class="inline-block px-3 py-2 text-gray-200 no-underline hover:text-gray-400">
                      Customer Services
                    </a>
                  </li>
                  <li>
                    <a href="#" class="inline-block px-3 py-2 text-gray-200 no-underline hover:text-gray-400">
                      Started Guide
                    </a>
                  </li>
                </ul>
                <div class="flex flex-col text-gray-700">
                  <div class="inline-block px-3 py-2 font-medium tracking-wide text-white uppercase">Follow Us</div>
                  <div class="flex justify-start pl-0 space-x-6 md:pl-4">
                    <a class="block text-gray-900 no-underline hover:text-black" href="#">
                      <span class="text-white iconify" data-icon="fa:github-alt" data-inline="false"></span>
                    </a>
                    <a class="block text-gray-900 no-underline hover:text-black" href="#">
                      <span class="text-white iconify" data-icon="fa:slack" data-inline="false"></span>
                    </a>
                    <a class="block text-gray-900 no-underline hover:text-black" href="#">
                      <span class="text-white iconify" data-icon="fa:twitter" data-inline="false"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  },
});
