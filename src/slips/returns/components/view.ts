import m from 'mithril';
import { IParams } from '..';
import { print } from './print';
import { header } from './header';
import { information } from './information';
import { products } from './products';
import { reason } from './reasons';
import { footer } from './footer';
import { getLineItems } from 'src/slips/utils';

interface IState {
  state?: {
    params?: Partial<IParams>
  }
}

export const Returns = {
  oninit: ({ state }: IState) => {

    const { href } = window.location;
    const params = href.substring(href.indexOf('?'));
    const parsed = m.parseQueryString(params);
    const { line_items, size_cols } = getLineItems(parsed.line_items as string);

    state.params = { ...parsed, line_items, size_cols };

  },
  view: ({ state }: IState) => m.div(
    'container',
    'return'
  )(
    [
      print(),
      header(state.params),
      information(state.params),
      products(state.params),
      reason(),
      footer()
    ]
  )

};
