/* Modules */
import m from 'mithril';
import QRious from 'qrious';

/**
 * QR Code Generator
 * @type {Object}
 */


export default {
  oncreate(v) {
    new QRious({
      element: document.getElementById('qr-code'),
      value: m.route.param('order_url'),
      mime: "image/svg+xml",
      level: "L",
      size: 130
    })
  },
  view() {
    return [
      m('.row.justify-content-between.align-items-center', [
        m('.col-auto.align-self-right', [
          m('.header__title', 'Garment Rewaxing'),
          m('.header__subtitle', 'Service By Brixtol Textiles')
        ]),
        m('.col-auto', [
          m('canvas#qr-code')
        ])
      ])
    ];
  }
};
