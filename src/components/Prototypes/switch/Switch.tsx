import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    layoutClass: {
      type: String,
      default: "flex items-start justify-center w-screen h-full p-12 bg-gray-50",
    },
    containerClass: { type: String, default: "flex items-center space-x-4" },
    labelClass: { type: String, default: "w-6" },
    buttonClass: {
      type: Object,
      default: () => ({
        default:
          "relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline",
        active: "bg-indigo-600",
        inactive: "bg-gray-200",
      }),
    },
    switchClass: {
      type: Object,
      default: () => ({
        default: "inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full",
        active: "translate-x-5",
        inactive: "translate-x-0",
      }),
    },
    labelText: {
      type: Object,
      default: () => ({
        off: "Off",
        on: "On",
      }),
    },
  },
  setup(props) {
    const state = ref(false);
    return () => (
      <div class={props.layoutClass}>
        <div class={props.containerClass}>
          {props.labelText.off ? <span class={props.labelClass}>{props.labelText.off}</span> : null}
          <button
            class={[props.buttonClass.default, state.value ? props.buttonClass.active : props.buttonClass.inactive]}
            onClick={() => (state.value = !state.value)}
          >
            <span
              class={[props.switchClass.default, state.value ? props.switchClass.active : props.switchClass.inactive]}
            />
          </button>
          {props.labelText.on ? <span class={props.labelClass}>{props.labelText.on}</span> : null}
        </div>
      </div>
    );
  },
});
