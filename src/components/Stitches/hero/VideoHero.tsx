import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <section
        class="flex flex-col items-center justify-center w-full h-screen font-sans text-center bg-cover"
        style="background:url(https://source.unsplash.com/random/1920x1080) no-repeat center;"
      >
        <div class="flex items-center justify-center w-16 h-16 mb-8 text-black bg-white rounded-full">
          <span class="ml-1 iconify" data-icon="fa-solid:play" data-inline="false"></span>
        </div>
        <label for="" class="mt-8 text-xs font-hairline text-white uppercase tracking-extrawide">
          Watch Video
        </label>
        <h3 class="max-w-sm mx-auto mt-4 text-2xl font-normal leading-normal text-white">
          Differentiate Yourself And Attract More Attention Sales And Profits
        </h3>
      </section>
    );
  },
});
