import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <div class="flex justify-center w-screen h-full py-12 bg-gray-50">
        <div class="w-full">
          <footer class="px-4 py-8 mx-auto overflow-hidden font-sans text-center sm:px-6 lg:px-8">
            <div class="container flex flex-col justify-between pb-4 mx-auto overflow-hidden text-center md:flex-row md:text-left">
              <a href="#" class="block w-full mr-4 md:w-1/4">
                <img src="https://stitches.hyperyolo.com/images/logo.png" class="w-32 -ml-8 md:ml-0" alt="logo" />
              </a>
              <div class="w-full mt-6 leading-normal text-gray-900 md:mt-0">
                <h4 class="py-2 font-bold tracking-wide uppercase">About US</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div class="flex flex-col items-center w-full mt-6 text-gray-700 md:w-1/4 md:mt-0">
                <h4 class="inline-block px-3 py-2 font-bold tracking-wide text-gray-900 uppercase">Follow Us</h4>
                <div class="flex items-center justify-start pl-0 space-x-6 md:pl-4">
                  <a class="block text-gray-900 no-underline hover:text-black" href="#">
                    <span class="iconify" data-icon="fa:github-alt" data-inline="false"></span>
                  </a>
                  <a class="block text-gray-900 no-underline hover:text-black" href="#">
                    <span class="iconify" data-icon="fa:slack" data-inline="false"></span>
                  </a>
                  <a class="block text-gray-900 no-underline hover:text-black" href="#">
                    <span class="iconify" data-icon="fa:twitter" data-inline="false"></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="pt-4 mt-4 text-xs text-center text-gray-700 border-t border-gray-300">
              {" "}
              ©2021 Leiyue. All rights reserved.
            </div>
          </footer>
        </div>
      </div>
    );
  },
});
