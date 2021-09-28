import { ApiFetcher, ApiFetcherOptions } from "./api";

export type MutationHookContext = {
  fetch: (input: any) => Promise<any>;
};

export type HookFetcherContext = {
  input?: any;
  fetch: ApiFetcher;
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

export type HookFetcherFn = (context: HookFetcherContext) => Promise<any>;

export type MutationHook = {
  fetcherOptions: ApiFetcherOptions;
  fetcher: HookFetcherFn;
  useHook(context: MutationHookContext): (input: any) => any;
};
