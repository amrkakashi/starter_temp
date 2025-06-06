import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { TranslationProvider } from "./translationContext.jsx";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, 
        staleTime: 1000 * 60 * 5, 
        cacheTime: 1000 * 60 * 10, 
        refetchOnWindowFocus: false, 
      },
    },
  });

const AppProvider = ({children})=>{

    return(
        <QueryClientProvider client={queryClient}>
        <TranslationProvider>
          <BrowserRouter>
            <HelmetProvider>
              {children}
            </HelmetProvider>
          </BrowserRouter>
        </TranslationProvider>
      </QueryClientProvider>
    )
}

export default AppProvider