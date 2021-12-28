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
          [ '06', 'Damaged/Defective' ],
          [ '07', 'Not warm enough' ],
          [ '08', 'Too warm' ],
          [ '09', 'Uncomfortable' ]
        ]
      },
      service: {
        title: 'SERVICE',
        options: [
          [ '10', 'Wrong style arrived' ],
          [ '11', 'Wrong size arrived' ],
          [ '12', 'Wrong color arrived' ],
          [ '13', 'Arrived too late' ]
        ]
      },
      other: {
        title: 'OTHER',
        options: [
          [ '14', 'Ordered 2 sizes and kept 1' ],
          [ '15', 'Changed my mind' ],
          [ '16', 'Did not like style' ]
        ]
      }
    }
  };

  return [
    m('.row.g-0.mt-4.pb-2.bd-bottom', m('.col.fw-bold', heading.title)),
    m('.row.jc-between.g-3.my-3.pb-4.bd-bottom.fs-sm', [
      m('.col-auto', [

        /* FIT/SIZE ----------------------------------- */

        m('strong.d-block.mb-3', fit.title),
        fit.options.map(
          ([ number, name ]) => m('.d-block.pb-1', [
            m('.d-inline.fw-bold.pr-3', number),
            m('.d-inline', name)
          ])
        )
      ]),

      /* QUALITY ------------------------------------ */

      m('.col-auto.pl-0', [
        m('strong.d-block.mb-3', quality.title),
        quality.options.map(
          ([ number, name ]) => m('.d-block.pb-1', [
            m('.d-inline.fw-bold.pr-3', number),
            m('.d-inline', name)
          ])
        )
      ]),

      /* SERVICE ------------------------------------ */

      m('.col-auto', [
        m('strong.d-block.mb-3', service.title),
        service.options.map(
          ([ number, name ]) => m('.d-block.pb-1', [
            m('.d-inline.fw-bold.pr-3', number),
            m('.d-inline', name)
          ])
        )
      ]),

      /* OTHER -------------------------------------- */

      m('.col-auto', [
        m('strong.d-block.mb-3', other.title),
        other.options.map(
          ([ number, name ]) => m('.d-block.pb-1', [
            m('.d-inline.fw-bold.pr-3', number),
            m('.d-inline', name)
          ])
        )
      ])
    ])
  ];
}
