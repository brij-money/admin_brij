

// locals
import FetchFactory from '../factory';
import type { MerchantsResponse } from '~/type';

class MerchantModule extends FetchFactory<MerchantsResponse> {

  private OTP_RESOURCE = '/admin/merchants';
  
  /**
   * Return the data as array 
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */

  
  
  async getMerchant () {
    return await this.call(
      'POST',
      `${ this.OTP_RESOURCE }/`,
    )
  }
}

export default MerchantModule;