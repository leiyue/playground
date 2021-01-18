import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const isOpen = ref(false);
    const toggleMenu = () => (isOpen.value = !isOpen.value);
    const menu = [
      { text: "Company", href: "javascript:void(0)" },
      { text: "Features", href: "javascript:void(0)" },
      { text: "Contact", href: "javascript:void(0)" },
    ];
    return () => (
      <nav class="w-full">
        <div class="container flex items-center justify-between px-6 mx-auto">
          <div class="flex items-center w-64">
            <a href="/" class="w-full">
              <img src="https://logoipsum.com/logo/logo-12.svg" />
            </a>
          </div>
          <div>
            <div
              onClick={() => toggleMenu()}
              class="text-gray-500 sm:block md:hidden lg:hidden hover:text-gray-700 focus:text-gray-700 focus:outline-none"
            >
              <svg
                class="w-8 h-8"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </svg>
            </div>
            <div class={["md:block lg:block", isOpen.value ? "block" : "hidden"]}>
              <div
                onClick={() => toggleMenu()}
                class="fixed top-0 z-30 block pt-3 text-gray-500 md:hidden lg:hidden hover:text-gray-700 focus:text-gray-700 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul class="fixed top-0 bottom-0 left-0 right-0 z-20 flex flex-col items-center py-8 text-3xl bg-white md:bg-transparent md:text-base md:flex md:flex-row md:relative">
                {menu.map(({ text, href }) => (
                  <li class="pt-10 text-gray-600 cursor-pointer hover:text-gray-800 md:ml-10 md:pt-0">
                    <a href={href}>{text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  },
});
