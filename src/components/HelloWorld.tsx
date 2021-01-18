import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "HelloWorld",
    },
  },
  setup: (props) => {
    const count = ref(0);
    return () => (
      <div class="container py-8 prose">
        <h1>{props.msg}</h1>
        <p>
          Recommended setup:
          <a href="https://code.visualstudio.com/" target="_blank">
            VSCode
          </a>
          +
          <a
            href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
            target="_blank"
          >
            Vetur
          </a>
          +
          <a
            href="https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features-insiders"
            target="_blank"
          >
            Vue Language Features (Insiders)
          </a>
        </p>
        <p>
          Make sure to use workspace version of TypeScript to get improved
          support via
          <a
            href="https://github.com/znck/vue-developer-experience"
            target="_blank"
          >
            @vuedx
          </a>
          . Note @vuedx is still experimental and this setup is provided for
          early feedback.
        </p>
        <button
          class="p-2 border-2 border-gray-400 rounded-full cursor-pointer focus:outline-none focus:shadow-outline"
          onClick={() => count.value++}
        >
          count is: {count.value}
        </button>
        <p>
          Edit <code>components/HelloWorld.vue</code> to test hot module
          replacement.
        </p>
      </div>
    );
  },
});
