import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <div class="flex justify-center w-screen h-full py-12 bg-gray-50">
        <div class="container p-0 m-auto font-sans text-gray-900">
          <ul class="container list-none">
            <li class="flex items-center justify-between py-4 border-b border-gray-300 ">
              <div class="flex items-center w-2/5">
                <div class="w-10 h-10 mr-3 rounded">
                  <div class="w-10 h-10 m-auto bg-gray-300 rounded-full"></div>
                </div>
                <div class="flex-1">
                  <div>
                    <span class="font-bold">Logan Slayer</span>
                    <span class="text-xs text-gray-700">@logan</span>
                  </div>
                  <p class="leading-normal text-black">1-324-352-3000</p>
                </div>
              </div>
              <p class="w-2/5">UI/UX Designer @Squarespace.</p>
              <label for="status" class="w-1/5 font-bold text-right">
                Active
              </label>
            </li>
            <li class="flex items-center justify-between py-4 border-b border-gray-300">
              <div class="flex items-start w-2/5">
                <div class="w-10 h-10 mr-3 rounded">
                  <div class="w-10 h-10 m-auto bg-gray-300 rounded-full"></div>
                </div>
                <div class="flex-1 overflow-hidden">
                  <div>
                    <span class="font-bold">Sarah Mann</span>
                    <span class="text-xs text-gray-700">@sarah</span>
                  </div>
                  <p class="leading-normal text-black">1-324-111-0000</p>
                </div>
              </div>
              <p class="w-2/5">Web security expert at cloudflare</p>
              <label for="status" class="w-1/5 font-bold text-right">
                Inactive
              </label>
            </li>
            <li class="flex items-center justify-between py-4 border-b border-gray-300">
              <div class="flex items-start w-2/5">
                <div class="w-10 h-10 mr-3 rounded">
                  <div class="w-10 h-10 m-auto bg-gray-300 rounded-full"></div>
                </div>
                <div class="flex-1 overflow-hidden">
                  <div>
                    <span class="font-bold">Kotlin Lee</span>
                    <span class="text-xs text-gray-700">@kotlin</span>
                  </div>
                  <p class="leading-normal text-black">1-332-435-1322</p>
                </div>
              </div>
              <p class="w-2/5">System admin at Drip.</p>
              <label for="status" class="w-1/5 font-bold text-right">
                Active
              </label>
            </li>
          </ul>
        </div>
      </div>
    );
  },
});
