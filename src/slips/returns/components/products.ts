import m from 'mithril';
import { getSizeShortName } from 'src/slips/utils';
import { IParams } from '..';

export interface IProducts {
  data: {
    /**
     * The row headings
     */
    rows: Array<{

      /**
       * Row Title
       */
      title: Uppercase<string>;
      /**
       * Short description about the row
       */
      info: string;
      /**
       * CSS Grid class name
       */
      class: string
    }>,
    /**
     * List of return requests to be fulfilled
     */
    request: string[];
    /**
     * Product exchange titles
     */
    exchange: {
      /**
       * The size title for the exchange row
       */
      size: Uppercase<string>;
      /**
       * The color title for the exchange row
       */
      color: Uppercase<string>;
    }
  }
}

export function products ({ line_items, size_cols }: Partial<IParams>) {

  const {
    data: {
      rows,
      request,
      exchange
    }
  }: IProducts = {
    data: {
      rows: [
        {
          title: 'PRODUCT',
          info: 'The item you purchased',
          class: m.class('col-4')
        },

        {
          title: 'REQUEST',
          info: 'Refund or exchange purchase',
          class: m.class('col-3', 'pl-2')
        },
        {
          title: 'REASON',
          info: 'Return reason no.',
          class: m.class('col-2', 'pl-2')
        },
        {
          title: 'EXCHANGE',
          info: 'Exchange the item size/color',
          class: m.class('col', 'pl-2')
        }
      ],
      request: [
        'REFUND',
        'EXCHANGE'
      ],
      exchange: {
        size: 'SIZE:',
        color: 'COLOR:'
      }
    }
  };

  return [
    m.div(
      'row'
      , 'jc-between'
      , 'ai-center'
      , 'py-2'
      , 'g-0'
      , 'bd-bottom'
    )(
      rows.map(
        item => m('div', {
          className: item.class
        },
        [
          m.div('internal__item')(item.title),
          m.span('promo-disclaim')(item.info)
        ])
      )
    ),
    m.div(
      'row'
      , 'jc-between'
      , 'ai-center'
      , 'internal'
      , 'pb-1'
      , 'g-0'
    )(
      line_items.map(
        (item, idx) => m.div('col-12', 'mt-1')(
          {
            class: Object.is(line_items.length - 1, idx)
              ? ''
              : m.class('internal__seperator')
          },
          m.div(
            'row'
            , 'jc-between'
            , 'ai-center'
            , 'py-2'
          )(
            [
              /* PRODUCT ------------------------------------ */

              m.div('col-4')(
                m.div(
                  'row',
                  'jc-center',
                  'g-0'
                )(
                  m.div('col', 'internal__item', 'mr-auto')(item.product),
                  m.div('mr-auto', 'internal__item')(
                    { class: size_cols }
                    , getSizeShortName(item.size)
                  )
                )
              ),

              /* REQUEST ------------------------------------ */

              m.div('col-3')(
                m.div('row', 'gy-3')(
                  request.map(
                    item => [
                      m.div('col-2', 'pr-1')(m.span('checkbox')('')),
                      m.div('col-auto', 'pl-0', 'promo-sm')(item)
                    ]
                  )
                )
              ),

              /* REASON ------------------------------------- */

              m.div('col-2')(),

              /* EXCHANGE ----------------------------------- */

              m.div('col', 'pl-0')(
                m.div('row', 'g-0')(
                  [
                    m.div('col-4', 'promo-sm')(exchange.size),
                    m.div('col', 'promo-sm')(exchange.color)
                  ]
                )
              )
            ]
          )
        )
      )
    )
  ];

}
