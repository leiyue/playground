import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";

export default defineComponent({
  setup() {
    return () => (
      <div class="flex flex-col h-screen overflow-hidden font-sans antialiased text-gray-900 bg-gray-700">
        <header class="relative z-10 flex items-center justify-between flex-shrink-0 px-4 py-4 bg-gray-700 border-b border-gray-200 sm:px-6 lg:px-8">
          <RouterLink class="text-2xl font-bold text-white no-underline hover:no-underline lg:text-4xl" to="/">
            {() => (
              <>
                <span class="inline fill-current iconify" data-icon="map:playground" data-inline="false"></span>
                <span class="ml-3">Playground</span>
              </>
            )}
          </RouterLink>
        </header>
        <main class="flex-1 overflow-auto bg-gray-50">
          <RouterView />
        </main>
      </div>
    );
  },
});
