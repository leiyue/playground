import { defineComponent, Transition } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

export default defineComponent({
  props: {
    layoutClass: { type: String, default: "flex justify-center w-screen h-full p-12 bg-gray-50" },
    containerClass: { type: String, default: "relative inline-block text-left" },
    buttonClass: {
      type: Object,
      default: () => ({
        container: "rounded-md shadow-sm",
        default:
          "inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-400 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800",
      }),
    },
    itemsClass: {
      type: String,
      default:
        "absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none",
    },
    transitionClass: {
      type: Object,
      default: () => ({
        enterActiveClass: "transition duration-100 ease-out",
        enterFromClass: "transform scale-95 opacity-0",
        enterToClass: "transform scale-100 opacity-100",
        leaveActiveClass: "transition duration-75 ease-out",
        leaveFromClass: "transform scale-100 opacity-100",
        leaveToClass: "transform scale-95 opacity-0",
      }),
    },
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
    buttonText: { type: String, default: "Options" },
  },
  setup(props, { slots }) {
    const menuItems = [
      { text: "Account settings", href: "#account-settings", disabled: false },
      { text: "Support", href: "#support", disabled: true },
      { text: "License", href: "#license", disabled: false },
    ];
    const signOutItem = {
      text: "Sign Out",
      href: "#sign-out",
      disabled: false,
    };
    const renderMenuItem = (item: typeof signOutItem) => (
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
    return () => (
      <div class={props.layoutClass}>
        <div class={props.containerClass}>
          <Menu>
            {() => (
              <>
                <span class={props.buttonClass.container}>
                  <MenuButton class={props.buttonClass.default}>
                    {() =>
                      slots.button ? (
                        slots.button()
                      ) : (
                        <>
                          <span>{props.buttonText}</span>
                          <svg class="w-5 h-5 ml-2 -mr-1" viewBox={["0", "0", "20", "20"].join()} fill="currentColor">
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </>
                      )
                    }
                  </MenuButton>
                </span>

                <Transition
                  enter-active-class={props.transitionClass.enterActiveClass}
                  enter-from-class={props.transitionClass.enterFromClass}
                  enter-to-class={props.transitionClass.enterToClass}
                  leave-active-class={props.transitionClass.leaveActiveClass}
                  leave-from-class={props.transitionClass.leaveFromClass}
                  leave-to-class={props.transitionClass.leaveToClass}
                >
                  {() => (
                    <MenuItems class={props.itemsClass}>
                      {() =>
                        slots.items ? (
                          slots.items()
                        ) : (
                          <>
                            <div class="px-4 py-3">
                              <p class="text-sm leading-5">Signed in as</p>
                              <p class="text-sm font-medium leading-5 text-gray-900 truncate">tom@example.com</p>
                            </div>

                            <div class="py-1">{menuItems.map((menuItems) => renderMenuItem(menuItems))}</div>
                            <div class="py-1">{renderMenuItem(signOutItem)}</div>
                          </>
                        )
                      }
                    </MenuItems>
                  )}
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    );
  },
});
