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
  },
  oncreate() {
    new qrious({
      element: document.getElementById('qr-code'),
      value: m.route.param('order_url'),
      mime: 'image/svg+xml',
      level: 'L',
      size: 110
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
            m('.col-auto.align-self-center.text-uppercase', [
              m('.sender__address', [
                m('.d-block.sender__from', `ORDER NO: #${this.url.order_number}`),
                m('.d-block.sender__from.pt-2', 'RETURN PACKAGE')
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
          m('.row.justify-content-between.align-items-center.pb-5', [
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

              m('.return__include-slip', 'Be	sure	to	include	this	slip	in	your	return	package.'),

              m('.header__address.d-none', [
                m('.row.justify-content-start.py-5', [
                  m('.col-auto', [
                    m('.d-block.pb-3', `${this.url.first_name} ${this.url.last_name}`),
                    m('.d-block', `${this.url.street_address}`),
                    m('.d-block', `${this.url.city}, ${this.url.zip}`),
                    m('.d-block', `${this.url.country}`)
                  ])
                ]),
              ])
            ])
          ])
        ])
      ])
    ];
  }
};
