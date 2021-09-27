import { createContext, FC, ReactNode, useContext, useMemo } from "react";
import { ApiConfig, ApiProviderContext } from "./types/api";
import { ApiHooks } from "./types/hooks";

interface ApiProviderProps {
  children: ReactNode | ReactNode[];
  config: ApiConfig;
  hooks: ApiHooks;
}

export const ApiContext = createContext<Partial<ApiProviderContext>>({});
export const ApiProvider: FC<ApiProviderProps> = ({
  children,
  config,
  hooks,
}) => {
  const coreConfig = useMemo(() => {
    return {
      fetcher: config.fetch,
      hooks,
      checkoutId: config.checkoutCookie,
    };
  }, [config.fetch, hooks, config.checkoutCookie]);

  return (
    <ApiContext.Provider value={coreConfig}>{children}</ApiContext.Provider>
  );
};

export const useApiProvider = () => {
  return useContext(ApiContext) as ApiProviderContext;
};
