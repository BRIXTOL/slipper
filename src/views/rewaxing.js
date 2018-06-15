import m from 'mithril';


export default {
  oninit() {
    this.order_number = m.route.param('order_number');
    this.garment = m.route.param('garment');
    this.garment_image = m.route.param('garment_image');
    this.first_name = m.route.param('first_name');
    this.last_name = m.route.param('last_name');
    this.street_address = m.route.param('street_address');
    this.city = m.route.param('city');
    this.zip = m.route.param('zip');
    this.country = m.route.param('country');
  },
  view() {
    return [
      m('.row', [
        m('.col-12', [
          m('.row.justify-content-start.py-5', [
            m('.col-auto.customer__address', [
              m('.d-block.pb-3', `${this.first_name} ${this.last_name}`),
              m('.d-block', `${this.street_address}`),
              m('.d-block', `${this.city}, ${this.zip}`),
              m('.d-block', `${this.country}`)
            ])
          ]),
          m('.row.align-content-center.justify-content-between.garment__header.mt-4.py-2', [
            m('.col-6', 'Service Garment'),
            m('.col-2.align-self-center', 'Price'),
            m('.col-2.align-self-center', 'Order'),
            m('.col-2.align-self-center.status', 'Status')
          ]),
          m('.row.align-content-center.justify-content-between.py-3.mb-5.garment__item', [
            m('.col-2', [
              m('img.px-1[src="' + this.garment_image + '"]')
            ]),
            m('.col-4.align-self-center', m.route.param('garment')),
            m('.col-2.align-self-center', m.route.param('service_price')),
            m('.col-2.align-self-center', `#${this.order_number}`),
            m('.col-2.align-self-center', m('.garment__status','Paid'))
          ]),
          m('.row.align-content-center.footer.pt-5', [
            m('.col-12.pt-5', [
              m('.footer__logo.pb-2', [
                m("svg.icon", m('use[xlink:href="icons.svg#logo"]')),
              ]),
              m('.d-block', 'BRIXTOL TEXTILES of Söndag Den Sjunde AB Fashion Agency.'),
              m('.d-block', 'VAT no: SE556840368601 | Trademark no: 30870 | Phone: +46 (0) 8 777 7247'),
              m('.d-block', 'Hantverkargatan 20, Stockholm, Sweden. All rights reserved.')
            ])
          ]),
        ])
      ])
    ];
  }
};
