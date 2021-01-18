import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const contexts = [
      { image: "https://source.unsplash.com/random/400x225", text: "Desktop Publishing Software like Aldus PageMaker" },
      { image: "https://source.unsplash.com/random/400x225", text: "Desktop Publishing Software like Aldus PageMaker" },
      { image: "https://source.unsplash.com/random/400x225", text: "Desktop Publishing Software like Aldus PageMaker" },
      { image: "https://source.unsplash.com/random/400x225", text: "Desktop Publishing Software like Aldus PageMaker" },
      { image: "https://source.unsplash.com/random/400x225", text: "Desktop Publishing Software like Aldus PageMaker" },
    ];
    return () => (
      <section class="py-4 font-sans bg-white">
        <div class="container flex flex-wrap items-center justify-start max-w-6xl m-auto">
          {contexts.map(({ image, text }) => (
            <div class="flex flex-col w-full px-3 mb-8 md:w-1/2 lg:w-1/3">
              <div class="overflow-hidden transition bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px">
                <img class="w-full" src={image} alt="Sunset in the mountains" />
                <div class="flex flex-col justify-between p-6 ">
                  <h3 class="mb-4 font-medium leading-normal text-gray-900">{text}</h3>
                  <p class="inline-flex items-center">
                    <span class="text-sm text-gray-700">Read More</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  },
});
