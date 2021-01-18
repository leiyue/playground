import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <div>
        <nav class="bg-gray-800">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <a href="/">
                    <img
                      class="w-8 h-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                  </a>
                </div>
                <div class="hidden md:block">
                  <div class="flex items-baseline ml-10 space-x-4">
                    <a href="#" class="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md">
                      Dashboard
                    </a>

                    <a
                      href="#"
                      class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                    >
                      Team
                    </a>

                    <a
                      href="#"
                      class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                    >
                      Projects
                    </a>

                    <a
                      href="#"
                      class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                    >
                      Calendar
                    </a>

                    <a
                      href="#"
                      class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                    >
                      Reports
                    </a>
                  </div>
                </div>
              </div>
              <div class="hidden md:block">
                <div class="flex items-center ml-4 md:ml-6">
                  <button class="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span class="sr-only">View notifications</span>
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                  <div class="relative ml-3">
                    <div>
                      <button
                        class="flex items-center max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        id="user-menu"
                        aria-haspopup="true"
                      >
                        <span class="sr-only">Open user menu</span>
                        <img
                          class="w-8 h-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </button>
                    </div>
                    <div
                      class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Your Profile
                      </a>

                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Settings
                      </a>

                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Sign out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex -mr-2 md:hidden">
                <button class="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span class="sr-only">Open main menu</span>

                  <svg
                    class="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <svg
                    class="hidden w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="hidden md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" class="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md">
                Dashboard
              </a>

              <a
                href="#"
                class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
              >
                Team
              </a>

              <a
                href="#"
                class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
              >
                Projects
              </a>

              <a
                href="#"
                class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
              >
                Calendar
              </a>

              <a
                href="#"
                class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
              >
                Reports
              </a>
            </div>
            <div class="pt-4 pb-3 border-t border-gray-700">
              <div class="flex items-center px-5">
                <div class="flex-shrink-0">
                  <img
                    class="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium leading-none text-white">Tom Cook</div>
                  <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                </div>
                <button class="flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span class="sr-only">View notifications</span>
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
              </div>
              <div class="px-2 mt-3 space-y-1">
                <a
                  href="#"
                  class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700"
                >
                  Your Profile
                </a>

                <a
                  href="#"
                  class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700"
                >
                  Settings
                </a>

                <a
                  href="#"
                  class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </nav>

        <header class="bg-white shadow">
          <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold leading-tight text-gray-900">Exam</h1>
          </div>
        </header>

        <main>
          <div class="py-6 mx-auto max-w-7xl h-95 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
              <div class="h-auto pt-16 pb-8 bg-gray-100 rounded-lg">
                <div class="mx-44">
                  <h1 class="w-full font-sans font-semibold leading-10 text-gray-400">Question 1</h1>
                  <h4 class="mt-5 mb-16 font-semibold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore corporis amet corrupti nostrum
                    delectus cum tempore, voluptatibus totam voluptates. Fugiat quisquam dolorum ad?
                  </h4>
                </div>
                <hr class="w-4/5 mx-auto border-t-4 border-gray-500 opacity-5" />
                <div class="mx-56 my-14">
                  <label class="text-gray-800">
                    <div class="flex items-center justify-between px-6 py-2 mb-4 bg-white border-l-4 border-purple-800">
                      Option A<input type="radio" name="answer" id="" />
                    </div>
                  </label>
                  <label class="text-gray-800">
                    <div class="flex items-center justify-between px-6 py-2 mb-4 bg-white border-l-4 border-purple-800">
                      Option B<input type="radio" name="answer" id="" />
                    </div>
                  </label>
                  <label class="text-gray-800">
                    <div class="flex items-center justify-between px-6 py-2 mb-4 bg-white border-l-4 border-purple-800">
                      Option C<input type="radio" name="answer" id="" />
                    </div>
                  </label>
                  <label class="text-gray-800">
                    <div class="flex items-center justify-between px-6 py-2 mb-4 bg-white border-l-4 border-purple-800">
                      Option D<input type="radio" name="answer" id="" />
                    </div>
                  </label>
                </div>
              </div>
              <div class="flex items-center justify-center py-10">
                <button class="flex items-center mr-6 font-semibold text-gray-500 bg-gray-100 rounded-full">
                  <div class="p-2 text-gray-400 bg-gray-200 rounded-full">
                    <svg class="w-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
                      />
                    </svg>
                  </div>
                  <span class="pl-2 pr-3">Previous</span>
                </button>
                <button class="flex items-center w-48 font-semibold text-gray-500 bg-gray-100 rounded-full">
                  <span class="pl-5 pr-3">Next</span>
                  <div class="p-2 text-gray-400 bg-gray-200 rounded-full">
                    <svg class="w-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                      />
                    </svg>
                  </div>
                </button>
                <button class="px-8 py-2 font-semibold text-white bg-purple-800 rounded-full">Finish</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  },
});
