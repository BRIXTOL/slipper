import m from 'mithril';
import { Slips } from '@brixtol/types';
import { print } from '../utils/print';
import { header } from './components/header';
import { information } from './components/information';
import { products } from './components/products';
import { reason } from './components/reasons';
import { footer } from './components/footer';
import { loader, getParams } from '../utils/utils';

export const Returns: m.Component<{}, { data: Slips.IOrderQuery }> = {
  oninit: getParams,
  view: ({ state }) => state.data ? m('.container', [
    print(),
    header(state.data),
    information(state.data),
    products(state.data),
    reason(),
    footer(state.data)
  ]) : loader()

};
