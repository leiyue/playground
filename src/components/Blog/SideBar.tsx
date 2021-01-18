import { usePostState } from "@/contexts";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const Post = usePostState();
    const authors = Post.getAuthors();
    const authorCounts = Post.getAuthorCounts();
    const postCategories = Post.getCategories();
    const latest = Post.getRecent();
    return () => (
      <div class="hidden w-4/12 -mx-8 lg:block">
        <div class="px-8">
          <h1 class="mb-4 text-xl font-bold text-gray-700">Authors</h1>
          <div class="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
            <ul class="-mx-4">
              {authors.map(({ author, avatar }, idx) => (
                <li class={["flex items-center", idx > 0 ? "mt-6" : ""]}>
                  <img src={avatar} alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full" />
                  <p>
                    <a href="#" class="mx-1 font-bold text-gray-700 hover:underline">
                      {author}
                    </a>
                    <span class="text-sm font-light text-gray-700">Created {authorCounts[author]} Posts</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div class="px-8 mt-10">
          <h1 class="mb-4 text-xl font-bold text-gray-700">Categories</h1>
          <div class="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
            <ul>
              {postCategories.map(({ category }, idx) => (
                <li class={["flex items-center", idx > 0 ? "mt-2" : ""]}>
                  <a href="#" class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">
                    - {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {latest ? (
          <div class="px-8 mt-10">
            <h1 class="mb-4 text-xl font-bold text-gray-700">Recent Post</h1>
            <div class="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
              <div class="flex items-center justify-center">
                <a href="#" class="px-2 py-1 text-sm text-green-100 bg-gray-600 rounded hover:bg-gray-500">
                  {latest.category}
                </a>
              </div>
              <div class="mt-4">
                <a href="#" class="text-lg font-medium text-gray-700 hover:underline">
                  {latest.title}
                </a>
              </div>
              <div class="flex items-center justify-between mt-4">
                <div class="flex items-center">
                  <img src={latest.avatar} alt="avatar" class="object-cover w-8 h-8 rounded-full" />
                  <a href="#" class="mx-3 text-sm text-gray-700 hover:underline">
                    {latest.author}
                  </a>
                </div>
                <span class="text-sm font-light text-gray-600">{new Date(latest.published).toDateString()}</span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  },
});
