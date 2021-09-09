import m from 'mithril';
import qrious from 'qrious';


const company = {
  name: 'BRIXTOL TEXTILES',
  warehouse: 'C/O Korallen AB',
  street_address: 'Ålandsgatan 10',
  city: 'Borås',
  zip: '504 41',
  country: 'Sweden'
};

const reasons = {
  fit: [
    ['01', 'Too Big'],
    ['02', 'Too Small'],
    ['03', 'Too Short'],
    ['04', 'Too Long']
  ],
  quality: [
    ['05', 'Damaged/Defective'],
    ['06', 'Not warm enough'],
    ['07', 'Too warm'],
    ['08', 'Uncomfortable'],
  ],
  service: [
    ['09','Arrived too late'],
    ['10', 'Wrong style arrived'],
    ['11', 'Wrong size arrived'],
    ['12', 'Wrong color arrived'],
    ['13', 'Ordered 2 sizes and kept 1']
  ],
  other: [
    ['14', 'Changed my mind'],
    ['15', 'Did not like style'],
    ['16', 'Did not like color'],
    ['17', 'Did not like fabric']
  ]
};

/*const dummy = {
  first_name: 'Johannes',
  last_name: 'Gullbring',
  street_address: 'Princengracht 135',
  city: 'Amsterdam',
  zip: '4004 AM',
  country: 'Netherlands',
  order_number: '4346'
};*/

