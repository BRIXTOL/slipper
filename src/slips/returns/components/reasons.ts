import m from 'mithril';

interface Reasons {
  title: Uppercase<string>;
  options: Array<[ number: string, reason: string ]>;
}

export interface IReason {
  heading: {
    title: Uppercase<string>;
  };
  data: {
    fit: Reasons;
    quality: Reasons;
    service: Reasons;
    other: Reasons;
  };
}

export function reason () {

  const {
    heading,
    data: {
      fit,
      quality,
      service,
      other
    }
  }: IReason = {
    heading: {
      title: 'REASON FOR RETURN'
    },
    data: {
      fit: {
        title: 'FIT/SIZE',
        options: [
          [ '01', 'Too Big' ],
          [ '02', 'Too Small' ],
          [ '03', 'Too Short' ],
          [ '04', 'Too Long' ]
        ]
      },
      quality: {
        title: 'QUALITY',
        options: [
          [ '05', 'Damaged/Defective' ],
          [ '06', 'Not warm enough' ],
          [ '07', 'Too warm' ],
          [ '08', 'Uncomfortable' ]
        ]
      },
      service: {
        title: 'SERVICE',
        options: [
          [ '09', 'Arrived too late' ],
          [ '10', 'Wrong style arrived' ],
          [ '11', 'Wrong size arrived' ],
          [ '12', 'Wrong color arrived' ],
          [ '13', 'Ordered 2 sizes, kept 1' ]
        ]
      },
      other: {
        title: 'OTHER',
        options: [
          [ '14', 'Changed my mind' ],
          [ '15', 'Did not like style' ],
          [ '16', 'Did not like color' ],
          [ '17', 'Did not like fabric' ]
        ]
      }
    }
  };

  return [
    m.div(
      'row',
      'mt-3',
      'g-0',
      'bd-bottom',
      'mb-3'
    )(
      m.div('col-auto')(m.h6(heading.title))
    ),
    m.div(
      'row',
      'jc-center',
      'internal',
      'g-0',
      'pb-3',
      'bd-bottom'
    )(
      [
        m.div('col-3')(
          [

            /* FIT/SIZE ----------------------------------- */

            m.strong('d-block', 'mb-3')(fit.title),
            fit.options.map(
              ([ number, name ]) => m.div(
                'row',
                'pb-1'
              )(
                [
                  m.div('col-auto')(m.strong(number)),
                  m.div('col-8', 'pl-0')(name)
                ]
              )
            )
          ]
        ),

        /* QUALITY ------------------------------------ */

        m.div('col', 'pl-0')([
          m.strong('d-block', 'mb-3')(quality.title),
          quality.options.map(
            ([ number, name ]) => m.div(
              'row',
              'pb-1'
            )(
              [
                m.div('col-auto')(m.strong(number)),
                m.div('col-8', 'pl-0')(name)
              ]
            )
          )
        ]),

        /* SERVICE ------------------------------------ */

        m.div('col', 'pl-0')([
          m.strong('d-block', 'mb-3')(service.title),
          service.options.map(
            ([ number, name ]) => m.div(
              'row',
              'pb-1'
            )(
              [
                m.div('col-auto')(m.strong(number)),
                m.div('col-8', 'pl-0')(name)
              ]
            )
          )
        ]),

        /* OTHER -------------------------------------- */

        m.div('col')([
          m.strong('d-block', 'mb-3')(other.title),
          other.options.map(
            ([ number, name ]) => m.div(
              'row',
              'pb-1'
            )(
              [
                m.div('col-auto')(m.strong(number)),
                m.div('col-8', 'pl-0')(name)
              ]
            )
          )
        ])
      ]
    )
  ];
}
