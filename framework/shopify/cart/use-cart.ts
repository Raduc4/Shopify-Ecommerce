import useCart from "@common/cart/use-cart";
import { checkoutToCart, createCheckout } from "@framework/utils/";

export default useCart;
export const handler = {
  fetchOptions: {
    query: "query {hello}",
  },
  async fetcher({ fetch, options, input: { checkoutId } }: any) {
    let checkout;
    if (checkoutId) {
      const { data } = await fetch({ ...options });
      checkout = data;
    } else {
      checkout = await createCheckout(fetch);
    }

    const cart = checkoutToCart(checkout);
    return checkout;
  },
  useHook: ({ useData }: any) => {
    const data = useData();
    return {
      data,
    };
  },
};
