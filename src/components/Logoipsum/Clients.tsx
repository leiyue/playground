import Quotation from "@/assets/quotation.png";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const clients = [
      {
        name: "Jane Doe",
        avatar: "/avatars/jane_doe.png",
        company: "Apple Inc",
        comments: [
          "From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.",
          "We can't believe how far we have come in the last 6 months. I really did not think this awesome career move would come so quickly. Thanks to each of you put into SI and the partner relationships.",
        ],
      },
      {
        name: "Richard Stark",
        avatar: "/avatars/richard_stark.png",
        company: "UX Strategy",
        comments: [
          "The company really helped me with my personal branding. Everything from conception to execution was extremely awesome and really professional. I enjoyed the services they offered. Their design is impeccable.",
          "I truly value the relationship they created with me. I will always think first about them while starting any projects in the future. They are definitely my go-to for any design or services. Excellent communication and I always feel that I am their first priority.",
        ],
      },
      {
        name: "Thomas Clark",
        avatar: "/avatars/thomas_clark.png",
        company: "Maintenance",
        comments: [
          "It's not just a pretty face but I am also thrilled by the quality of support. It's fast reliable and has no complications at all. It has completely changed the way I develop a website . It lets you create anything you envision and it does so easily and flawlessly.",
          "Undoubtedly working with them was just like playing. It was so easy editing your content, so fast getting perfect results and so easy customizing based on your own brand.Thank you so much.",
        ],
      },
    ];
    const active = ref(Math.floor(Math.random() * clients.length));
    const back = () => (active.value > 0 ? active.value-- : (active.value = clients.length - 1));
    const next = () => (active.value < clients.length - 1 ? active.value++ : (active.value = 0));
    return () => (
      <div class="container pt-16 mx-auto">
        <div class="flex flex-wrap rounded-lg">
          <div class="px-8 py-16 text-center bg-indigo-700 xl:w-2/5 lg:w-2/5 sm:w-full xl:py-32 xl:px-16 xl:text-left lg:text-left md:text-left sm:text-left xl:rounded-tl xl:rounded-bl">
            <h1 class="pb-2 text-4xl font-extrabold text-white">Our Happy Clients</h1>
            <p class="text-lg text-white">
              Our takeout just went throughout the roof because we could be taking five orders at one time instead of
              one order at a time.
            </p>
          </div>
          <div class="pt-4 pb-4 pl-4 pr-4 bg-gray-200 lg:w-3/5 xl:w-3/5 xl:pr-10 xl:pl-0 xl:pt-10 xl:pb-10 xl:rounded-tr xl:rounded-br">
            <section>
              {clients.map(({ name, avatar, company, comments }, idx) => (
                <figure class={idx === active.value ? "visible" : "hidden"}>
                  <div class="relative bg-white">
                    <img src={Quotation} alt="" class="absolute pl-6 -mt-4 sm:pl-12" />
                    <div class="px-6 pt-20 sm:px-12">
                      {comments.map((comment) => (
                        <p class="pb-6 text-base text-gray-600">{comment}</p>
                      ))}
                      <div class="flex items-center justify-between">
                        <div class="flex items-center pb-12">
                          <div class="w-12 h-12">
                            <img src={avatar} alt="" class="object-cover w-full h-full overflow-hidden rounded-full" />
                          </div>
                          <p class="ml-3 font-bold text-gray-600">
                            {name} <br />
                            <span class="text-base font-light">{company}</span>
                          </p>
                        </div>
                        <div class="flex pb-12 text-4xl text-gray-400 cursor-pointer">
                          <a href="javascript:void(0)" onClick={() => back()}>
                            <span class="iconify" data-icon="heroicons-outline:chevron-left" data-inline="true"></span>
                          </a>
                          <a href="javascript:void(0)" onClick={() => next()}>
                            <span class="iconify" data-icon="heroicons-outline:chevron-right" data-inline="true"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </figure>
              ))}
            </section>
          </div>
        </div>
      </div>
    );
  },
});