export default {
  oninit() {
    this.params = window.location.href.split('?')[1];
    this.url = m.parseQueryString(this.params);
    this.products = this.url.products.split(',');
  },
  oncreate() {
    new qrious({
      element: document.getElementById('qr-code'),
      value: m.route.param('order_url'),
      mime: 'image/svg+xml',
      level: 'L',
      size: 90
    });
  },
  view() {
    return [
      m('.container', [
        m('.return', [
          m('.row.cutting', [
            m('.col-auto.pb-3.pr-5', [
              m('.sender__from.pb-3', 'SHIP TO:'),
              m('.recipient__to', [
                m('.b-block.pl-4.recipient__name', `${company.name}`),
                m('.d-block.pl-4.recipient__name', `${company.warehouse}`),
              ]),
              m('.recipient__address.pl-4.pt-2', [
                m('.d-block', `${company.street_address}`),
                m('.d-block', `${company.city}, ${company.zip}`),
                m('.d-block', `${company.country}`)
              ])
            ]),
            m('.col-auto.pl-5.pb-3.align-self-top.cutting-vertical', [
              m('.sender__from.pb-3', 'TYPE:'),
              m('.sender__address.pt-4', [
                m('.d-block.sender__return.text-center', 'RETURN PACKAGE')
              ])
            ]),
            m('.col-auto.align-self-center', [
              m('.d-block.pb-4', [
                m('svg.scissors-down', m('use[xlink:href="icons.svg#scissors-vertical"]'))
              ]),
              m('.d-block.pt-4', [
                m('svg.scissors-down', m('use[xlink:href="icons.svg#scissors-vertical"]'))
              ])
            ]),
            m('.col.align-self-center', [
              m('.row', [
                m('.col-12.text-center', [
                  m('.return__include-slip', 'Cut out the shipping label and tape the slip to your return package.')
                ])
              ]),
            ])
          ]),
          m('.row.justify-content-between.align-items-center.pb-4', [
            m('.col-auto', [
              m('svg.scissors', m('use[xlink:href="icons.svg#scissors"]'))
            ]),
            m('.col-auto', [
              m('svg.scissors', m('use[xlink:href="icons.svg#scissors"]'))
            ]),
            m('col-auto', [
              m('.text-center', 'Be	sure	to	include	this	slip	in	your	return	package.')
            ]),
            m('.col-auto', [
              m('svg.scissors', m('use[xlink:href="icons.svg#scissors"]'))
            ]),
            m('.col-auto', [
              m('svg.scissors', m('use[xlink:href="icons.svg#scissors"]'))
            ]),
          ]),
          m('.row.no-gutters.justify-content-between.align-items-center.pb-3.bd-bottom', [
            m('.col-auto.align-self-right.text-uppercase', [
              m('.sender__address', [
                m('.d-block.sender__name.pb-3', `${this.url.first_name} ${this.url.last_name}`),
                m('.d-block', `${this.url.street_address}`),
                m('.d-block', `${this.url.city}, ${this.url.zip}`),
                m('.d-block', `${this.url.country}`)
              ])
            ]),
            m('.col-auto', [
              m('.row.no-gutters.pb-3',[
                m('.col-auto.sender__from.pr-2', 'ORDER NO:'),
                m('.col-auto.sender__from', `#${this.url.order_number}`)
              ]),
            ]),
            m('.col-auto', [
              m('svg.recipient__logo', m('use[xlink:href="icons.svg#logo"]'))
            ])
          ]),
          m('.row.justify-items-between.align-items-center.no-gutters.py-3.bd-bottom', [
            m('.col-3', [
              m('.d-block.internal__item', 'PRODUCT')
            ]),
            m('.col-4', [
              m('.d-block.internal__item', 'REQUEST'),
            ]),
            m('.col', [
              m('.d-inline.internal__item', 'EXCHANGE INFORMATION')
            ]),
          ]),
          m('.row.no-gutters.justify-items-between.internal.pb-1.bd-bottom', [
            this.products.map((item, id) => [
              m('.col-12.mt-1', {
                class: this.products.length -1 !== id && 'internal__seperator'
              }, [
                m('.row.justify-items-between.align-items-center.no-gutters.py-2', [
                  m('.col-3', [
                    m('.d-block.internal__item', item)
                  ]),
                  m('.col-4', [
                    m('.row.py-1.no-gutters', [
                      m('.col-auto', [
                        m('.checkbox')
                      ]),
                      m('.col-auto.pl-2.pr-3', 'Refund'),
                      m('.col-auto', [
                        m('.checkbox')
                      ]),
                      m('.col-auto.pl-2.pr-3', 'Exchange'),
                      m('.col-auto', [
                        m('.checkbox')
                      ]),
                      m('.col-auto.pl-2.pr-3', 'Credit'),
                    ]),
                  ]),
                  m('.col', [
                    m('.row.no-gutters', [
                      m('.col', 'SIZE:'),
                      m('.col-4', 'COLOR:'),
                      m('.col', 'REASON NO:'),
                    ]),
                  ])
                ]),
              ])
            ])
          ]),
          m('.d-block.text-center.py-2.promo-disclaim', 'Credit requests will be issued using a discount code which will be sent to the email address used at checkout. Please include any free and/or promotional items you may have received with your purchase when requesting refunds and/or credit.'),
          m('.row', [
            m('.col-12.text-left', [
              m('h4.mb-0', 'REASON FOR RETURN'),
              m('p.pt-0', 'Please reference the return reason number above.')
            ])
          ]),
          m('.row.justify-items-center.internal.pb-3', [
            m('.col-3', [
              m('h4', 'Fit/Size'),
              reasons.fit.map(item => [
                m('.row.py-1', [
                  m('.col-auto', [
                    m('h3.m-0', item[0]),
                  ]),
                  m('.col-8.pl-0', item[1])
                ])
              ])
            ]),
            m('.col-3.pl-0', [
              m('h4', 'Quality'),
              reasons.quality.map(item => [
                m('.row.py-1', [
                  m('.col-auto', [
                    m('h3.m-0', item[0]),
                  ]),
                  m('.col-8.pl-0', item[1])
                ])
              ])
            ]),
            m('.col-3.pl-0', [
              m('h4', 'Service'),
              reasons.service.map(item => [
                m('.row.py-1', [
                  m('.col-auto', [
                    m('h3.m-0', item[0]),
                  ]),
                  m('.col-8.pl-0', item[1])
                ])
              ])
            ]),
            m('.col-3', [
              m('h4', 'Other'),
              reasons.other.map(item => [
                m('.row.py-1', [
                  m('.col-auto', [
                    m('h3.m-0', item[0]),
                  ]),
                  m('.col-8.pl-0', item[1])
                ])
              ])
            ])
          ])
        ]),
        m('.row.seperator.d-none', [
          m('.col-7.text-left', [
            m('h4.mb-0.py-0', 'IMPORTANT'),
            m('p.pt-0', 'Please review our Returns and Exchange conditions by visiting: brixtol.com/returns to ensure your return is applicable.')

          ]),
          m('.col-5', [
            m('h4.mb-0', 'Have any questions?'),
            m('p.pt-0', 'Contact our customer service by Email: help@brixtoltextiles.com')
          ])
        ]),
      ])
    ];
  }
};
