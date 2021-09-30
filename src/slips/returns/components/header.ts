import m from 'mithril';
import { IParams } from '..';

export interface IHeader {
  heading: {
    title: Uppercase<string>;
    order_no: Uppercase<string>;
  }
}

export function header (
  {
    order_number,
    first_name,
    last_name,
    street_address,
    city,
    country,
    zip
  }: Partial<IParams>
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

  return [
    m.div(
      'row',
      'jc-between',
      'ai-center',
      'pb-3',
      'mb-3',
      'bd-bottom'
    )([
      m.div('col-auto')(
        m.svg('return-logo')(m('use[xlink:href="icons.svg#logo"]'))
      ),
      m.div(
        'col-auto',
        'text-right'
      )(
        m.h2(title)
      ),
      m.div('col-auto', 'text-right')(
        m.h6('pr-1')(m.span('pr-2')(order_no), `#${order_number}`),
        m.h6('pr-1')(`${first_name} ${last_name}`),
        m.span('d-block', 'how-it-works')(`${street_address}, ${city}`),
        m.span('d-block', 'how-it-works')(`${country}, ${zip}`)
      )
    ])
  ];

};
