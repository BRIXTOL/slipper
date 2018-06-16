/* Modules */
import m from 'mithril';

export default {
  view() {
    return [
      m('.container', [
        m('.footer', [
          m('.row.pt-5.text-center', [
            m('.col-12.pt-5', [
              m("svg.footer__logo", m('use[xlink:href="icons.svg#logo"]')),
              m('.d-block.pt-2', 'BRIXTOL TEXTILES of Söndag Den Sjunde AB Fashion Agency.'),
              m('.d-block.pt-1', 'VAT no: SE556840368601 | Trademark no: 30870 | Phone: +46 (0) 8 777 7247'),
              m('.d-block.pt-1', 'Hantverkargatan 20, Stockholm, Sweden.')
            ])
          ])
        ])
      ])
    ];
  }
};
