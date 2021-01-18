import { defineComponent, ref } from "vue";
import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/vue";

export default defineComponent({
  props: {
    layoutClass: { type: String, default: "flex justify-center w-screen h-full p-12 bg-gray-50" },
    containerClass: { type: String, default: "w-full max-w-xs mx-auto space-y-1" },
    labelClass: { type: String, default: "block text-sm font-semibold leading-5 text-gray-700" },
    buttonClass: {
      type: Object,
      default: () => ({
        container: "inline-block w-full rounded-md shadow-sm",
        default:
          "relative w-full py-2 pl-3 pr-10 text-left transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md cursor-default focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5",
      }),
    },
    optionsClass: {
      type: Object,
      default: () => ({
        container: "absolute w-full mt-1 bg-white rounded-md shadow-lg",
        default:
          "py-1 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5",
      }),
    },
    optionClass: {
      type: Object,
      default: () => ({
        default: "relative py-2 pl-3 cursor-default select-none pr-9 focus:outline-none",
        active: "text-white bg-indigo-600",
        inactive: "text-gray-900",
      }),
    },
    optionTextClass: {
      type: Object,
      default: () => ({
        default: "block truncate",
        active: "font-semibold",
        inactive: "font-normal",
        disabled: "cursor-not-allowed opacity-50",
        enabled: "",
      }),
    },
    checkClass: {
      type: Object,
      default: () => ({
        default: "absolute inset-y-0 right-0 flex items-center pr-4",
        active: "text-white",
        inactive: "text-blue-600",
      }),
    },
    labelText: { type: String, default: "分配给" },
  },
  setup(props, { slots }) {
    const people = [
      { id: 1, name: "黄萍", disabled: false },
      { id: 2, name: "马志强", disabled: false },
      { id: 3, name: "龙红霞", disabled: false },
      { id: 4, name: "康淑英", disabled: true },
      { id: 5, name: "黄娜", disabled: false },
      { id: 6, name: "王娟", disabled: false },
      { id: 7, name: "蒋强", disabled: false },
      { id: 8, name: "王秀荣", disabled: false },
      { id: 9, name: "岳瑜", disabled: false },
      { id: 10, name: "翁华", disabled: false },
    ];

    const active = ref(people[Math.floor(Math.random() * people.length)]);

    const renderButton = () => (
      <>
        <span class="block truncate">{active.value.name}</span>
        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg class="w-5 h-5 text-gray-400" viewBox={["0", "0", "20", "20"].join()} fill="none" stroke="currentColor">
            <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" strokeW-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </>
    );

    const renderOption = (option: typeof people[0]) => (
      <ListboxOption
        class={[
          props.optionClass.default,
          active.value.id === option.id ? props.optionClass.active : props.optionClass.inactive,
        ].join(" ")}
        disabled={option.disabled}
      >
        {({ disabled }: { disabled: boolean }) => (
          <>
            <span
              class={[
                props.optionTextClass.default,
                active.value.id === option.id ? props.optionTextClass.active : props.optionTextClass.inactive,
                disabled ? props.optionTextClass.disabled : props.optionTextClass.enabled,
              ]}
              onClick={() => (active.value = option)}
            >
              {option.name}
            </span>
            {active.value.id === option.id ? (
              <span
                class={[
                  props.checkClass.default,
                  active.value.id === option.id ? props.checkClass.active : props.checkClass.inactive,
                ]}
              >
                <svg class="w-5 h-5" viewBox={["0", "0", "20", "20"].join()} fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            ) : null}
          </>
        )}
      </ListboxOption>
    );

    return () => (
      <div class={props.layoutClass}>
        <div class={props.containerClass}>
          <Listbox>
            {() => (
              <>
                <ListboxLabel class={props.labelClass}>{() => props.labelText}</ListboxLabel>
                <div class="relative">
                  <span class={props.buttonClass.container}>
                    <ListboxButton class={props.buttonClass.default}>
                      {() => (slots.button ? slots.button() : renderButton())}
                    </ListboxButton>
                  </span>

                  <div class={props.optionsClass.container}>
                    <ListboxOptions class={props.optionsClass.default}>
                      {() => (slots.items ? slots.items() : people.map((person) => renderOption(person)))}
                    </ListboxOptions>
                  </div>
                </div>
              </>
            )}
          </Listbox>
        </div>
      </div>
    );
  },
});
