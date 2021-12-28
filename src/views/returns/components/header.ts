import m from 'mithril';
import { Slips } from '@brixtol/types';

export interface IHeader {
  heading: {
    title: Uppercase<string>;
    order_no: Uppercase<string>;
  }
}

export function header (
  {
    number,
    first_name,
    last_name,
    street_address,
    city,
    country,
    zip
  }: Partial<Slips.IOrderQuery>
) {

  const {
    heading: {
      title,
      order_no
    }
  }: IHeader = {
    heading: {
      title: 'RETURN SLIP',
      order_no: 'ORDER NO:'
    }
  };

  return m('.row.jc-between.ai-center.pb-3.mb-3.bd-bottom', [
    m('.col-auto', m('svg.logo', m('use[xlink:href="icons.svg#logo"]'))),
    m('.col-auto.text-right', m('h3', title)),
    m('.col-auto.text-right', [
      m('h6.pr-1.fw-bold', [ m('span.pr-2', order_no) ], `#${number}`),
      m('h6.pr-1', `${first_name} ${last_name}`),
      m('span.d-block.fs-sm', `${street_address}, ${city}`),
      m('span.d-block.fs-sm', `${country}, ${zip}`)
    ])
  ]);

};
