import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <div class="max-w-xl py-12 mx-auto divide-y md:max-w-4xl bg-gray-50">
        <div class="py-12">
          <h2 class="text-2xl font-bold text-center">Simple</h2>
          <div class="max-w-md mx-auto mt-2">
            <div class="grid grid-cols-1 gap-2">
              <label class="block">
                <span class="text-gray-700">Full name</span>
                <input
                  type="text"
                  class="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder=""
                />
              </label>
              <label class="block">
                <span class="text-gray-700">Email address</span>
                <input
                  type="email"
                  class="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="john@example.com"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">When is your event?</span>
                <input
                  type="date"
                  class="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">What type of event is it?</span>
                <select class="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0">
                  <option>Corporate event</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
              <label class="block">
                <span class="text-gray-700">Additional details</span>
                <textarea
                  class="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                  rows={3}
                ></textarea>
              </label>
              <div class="block">
                <div class="mt-2">
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        class="text-gray-700 bg-gray-200 border-transparent rounded focus:border-transparent focus:bg-gray-200 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                        checked
                      />
                      <span class="ml-2">Email me news and special offers</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
