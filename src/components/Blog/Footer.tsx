import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <footer class="px-6 py-2 text-gray-100 bg-gray-800">
        <div class="container flex flex-col items-center justify-between mx-auto md:flex-row">
          <a href="#" class="text-2xl font-bold">
            Brand
          </a>
          <p class="mt-2 md:mt-0">All rights reserved 2021.</p>
          <div class="flex mt-4 mb-2 -mx-2 md:mt-0 md:mb-0">
            {["ant-design:instagram-filled", "ant-design:facebook-filled", "ant-design:twitter-circle-filled"].map(
              (icon) => (
                <a href="#" class="w-4 h-4 mx-2 text-gray-100 fill-current hover:text-gray-400">
                  <span class="iconify" data-icon={icon} data-inline="false"></span>
                </a>
              ),
            )}
          </div>
        </div>
      </footer>
    );
  },
});
