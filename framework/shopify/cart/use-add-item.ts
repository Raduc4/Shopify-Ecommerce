import { useAddItem } from "@common/cart/use-add-item";
import { MutationHook } from "@common/types/hooks";

export default useAddItem;

export const handler: MutationHook = {
  fetcher: (input: any) => {
    console.log("Fetching Data");
    alert(JSON.stringify(input) + "...Modified");
  },
  useHook: ({ fetch }) => {
    return (input: any) => {
      const response = fetch(input);
      return {
        output: response,
      };
    };
  },
};
