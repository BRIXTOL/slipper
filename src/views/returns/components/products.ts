import m from 'mithril';
import { Slips } from '@brixtol/types';

export interface IProducts {
  /**
   * Column specific styles to be applied,
   * they are applied to the mithril `style`
   * attribute and reference by map index
   */
  style: Array<object>
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
    className: string
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

export function products ({ line_items }: Partial<Slips.IOrderQuery>) {

  const length = line_items.length - 1;
  const isLast = (i: number) => length === i ? '' : 'bd-bottom bd-gray';
  const { rows, request, exchange, style }: IProducts = {
    style: [
      {
        width: '290px' // PRODUCT
      },
      {
        width: '225px' // REQUEST
      },
      {
        width: '145px' // REASON
      },
      {
        width: '250px' // EXCHANGE
      }
    ],
    rows: [
      {
        title: 'PRODUCT',
        info: 'The item and size you purchased',
        className: 'col-auto'
      },

      {
        title: 'REQUEST',
        info: 'Refund or exchange purchase',
        className: 'col-auto'
      },
      {
        title: 'REASON',
        info: 'Return reason no.',
        className: 'col-auto'
      },
      {
        title: 'EXCHANGE',
        info: 'Exchange the item size/color',
        className: 'col-auto'
      },
      {
        title: 'RETURN FEE',
        info: 'Deducted on refund',
        className: 'col'
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
  };

  return [

    /* ROWS --------------------------------------- */

    m(
      '.row.jc-between.ai-center.py-2.g-0.bd-bottom',
      rows.map(
        (
          {
            className,
            title,
            info
          }
          , index
        ) => m(
          'div',
          {
            className,
            style: style[index]
          }
          , m(
            '.d-block.fs-sm.fw-bold.mb-1'
            , title
          )
          , m(
            '.d-block.fs-xs.text-italic'
            , info
          )
        )
      )
    ),

    /* PRODUCTS ----------------------------------- */

    line_items.map(
      (
        {
          properties = [ { name: 'returnPrice', value: 'FREE' } ],
          title,
          size
        }
        , index
      ) => m(
        '.row.jc-between.ai-center.py-3.g-0'
        , { class: isLast(index) }
        , [

          /* PRODUCT ------------------------------------ */

          m(
            '.col-auto'
            , { style: style[0] }
            , m(
              '.d-block.fs-sm.fw-bold.text-uppercase'
              , title
            )
            , m(
              '.d-block.fs-xs.text-uppercase.fc-darken'
              , size
            )
          )

          /* REQUEST ------------------------------------ */

          , m(
            '.col-auto'
            , { style: style[1] }
            , m(
              '.row.ac-center'
              , request.map(
                item => [
                  m(
                    '.col-2.pr-1'
                    , m('.checkbox')
                  )
                  , m(
                    '.col-auto.pl-0.fs-xs'
                    , item
                  )
                ]
              )
            )
          )

          /* REASON ------------------------------------- */

          , m(
            '.col-auto'
            , { style: style[2] }
          )

          /* EXCHANGE ----------------------------------- */

          , m(
            '.col-auto'
            , { style: style[3] }
            , m(
              '.row.g-0'
              , [
                m(
                  '.col-3.pr-3.fs-xs'
                  , exchange.size
                )
                , m(
                  '.col.fs-xs'
                  , exchange.color
                )
              ]
            )
          ),

          /* REASON ------------------------------------- */

          m(
            '.col.text-center'
            , m(
              '.d-block.fs-sm.fw-bold.text-uppercase'
              , properties.find(({ name }) => name === 'returnPrice').value
            )
          )
        ]
      )
    )

  ];

}
