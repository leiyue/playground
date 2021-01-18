import Avatar from "@/assets/person.jpg";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <section class="container max-w-xl py-8 m-auto font-sans">
        <div class="flex py-3">
          <div class="w-1/8">
            <a href="#" class="block w-12 h-12 mr-2">
              <img src={Avatar} class="bg-gray-300 rounded-full" />
            </a>
          </div>
          <div class="w-7/8">
            <div class="flex justify-between">
              <div class="flex space-x-1">
                <span class="font-bold">
                  <a href="#" class="text-black">
                    Natalie Rushman
                  </a>
                </span>
                <span class="text-gray-700">@natalie</span>
                <span class="text-gray-700">May 26</span>
              </div>
              <div>
                <a href="#" class="text-gray-700 hover:text-black">
                  <span class="iconify" data-icon="fa:chevron-down" data-inline="false"></span>
                </a>
              </div>
            </div>
            <div>
              <p class="my-3 text-sm">
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
              </p>
              <div class="pb-2">
                <span class="flex justify-start space-x-4">
                  <a href="#" class="flex items-center space-x-2 text-gray-500 no-underline hover:text-black">
                    <span class="iconify" data-icon="fa:comment" data-inline="true"></span>
                    <span>2</span>
                  </a>
                  <a href="#" class="flex items-center space-x-2 text-gray-500 no-underline hover:text-black">
                    <span class="iconify" data-icon="fa:envelope" data-inline="true"></span>
                  </a>
                </span>
              </div>
              <hr class="border-b" />
              <div class="flex py-3">
                <div class="w-1/8">
                  <a href="#" class="block w-12 h-12 mr-2">
                    <img src={Avatar} class="bg-gray-300 rounded-full" />
                  </a>
                </div>
                <div class="w-7/8">
                  <div class="flex space-x-1">
                    <span class="font-bold">
                      <a href="#" class="text-black">
                        Natalie Rushman
                      </a>
                    </span>
                    <span class="text-gray-700">@natalie</span>
                    <span class="text-gray-700">May 26</span>
                  </div>
                  <div>
                    <p class="my-3 text-sm">
                      Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                      text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                    </p>
                    <div class="pb-2">
                      <span class="flex justify-start space-x-4">
                        <a href="#" class="flex items-center space-x-2 text-gray-500 no-underline hover:text-black">
                          <span class="iconify" data-icon="fa:comment" data-inline="true"></span>
                          <span>2</span>
                        </a>
                        <a href="#" class="flex items-center space-x-2 text-gray-500 no-underline hover:text-black">
                          <span class="iconify" data-icon="fa:envelope" data-inline="true"></span>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="border-b" />
              <div class="flex py-3">
                <div class="w-1/8">
                  <a href="#" class="block w-12 h-12 mr-2">
                    <img src={Avatar} class="bg-gray-300 rounded-full" />
                  </a>
                </div>
                <div class="w-7/8">
                  <div class="flex space-x-1">
                    <span class="font-bold">
                      <a href="#" class="text-black">
                        Natalie Rushman
                      </a>
                    </span>
                    <span class="text-gray-700">@natalie</span>
                    <span class="text-gray-700">May 26</span>
                  </div>
                  <div>
                    <p class="my-3 text-sm">
                      Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                      text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                    </p>
                    <div class="pb-2">
                      <span class="flex justify-start space-x-4">
                        <a href="#" class="flex items-center space-x-2 text-gray-500 no-underline hover:text-black">
                          <span class="iconify" data-icon="fa:comment" data-inline="true"></span>
                          <span>2</span>
                        </a>
                        <a href="#" class="flex items-center space-x-2 text-gray-500 no-underline hover:text-black">
                          <span class="iconify" data-icon="fa:envelope" data-inline="true"></span>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
});
