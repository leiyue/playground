import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const people = [
      {
        name: "Andres Berlin",
        title: "Chief Executive Officer",
        avatar: "/avatars/photo-1564061170517-d3907caa96ea.jfif",
        motto:
          "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
      },
      {
        name: "Silene Tokyo",
        title: "Product Design Head",
        avatar: "/avatars/photo-1530577197743-7adf14294584.jfif",
        motto:
          "The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.",
      },
      {
        name: "Johnson Stone",
        title: "Manager Development",
        avatar: "/avatars/photo-1566753323558-f4e0952af115.jfif",
        motto:
          "Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.",
      },
      {
        name: "Dean Jones",
        title: "Principal Software Enginee",
        avatar: "/avatars/boy-smiling_23-2148155640.jpg",
        motto:
          "An avid open-source developer who loves to be creative and inventive. I have 20 years of experience in the field.",
      },
      {
        name: "Rachel Adams",
        title: "Product Design Head",
        avatar: "/avatars/blond-man-happy-expression_1194-2873.jpg",
        motto:
          "Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.",
      },
      {
        name: "Charles Keith",
        title: "UX Designer",
        avatar: "/avatars/photo-1570211776045-af3a51026f4a.jfif",
        motto:
          "A UX designer is the voice of the customer. Our job is to look beyond the business goals. We don't just experience user interface but also questions it.",
      },
    ];
    return () => (
      <>
        <div class="container flex justify-center pt-16 mx-auto">
          <div>
            <p class="pb-3 text-lg font-normal text-center text-gray-500">BUILDING TEAM</p>
            <h1 class="w-5/6 pb-6 mx-auto text-3xl font-extrabold text-center text-gray-800 xl:text-4xl sm:w-4/6">
              The Talented People Behind the Scenes of the Organization
            </h1>
          </div>
        </div>
        <div class="w-full px-10 pt-10 bg-gray-100">
          <div class="container mx-auto">
            <div class="flex flex-wrap items-center justify-around lg:justify-between">
              {people.map(({ name, title, avatar, motto }) => (
                <div class="relative mt-16 mb-32 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 sm:mb-24">
                  <div class="overflow-hidden bg-white rounded shadow-md">
                    <div class="absolute flex justify-center w-full -mt-20">
                      <div data-scroll data-scroll-speed="1" class="w-32 h-32">
                        <img src={avatar} alt="" class="object-cover w-full h-full rounded-full shadow-md" />
                      </div>
                    </div>
                    <div class="px-6 mt-16">
                      <div class="pb-1 text-3xl font-bold text-center">{name}</div>
                      <p class="text-sm text-center text-gray-800">{title}</p>
                      <div class="h-24 pt-3 text-base font-normal text-center text-gray-600">{motto}</div>
                      <div class="flex justify-center w-full pt-5 pb-5 text-gray-500">
                        {["github", "twitter", "instagram"].map((icon) => (
                          <a href="javascript:void(0)" class="mx-5">
                            <span
                              class="w-6 h-6 font-extralight iconify"
                              data-icon={`feather:${icon}`}
                              data-inline="false"
                            ></span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  },
});
