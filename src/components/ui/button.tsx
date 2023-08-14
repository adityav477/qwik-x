import { type QwikIntrinsicElements, component$, Slot } from "@builder.io/qwik";

type Props = QwikIntrinsicElements["button"] & {
  loading?: boolean;
  fullWidth?: boolean;
  colorScheme?:
    | "btn-neutral"
    | "btn-primary"
    | "btn-secondary"
    | "btn-error"
    | "btn-success"
    | "btn-info"
    | "btn-warning"
    | "btn-error";
};
export const Button = component$((props: Props) => {
  const { loading, fullWidth = false, colorScheme = "", ...rest } = props;
  return (
    <button
      disabled={loading}
      class={["btn", colorScheme, { "btn-block": fullWidth }]}
      {...rest}
    >
      {loading && <span class={`loading loading-spinner`}></span>}
      <Slot />
    </button>
  );
});