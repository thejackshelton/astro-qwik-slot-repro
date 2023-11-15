import { Slot, component$ } from "@builder.io/qwik";

export const MyQwikComponent = component$(() => {
  return (
    <div>
      test
      <Slot />
    </div>
  );
});
