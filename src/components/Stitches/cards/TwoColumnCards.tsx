import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const contexts = [
      { image: "https://source.unsplash.com/random/200x125", text: "Can coffee make you a better developer?" },
      { image: "https://source.unsplash.com/random/200x125", text: "Can coffee make you a better developer?" },
    ];
    return () => (
      <section class="py-4 font-sans bg-white">
        <div class="container flex flex-col flex-wrap items-center justify-start max-w-6xl m-auto md:flex-row">
          {contexts.map(({ image, text }) => (
            <div class="w-full p-3 lg:w-1/2">
              <div class="flex flex-col h-auto overflow-hidden border rounded shadow lg:flex-row lg:h-32">
                <img class="flex-none block w-full h-auto bg-cover lg:w-48" src={image} />
                <div class="flex flex-col justify-between p-4 leading-normal bg-white rounded-b lg:rounded-b-none lg:rounded-r">
                  <div class="mb-2 text-xl font-bold leading-tight text-black">{text}</div>
                  <p class="text-base text-gray-700">Read more</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  },
});
