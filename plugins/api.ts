// 3rd's
import { $fetch, type FetchOptions } from 'ofetch';
import MerchantModule from '~/repository/module/merchant';


export default defineNuxtPlugin( ( nuxtApp ) => {
  const config = useRuntimeConfig();

  const fetchOptions: FetchOptions = {
    baseURL: config.public.apiBaseUrl,

  };

  // Create a new instance of $fecther with custom option
  const apiFecther = $fetch.create( fetchOptions );

  // An object containing all repositories we need to expose
  const modules: any = {
    merchant: new MerchantModule( apiFecther ),
  };

  return {
    provide: {
      api: modules
    }
  };
} );