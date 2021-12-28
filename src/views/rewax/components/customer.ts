import m from 'mithril';
import { Slips } from '@brixtol/types';

export interface IHeader {
  heading: {
    title: Uppercase<string>;
    order_no: Uppercase<string>;
  }
}

export function customer (
  {
    number,
    first_name,
    last_name,
    street_address,
    city,
    country,
    zip,
    date
  }: Partial<Slips.IOrderQuery>
) {

  const {
    heading: {
      order_no
    }
  }: IHeader = {
    heading: {
      title: 'RETURN SLIP',
      order_no: 'ORDER NO:'
    }
  };

  return [
    m('.row.jc-between.ai-center.pb-3.mb-3', [
      m('.col-auto.text-right', [
        m('h4.pr-1', date),
        m('h4.pr-1', [ m('span.pr-2', order_no) ], `#${number}`),
        m('h4.pr-1', `${first_name} ${last_name}`),
        m('span.d-block.how-it-works', `${street_address}, ${city}`),
        m('span.d-block.how-it-works', `${country}, ${zip}`)
      ])
    ])
  ];

};
