import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <section class="flex justify-between max-w-2xl mx-auto mt-6 font-sans">
        <a href="#" class="flex flex-col items-center w-1/4 text-xs text-center text-black no-underline">
          <div class="z-10 flex items-center justify-center w-8 h-8 mb-2 text-white bg-black rounded-full">
            <span class="iconify" data-icon="fa:check" data-inline="false"></span>
          </div>
          <label class="font-bold tracking-wide uppercase">Step 1</label>
        </a>
        <a href="#" class="relative flex flex-col items-center w-1/4 text-xs text-center text-black no-underline">
          <div class="z-10 flex items-center justify-center w-8 h-8 mb-2 text-white bg-black rounded-full">
            <span class="iconify" data-icon="fa:check" data-inline="false"></span>
          </div>
          <div class="absolute inset-x-0 h-1 mt-4 transform -translate-x-24 bg-black"></div>
          <label class="font-bold tracking-wide uppercase">Step 2</label>
        </a>
        <a href="#" class="relative flex flex-col items-center w-1/4 text-xs text-center text-black no-underline">
          <div class="z-10 flex items-center justify-center w-8 h-8 mb-2 text-white bg-black rounded-full">
            <span class="iconify" data-icon="fa:check" data-inline="false"></span>
          </div>
          <div class="absolute inset-x-0 h-1 mt-4 transform -translate-x-24 bg-black"></div>
          <label class="font-bold tracking-wide uppercase">Step 3</label>
        </a>
        <a href="#" class="relative flex flex-col items-center w-1/4 text-xs text-center text-black no-underline">
          <div class="z-10 flex items-center justify-center w-8 h-8 mb-2 text-white bg-gray-700 rounded-full">
            <span class="iconify" data-icon="fa:check" data-inline="false"></span>
          </div>
          <div class="absolute inset-x-0 h-1 mt-4 transform -translate-x-24 bg-gray-700"></div>
          <label class="font-bold tracking-wide text-gray-700 uppercase">Step 4</label>
        </a>
      </section>
    );
  },
});
