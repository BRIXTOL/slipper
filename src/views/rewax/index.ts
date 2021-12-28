import m from 'mithril';
import { Slips } from '@brixtol/types';
import { header } from './components/header';
import { customer } from './components/customer';
import { getParams, loader } from '../utils/utils';

export const Rewax: m.Component<{}, { data: Slips.IOrderQuery }> = {
  oninit: getParams,
  view: ({ state }) => state.data ? m('.container', [
    header(state.data),
    customer(state.data)
  ]) : loader()

};
