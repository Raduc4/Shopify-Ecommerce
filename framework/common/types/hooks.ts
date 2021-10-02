import { ApiFetcher, ApiFetcherOptions } from "./api";
import { SWRResponse } from "swr";
export type MutationHookContext<Input, Output> = {
  fetch: (input: any) => Promise<any>;
};
export type SWRHookContext<Input, Output> = {
  fetch: (input: any) => Promise<any>;
};

export type HookFetcherContext<Input, Output> = {
  input: Input;
  fetch: ApiFetcher<Output>;
  options: ApiFetcherOptions;
};

export interface ApiHooks {
  cart: {
    useAddItem: MutationHook;
    useCart: any;
  };
}

export type HookFetcherOptions = {
  query: string;
};

export type HookFetcherFn<Input, Output, Data> = (
  context: HookFetcherContext<Input, Output>
) => Promise<Data>;

export type HookDescriptor = {
  fetcherInput: any;
  fetcherOutput: any;
  data: any;
};

export type MutationHook<H extends HookDescriptor = any> = {
  fetcherOptions: ApiFetcherOptions;
  fetcher: HookFetcherFn<H["fetcherInput"], H["fetcherOutput"], H["data"]>;
  useHook(
    context: MutationHookContext<H["fetcherInput"], H["data"]>
  ): () => (input: H["fetcherInput"]) => Promise<H["data"]>;
};
export type UseDataContext = {
  swrOptions: any;
};

export type UseData<Data> = (context: UseDataContext) => Data;

export type SWRHookResponse<Data> = SWRResponse<Data, any> & {
  isEmpty: boolean;
};

export type SWRHook<H extends HookDescriptor = any> = {
  fetcherOptions: ApiFetcherOptions;
  fetcher: HookFetcherFn<H["fetcherInput"], H["fetcherOutput"], H["data"]>;
  useHook(context: {
    useData: UseData<SWRHookResponse<H["data"]>>;
  }): () => SWRHookResponse<H["data"]>;
};

export type Hook = MutationHook | SWRHook;
