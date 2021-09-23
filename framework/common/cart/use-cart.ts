import { useHook } from "@common/utils/use-hooks";
import { ApiHooks } from "@common/types/hooks";
const useCart = () => {
  const hook = useHook((hooks: ApiHooks) => {
    return hooks.cart.useCart;
  });
  return hook.useHook({
    fetch: hook.fetcher,
  });
};

export default useCart;
