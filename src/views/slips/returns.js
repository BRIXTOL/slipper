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
    'Too Big',
    'Too Small',
    'Too Short',
    'Too Long'
  ],
  quality: [
    'Damaged/Defective',
    'Not warm enough',
    'Too warm',
    'Uncomfortable',
  ],
  service: [
    'Arrived too late',
    'Wrong style arrived',
    'Wrong size arrived',
    'Ordered 2 sizes and kept 1'
  ],
  other: [
    'Changed my mind',
    'Did not like style',
    'Did not like color',
    'Did not like fabric'
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
          m('.row.justify-content-between.align-items-center.seperator', [
            m('.col-auto.align-self-right.text-uppercase', [
              m('.sender__from.pb-3', 'FROM:'),
              m('.sender__address', [
                m('.d-block.sender__name.pl-4.pb-2', `${this.url.first_name} ${this.url.last_name}`),
                m('.d-block.pl-4', `${this.url.street_address}`),
                m('.d-block.pl-4', `${this.url.city}, ${this.url.zip}`),
                m('.d-block.pl-4', `${this.url.country}`)
              ])
            ]),
            m('.col-auto.align-self-start.text-uppercase', [
              m('.sender__from.pb-3', 'ORDER NO:'),
              m('.sender__address', [
                m('.d-block.pl-4.sender__from', `#${this.url.order_number}`),
              ])
            ]),
            m('.col-auto.align-self-start.text-uppercase', [
              m('.sender__from.pb-3', 'TYPE:'),
              m('.sender__address', [
                m('.d-block.sender__return.text-center', 'RETURN PACKAGE')
              ])
            ]),
            m('.col-auto', [
              m('canvas#qr-code')
            ])
          ]),
          m('.row.justify-content-between.align-items-center.cutting', [
            m('.col-auto', [
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
            m('.col-auto', [
              m('svg.recipient__logo', m('use[xlink:href="icons.svg#logo"]'))
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
              m('.text-center', 'Cut here and tape the slip above to your return package.')
            ]),
            m('.col-auto', [
              m('svg.scissors', m('use[xlink:href="icons.svg#scissors"]'))
            ]),
            m('.col-auto', [
              m('svg.scissors', m('use[xlink:href="icons.svg#scissors"]'))
            ]),
          ]),
          m('.row', [
            m('.col-12.text-center', [
              m('.return__include-slip', 'Be	sure	to	include	this	slip	in	your	return	package.')
            ])
          ]),
          m('.row.pt-2', [
            m('.col-12.text-left', [
              m('h4', 'GARMENT/S TO BE RETURNED')
            ])
          ]),
          m('.row.justify-items-center.internal.pb-3', [
            this.products.map(item => [
              m('.col-3.mt-3', [
                m('.row.py-1', [
                  m('.col-auto', [
                    m('.checkbox'),
                  ]),
                  m('.col-8.pl-0', item)
                ])
              ])
            ])
          ]),
          m('.row', [
            m('.col-12.text-left', [
              m('h4.mb-0', 'REASON FOR RETURN'),
              m('p', 'Please mark the reason/s for returning your garment.')
            ])
          ]),
          m('.row.justify-items-center.internal.pb-3', [
            m('.col-3', [
              m('h4', 'Fit/Size'),
              reasons.fit.map(item => [
                m('.row.py-1', [
                  m('.col-auto', [
                    m('.checkbox'),
                  ]),
                  m('.col-8.pl-0', item)
                ])
              ])
            ]),
            m('.col-3.pl-0', [
              m('h4', 'Quality'),
              reasons.quality.map(item => [
                m('.row.py-1', [
                  m('.col-auto', [
                    m('.checkbox'),
                  ]),
                  m('.col-8.pl-0', item)
                ])
              ])
            ]),
            m('.col-3.pl-0', [
              m('h4', 'Service'),
              reasons.service.map(item => [
                m('.row.py-1', [
                  m('.col-auto', [
                    m('.checkbox'),
                  ]),
                  m('.col-8.pl-0', item)
                ])
              ])
            ]),
            m('.col-3', [
              m('h4', 'Other'),
              reasons.other.map(item => [
                m('.row.py-1', [
                  m('.col-auto', [
                    m('.checkbox'),
                  ]),
                  m('.col-8.pl-0', item)
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
