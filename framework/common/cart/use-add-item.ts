import { useHook } from "@common/utils/use-hooks";
export const useAddItem = () => {
  const hook = useHook((hooks) => {
    debugger;
    return hooks.cart.useAddItem;
  });
  return hook.useHook({
    fetch: hook.fetcher,
  });
};

export default useAddItem;
