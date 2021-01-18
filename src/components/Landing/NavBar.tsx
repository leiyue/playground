import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { useWindowScroll } from "@vueuse/core";
import { on, off } from "evtd";

export default defineComponent({
  setup() {
    const isOpen = ref(false);

    const toggle = () => (isOpen.value = !isOpen.value);

    const links = [
      { text: "Active", active: true },
      { text: "Link", active: false },
      { text: "Link", active: false },
    ];

    const { y } = useWindowScroll();

    const isActive = ref(false);

    const handleScroll = () => {
      if (y.value > 10) {
        isActive.value = true;
      } else {
        isActive.value = false;
      }
    };

    onMounted(() => {
      on("scroll", document, handleScroll);
    });

    onUnmounted(() => {
      off("scroll", document, handleScroll);
    });

    return () => (
      <nav class={["fixed top-0 z-30 w-full text-white", isActive.value ? "bg-white shadow" : ""]}>
        <div class="container flex flex-wrap items-center justify-between w-full py-2 mx-auto mt-0">
          <div class="flex items-center pl-4">
            <a
              class={[
                "text-2xl font-bold no-underline hover:no-underline lg:text-4xl",
                isActive.value ? "text-gray-800" : "text-white",
              ]}
              href="/"
            >
              <svg class="inline h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                <rect
                  fill="#2a2a31"
                  x="16.539"
                  y="425.626"
                  width="479.767"
                  height="50.502"
                  transform="matrix(1,0,0,1,0,0)"
                />
                <path
                  class="plane-take-off"
                  d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                />
              </svg>
              LANDING
            </a>
          </div>
          <div class="block pr-4 lg:hidden">
            <button class="flex items-center p-1 text-orange-800 hover:text-gray-900" onClick={() => toggle()}>
              <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            class={[
              "z-20 flex-grow  w-full p-4 mt-2 text-black lg:flex lg:items-center lg:w-auto lg:mt-0 lg:bg-transparent lg:p-0",
              isOpen.value ? "block bg-white" : "hidden",
              isActive.value ? "bg-white" : "bg-gray-100",
            ]}
          >
            <ul class="items-center justify-end flex-1 list-reset lg:flex">
              {links.map(({ text, active }) => (
                <li class="mr-3">
                  <a
                    href="javascript:void(0)"
                    class={[
                      "inline-block px-4 py-2 text-black no-underline",
                      active ? "font-bold" : "hover:text-gray-800 hover:text-underline",
                    ]}
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
            <button
              class={[
                "px-8 py-4 mx-auto mt-4 font-bold rounded-full shadow opacity-75 lg:mx-0 hover:underline lg:mt-0",
                isActive.value ? "text-white gradient" : "text-gray-800 bg-white",
              ]}
            >
              Action
            </button>
          </div>
        </div>
        <hr class="py-0 my-0 border-b border-gray-100 opacity-25" />
      </nav>
    );
  },
});
