import { usePostState } from "@/contexts";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    // const posts = [
    //   {
    //     title: "Build Your New Idea with Laravel Freamwork.",
    //     author: "Alex John",
    //     avatar: "/avatars/alex_john.jpeg",
    //     published: new Date("Jun 1, 2020"),
    //     category: "Laravel",
    //     summary:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
    //   },
    //   {
    //     title: "Accessibility tools for designers and developers",
    //     author: "Jane Doe",
    //     avatar: "/avatars/jane_doe.jpeg",
    //     published: new Date("Mar 4, 2019"),
    //     category: "Design",
    //     summary:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
    //   },
    //   {
    //     title: "PHP: Array to Map",
    //     author: "Lisa Way",
    //     avatar: "/avatars/lisa_way.jpeg",
    //     published: new Date("Feb 14, 2019"),
    //     category: "PHP",
    //     summary:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
    //   },
    //   {
    //     title: "Django Dashboard - Learn by Coding",
    //     author: "Steve Matt",
    //     avatar: "/avatars/steve_matt.jpeg",
    //     published: new Date("Dec 23, 2018"),
    //     category: "Django",
    //     summary:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
    //   },
    //   {
    //     title: "TDD Frist",
    //     author: "Khatab Wedaa",
    //     avatar: "/avatars/khatab_wedaa.jpeg",
    //     published: new Date("Mar 10, 2018"),
    //     category: "Testing",
    //     summary:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
    //   },
    // ];
    const Post = usePostState();
    const pages = [
      { text: "previous", disabled: true },
      { text: "1", disabled: true },
      { text: "2", disabled: false },
      { text: "3", disabled: false },
      { text: "next", disabled: false },
    ];
    return () => (
      <div class="w-full lg:w-8/12">
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
          <div>
            <select class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option>Latest</option>
              <option>Last Week</option>
            </select>
          </div>
        </div>
        {Post.data.map(({ title, author, avatar, published, category, summary }) => (
          <div class="mt-6">
            <div class="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
              <div class="flex items-center justify-between">
                <span class="font-light text-gray-600">{new Date(published).toDateString()}</span>
                <a href="#" class="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">
                  {category}
                </a>
              </div>
              <div class="mt-2">
                <a href="#" class="text-2xl font-bold text-gray-700 hover:underline">
                  {title}
                </a>
                <p class="mt-2 text-gray-600">{summary}</p>
              </div>
              <div class="flex items-center justify-between mt-4">
                <a href="#" class="text-blue-500 hover:underline">
                  Read more
                </a>
                <div>
                  <a href="#" class="flex items-center">
                    <img src={avatar} alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                    <h1 class="font-bold text-gray-700 hover:underline">{author}</h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div class="mt-8">
          <div class="flex">
            {pages.map(({ text, disabled }) => (
              <a
                href="#"
                class={[
                  "px-3 py-2 mx-1 font-medium  bg-white rounded-md",
                  disabled ? "text-gray-500 cursor-not-allowed" : "text-gray-700 hover:bg-blue-500 hover:text-white",
                ]}
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  },
});
