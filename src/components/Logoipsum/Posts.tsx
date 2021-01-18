import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const posts = [
      {
        cover: "/images/photo-1573451444472-7b0b275ab824.jfif",
        category: "VEHICLE",
        title: "The way I drive and handle a car, is an expression of my inner feeling.",
        author: "Silene Cox",
        published: new Date("May 13, 2019"),
      },
      {
        cover: "/images/photo-1544476915-ed1370594142.jfif",
        category: "Work",
        title: "I'm a greater believer in luck, and I find the harder I work the more I have of it.",
        author: "Sansa Rollins",
        published: new Date("May 13, 2019"),
      },
      {
        cover: "/images/photo-1462331940025-496dfbfc7564.jfif",
        category: "Productivity",
        title: "Productivity is being able to do things that you were never able to do before.",
        author: "Ashley Wilson",
        published: new Date("May 13, 2019"),
      },
      {
        cover: "/images/photo-1573451444472-7b0b275ab824.jfif",
        category: "VEHICLE",
        title: "The way I drive and handle a car, is an expression of my inner feeling.",
        author: "Silene Cox",
        published: new Date("May 13, 2019"),
      },
      {
        cover: "/images/photo-1544476915-ed1370594142.jfif",
        category: "Work",
        title: "I'm a greater believer in luck, and I find the harder I work the more I have of it.",
        author: "Sansa Rollins",
        published: new Date("May 13, 2019"),
      },
      {
        cover: "/images/photo-1462331940025-496dfbfc7564.jfif",
        category: "Productivity",
        title: "Productivity is being able to do things that you were never able to do before.",
        author: "Ashley Wilson",
        published: new Date("May 13, 2019"),
      },
      {
        cover: "/images/photo-1573451444472-7b0b275ab824.jfif",
        category: "VEHICLE",
        title: "The way I drive and handle a car, is an expression of my inner feeling.",
        author: "Silene Cox",
        published: new Date("May 13, 2019"),
      },
      {
        cover: "/images/photo-1544476915-ed1370594142.jfif",
        category: "Work",
        title: "I'm a greater believer in luck, and I find the harder I work the more I have of it.",
        author: "Sansa Rollins",
        published: new Date("May 13, 2019"),
      },
    ];
    return () => (
      <div class="container pt-16 mx-auto mb-16">
        <div class="mb-10">
          <h1 class="pt-4 mb-4 text-3xl font-extrabold text-center text-gray-800 xl:text-5xl xl:pt-0">
            Our Blog Posts
          </h1>
          <p class="w-11/12 mx-auto text-xl text-center text-gray-600 xl:w-3/5">
            Don’t focus on having a great blog. Focus on producing a blog that’s great for your readers.” As a blogger,
            everything you do flows from understanding your audience and seeking to help them.
          </p>
        </div>
        <div class="flex flex-wrap items-center justify-around min-h-screen lg:justify-between">
          {posts.map(({ cover, category, title, author, published }) => (
            <div class="relative w-11/12 mx-auto mb-32 sm:max-w-xs sm:w-5/12 xl:w-1/3 lg:w-1/2 sm:mx-0 lg:mb-20">
              <div data-scroll data-scroll-speed="2" class="z-10 h-64 rounded shadow">
                <img src={cover} alt="" class="object-cover w-full h-full overflow-hidden rounded" />
              </div>
              <div
                data-scroll
                data-scroll-speed="1"
                class="relative z-20 w-11/12 p-6 mx-auto -mt-20 bg-white rounded shadow-lg"
              >
                <p class="pb-3 text-sm text-center text-indigo-700 uppercase">{category}</p>
                <p class="pb-3 text-lg text-center text-gray-800">{title}</p>
                <p class="text-sm text-center text-gray-800">
                  {published.toLocaleDateString("zh-CN")} by{" "}
                  <a href="javascript:void(0)">
                    <span class="text-indigo-700 cursor-pointer">{author}</span>
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
});
