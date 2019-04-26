import m from 'mithril';
import qrious from 'qrious';

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
      size: 130
    });
  },
  view() {
    return [
      m('.container', [
        m('.rewaxing', [
          m('.row.justify-content-between.align-items-center', [
            m('.col-auto.align-self-right.text-uppercase', [
              m('.header__title', 'Garment Rewaxing'),
              m('.header__subtitle', 'Service By Brixtol Textiles')
            ]),
            m('.col-auto', [
              m('canvas#qr-code')
            ])
          ]),
          m('.row', [
            m('.col-12', [

              m('.header__address', [
                m('.row.justify-content-start.py-5', [
                  m('.col-auto', [
                    m('.d-block.pb-3', `${this.url.first_name} ${this.url.last_name}`),
                    m('.d-block', `${this.url.street_address}`),
                    m('.d-block', `${this.url.city}, ${this.url.zip}`),
                    m('.d-block', `${this.url.country}`)
                  ])
                ]),
              ]),

              m('.garment__head.text-uppercase', [
                m('.row.align-content-center.justify-content-center.py-2', [
                  m('.col-5.pl-5', 'Service:'),
                  m('.col-2', 'Price:'),
                  m('.col-2.text-center', 'Order:'),
                  m('.col-3.text-center', 'Status:')
                ])
              ]),

              m('.garment__items', [
                m('.row.align-content-center.justify-content-center.py-3', [
                  m('.col-5.pl-5.text-uppercase', `${this.url.garment}`),
                  m('.col-2', `${this.url.service_price}`),
                  m('.col-2.text-center', `#${this.url.order_number}`),
                  m('.col-3.text-center', [
                    m('span.garment__status', 'Order Paid')
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ];
  }
};
