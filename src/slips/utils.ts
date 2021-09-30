import { IParams } from './returns';
import m from 'mithril';
/**
 * EU Member country codes
 */
export const EU = new Set(
  [
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
  ]
);

/**
 * Normalizes order line_items. If a products quantity
 * is more than 1 the product row is repeated. This util
 * function also aligns size columns when the product name
 * exceeds a certain length.
 */
export function getLineItems<T extends {
  size_cols: IParams['size_cols']
  line_items: IParams['line_items']
}> (items: string): T {

  let size_cols = m.class('col-3');

  const line_items: IParams['line_items'] = [];
  const products = JSON.parse(items) as IParams['line_items'];

  for (const item of products) {
    if (size_cols !== 'col-2' && item.product.length > 37) size_cols = m.class('col-2');
    if (item.qty > 1) while (item.qty--) line_items.push(item);
    else line_items.push(item);
  }

  return <T>{
    size_cols,
    line_items
  };
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
