import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <nav class="text-indigo-100 bg-indigo-700 dark:bg-gray-800 dark:text-gray-200">
        <div class="flex items-center justify-between h-16 max-w-6xl px-6 mx-auto">
          <a class="font-bold tracking-tight uppercase" href="/">
            tailwindcss multi theme
          </a>
          <ul class="flex items-center space-x-8 font-semibold" role="navigation">
            <li>
              <a href="https://github.com/estevanmaito/tailwindcss-multi-theme" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="https://github.com/estevanmaito/tailwindcss-multi-theme/tree/master/examples" target="_blank">
                Example
              </a>
            </li>
            <li>
              <a
                href="https://github.com/estevanmaito/tailwindcss-multi-theme/blob/master/README.md#-install"
                target="_blank"
              >
                Docs
              </a>
            </li>
            <li>
              <button class="p-2 rounded focus:outline-none" aria-label="Toggle theme" id="btn-theme">
                <svg class="w-5 h-5" aria-label="Apply dark theme" role="image" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              </button>
            </li>
            <li>
              <a class="px-6 py-2 text-orange-100 bg-orange-600 rounded-full" href="#">
                Log in
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  },
});
