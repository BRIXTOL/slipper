import { Slips, OmitProps } from '@brixtol/types';
import m from 'mithril';

/**
 * Determines whether the order is using the legacy parameter
 * for slip generation. Legacy parameters apply to orders made
 * before October 1st 2021.
 *
 * Query Parameters passed in before October 1st 2021 would pass
 * a `products` property which contained a comma separated list
 * of line items, whereas the new version will pass an array list
 * of products using `line_items` field.
 *
 * > This will be deprecated in future version
 */
export function isLegacy (params: any) {

  return typeof (params?.products === 'string' || params?.garment === 'string');

}

/**
 * Normalizes order line_items. If a products quantity
 * is more than 1 the product row is repeated. This util
 * function also aligns size columns when the product name
 * exceeds a certain length.
 */
export function getLineItems<T extends Slips.IOrderQuery> (order: Partial<T>): T {

  const line_items: Slips.IOrderLineItems[] = [];
  const products = order.line_items;

  for (const item of products) {
    if (item.quantity > 1) while (item.quantity--) line_items.push(item);
    else line_items.push(item);
  }

  return <T>{ ...order, line_items };

}

export async function searchOrder (input: string) {

  const url = `https://api.brixtol.com/slips/return/${input}`;

  try {

    const data = await m.request<Slips.IOrderQuery & {
      message?: string,
      status?: string
    }>(url, {
      method: 'POST',
      responseType: 'json'
    });

    console.log(data);
    if (data.status === 'failed') return data;

    return {
      status: 'success',
      path: m.buildQueryString(<OmitProps<typeof data, 'message' | 'status'>>data)
    };

  } catch (e) {

    console.log(e);

    return {
      status: 'error',
      message: 'Request error'
    };

  }

}

/**
 * Parses Query Parameters from window location
 */
export async function getParams (vnode: m.Vnode<{}, {
  data: Slips.IParams
}>): Promise<void> {

  const { href } = window.location;
  const query = href.substring(href.indexOf('?'));
  const params = m.parseQueryString(query);

  vnode.state.data = await getOrder(params);

  return m.redraw();

}

export async function getOrder <
  T extends Partial<Slips.IOrderQuery>
> (params: T) {

  const url = `https://api.brixtol.com/slips/return/${params.id}`;

  try {

    const response = await m.request<Slips.IOrderQuery>(url, { method: 'POST' });

    return getLineItems(response);

  } catch (e) {

    console.error(e);

  }

};

/**
 * Loading Spinner
 *
 * Used when loading documents
 */
export function loader () {

  const loading: string = 'GENERATING DOCUMENT';

  return m('.row.jc-center.ai-center.vh-100', [
    m('.col-auto.text-center', [
      m('span.spinner'),
      m('.d-block.fs-xs.mt-3', loading)
    ])
  ]);

}

/**
 * Get Size Short Name
 *
 * Converts a size shortname to its long name equivelent.
 * For example, `X Small` to `XS`
 */
export function getSizeShortName (name: string) {

  switch (name) {
    case 'XX Small':
      return 'XXS';
    case 'X Small':
      return 'XS';
    case 'Small':
      return 'S';
    case 'Medium':
      return 'M';
    case 'Large':
      return 'L';
    case 'X Large':
      return 'XL';
    case 'XX Large':
      return 'XXL';
    case 'XXX Large':
      return 'XXXL';
    case 'Onesize':
      return 'OS';
    default:
      return 'N/A';
  }

};

export const EU = new Set([
  'AL',
  'AD',
  'AT',
  'AZ',
  'BY',
  'BE',
  'BA',
  'BG',
  'HR',
  'CY',
  'CZ',
  'DK',
  'EE',
  'FI',
  'FR',
  'GE',
  'DE',
  'GR',
  'HU',
  'IS',
  'IE',
  'IT',
  'KZ',
  'XK',
  'LV',
  'LI',
  'LT',
  'LU',
  'MK',
  'MT',
  'MD',
  'MC',
  'ME',
  'NL',
  'NO',
  'PL',
  'PT',
  'RO',
  'RU',
  'SM',
  'RS',
  'SK',
  'SI',
  'ES',
  'SE',
  'CH',
  'TR',
  'UA',
  'GB',
  'VA'
]);
