import { defineComponent } from "vue";
import Menu from "./Menu";
import PopperMenu from "./MenuWithPopper";
import TransitionMenu from "./MenuWithTransition";
import TransitionPopperMenu from "./MenuWithTransitionAndPopper";
import { MenuItem } from "@headlessui/vue";

export default defineComponent({
  props: {
    itemClass: {
      type: Object,
      default: () => ({
        default: "flex justify-between w-full text-left px-4 py-2 text-sm leading-5",
        active: "bg-indigo-600 text-white",
        inactive: "text-gray-700",
        disabled: "cursor-not-allowed opacity-50",
        enabled: "",
      }),
    },
  },

  setup(props) {
    const menuItems = [
      { text: "Account settings", href: "#account-settings", disabled: false },
      { text: "Support", href: "#support", disabled: true },
      { text: "License", href: "#license", disabled: false },
    ];
    const renderMenuItem = (item: typeof menuItems[0]) => (
      <MenuItem disabled={item.disabled}>
        {({ active, disabled }: { active: boolean; disabled: boolean }) => (
          <a
            href={item.href}
            class={[
              props.itemClass.default,
              active ? props.itemClass.active : props.itemClass.inactive,
              disabled ? props.itemClass.disabled : props.itemClass.enabled,
            ]}
          >
            {item.text}
          </a>
        )}
      </MenuItem>
    );
    const separator = () => (
      <div>
        <div class="relative rounded-md shadow-sm">
          <input class="block w-full px-4 py-2 form-input sm:text-sm sm:leading-5" placeholder="you@example.com" />
        </div>
      </div>
    );
    return () => (
      <div class="flex justify-center w-screen h-full p-12 space-x-4 bg-gray-50">
        <Menu layoutClass="">
          {{
            button: () => (
              <>
                <span>Menu</span>
                <svg class="w-5 h-5 ml-2 -mr-1" viewBox={["0", "0", "20", "20"].join()} fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </>
            ),
          }}
        </Menu>
        {separator()}
        <PopperMenu layoutClass="" buttonText="PopperMenu">
          {{
            items: () => <div class="py-1">{menuItems.map((item) => renderMenuItem(item))}</div>,
          }}
        </PopperMenu>
        {separator()}
        <TransitionMenu layoutClass="" buttonText="TransitionMenu" />
        {separator()}
        <TransitionPopperMenu layoutClass="" buttonText="TransitionPopperMenu" />
      </div>
    );
  },
});
