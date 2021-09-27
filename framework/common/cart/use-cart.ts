import { useHook, useSWRHook } from "@common/utils/use-hooks";
import { ApiHooks } from "@common/types/hooks";
import Cookies from "js-cookie";
import { SHOPIFY_CHECKOUT_ID_COOKIE } from "@framework/const";
// import { useApiProvider } from "@common";
const useCart = () => {
  const hook = useHook((hooks: ApiHooks) => hooks.cart.useCart);
  // const data = useApiProvider();

  const fetcherWrapper: typeof hook.fetcher = (context) => {
    context.input.checkoutId = Cookies.get(SHOPIFY_CHECKOUT_ID_COOKIE);

    return hook.fetcher(context);
  };

  return useSWRHook({
    ...hook,
    fetcher: fetcherWrapper,
  });
};

export default useCart;
