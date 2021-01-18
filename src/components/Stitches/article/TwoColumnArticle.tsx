import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <section class="container flex flex-col max-w-6xl px-6 py-8 m-auto font-sans md:flex-row lg:px-0">
        <div class="flex flex-col items-start justify-center w-full pb-6 pr-8 mb-6 border-b md:w-1/4 md:border-0 md:mb-0 md:pb-0">
          <label for="" class="font-bold">
            Important Note
          </label>
          <p class="mt-4 leading-normal border-0 md:border-r md:pr-2">
            Nullam gravida sem vel massa pulvinar cursus. In sagittis enim vitae eros ultrices sagittis
          </p>
        </div>
        <div class="grid w-full grid-flow-col leading-normal md:w-3/4">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
            Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC.
          </p>
          <p>
            This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of
            Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
            "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by
            English versions from the 1914 translation by H. Rackham. The standard chunk of Lorem Ipsum used since the
            1500s is reproduced below for those interested.
          </p>
        </div>
      </section>
    );
  },
});
