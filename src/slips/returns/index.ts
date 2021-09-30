import { ICountries } from '@brixtol/country-names';
export { Returns } from './components/view';

export interface IParams {
  /**
   * Order Number, eg: #9999
   */
  order_number: string;
  /**
   * Order URL (points to shopify admin)
   */
  order_url: string;
  /**
   * Customer First Name
   */
  first_name: string;
   /**
   * Customer Last Name
   */
  last_name: string;
  /**
   * Shipping Street Address
   */
  street_address: string;
  /**
   * Shipping City
   */
  city: string;
  /**
   * Shipping zip code
   */
  zip: string;
  /**
   * Shipping Country Name
   */
  country: string;
  /**
   * Shipping Country ISO code
   */
  country_code: keyof ICountries;
  /**
   * Return Options
   */
  return_option: 'free' | 'paid' | 'prepaid' | 'unknown',
  /**
   * Size column alignment based on the product name length.
   * When the product name length exceeds 37 characters, the
   * size column will be switched to `col-2`.
   *
   * > _This is an internal reference and not provided via
   * the query parameters._
   */
  size_cols: 'col-2' | 'col-3';
  /**
   * Order Line Items
   */
  line_items: Array<{
    /**
     * Product Name and color variant
     */
    product: string;
    /**
     * Product Size
     */
    size: 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'OS';
    /**
     * Product Quantity
     */
    qty: number;
    /**
     * Product SKU identifier
     */
    sku: string;
  }>
}

export interface IReturns {
  heading: {
    reason_for_return: Uppercase<string>,
    return_slip: Uppercase<string>;
    order_no: Uppercase<string>;
    how_it_works: Uppercase<string>;
    return_address: Uppercase<string>;
  },
  information: {
    instructions: string[];
    costs: {
      free: {
        title: Uppercase<string>;
        info: string;
      },
      prepaid: {
        title: Uppercase<string>;
        info: string;
      },
      paid: {
        title: Uppercase<string>;
        info: string;
      }
    },
    address: {
      name: Uppercase<string>;
      warehouse: Uppercase<string>;
      street_address: string;
      city: string;
      zip: string;
      country: string;
    };
  }
  footer: {
    disclaimer: string;
  }
  products: {
    heading: Array<{
      title: Uppercase<string>;
      info: string;
      class: `.${string}`
    }>,
    request: string[];
    exchange: {
      size: Uppercase<string>;
      color: Uppercase<string>;
    }
  };
  reasons: {
    fit: {
      title: Uppercase<string>;
      options: Array<[ number: string, reason: string ]>;
    },
    quality: {
      title: Uppercase<string>;
      options: Array<[ number: string, reason: string ]>;
    },
    service: {
      title: Uppercase<string>;
      options: Array<[ number: string, reason: string ]>;
    },
    other: {
      title: Uppercase<string>;
      options: Array<[ number: string, reason: string ]>;
    }
  }
}
