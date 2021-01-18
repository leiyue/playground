import { ref, onMounted, watchEffect, Ref } from "vue";
import { createPopper, Options } from "@popperjs/core";
import type { StrictModifiers } from "@popperjs/core";

export const getElementFromRef = (elementRef: Ref): HTMLElement =>
  elementRef.value ? elementRef.value.el || elementRef.value : null;

export const usePopper = (options: Options): Ref<HTMLElement | null>[] => {
  const popper = ref<HTMLElement | null>(null);
  const reference = ref<HTMLElement | null>(null);

  onMounted(() => {
    watchEffect((onInvalidate) => {
      const referenceEl = getElementFromRef(reference);
      const popperEl = getElementFromRef(popper);

      if (
        !(referenceEl instanceof HTMLElement) ||
        !(popperEl instanceof HTMLElement)
      )
        return;

      const { destroy } = createPopper<StrictModifiers>(
        referenceEl,
        popperEl,
        options
      );

      onInvalidate(destroy);
    });
  });

  return [reference, popper];
};
