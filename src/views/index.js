import m from 'mithril';

export default {
   view() {
      return [
         m('.container-fluid', [
            m('.channels__brixtol', [
               m('a[href="https://www.brixtoltextiles.com"]', [
                  m("svg.icon", [
                     m('use[xlink:href="icons.svg#avatar"]')
                  ])
               ])
            ]),
            m('.channels__github', [
               m('a[href="https://github.com/BRIXTOL/slipper"]', [
                  m("svg.icon", [
                     m('use[xlink:href="icons.svg#github"]')
                  ])
               ])
            ]),
            m('.hero.row.justify-content-center.align-items-center', [
               m('.col-auto', [
                  m("svg.hero__logo", m('use[xlink:href="icons.svg#slipper-logo"]'))
               ])
            ])
         ])
      ];
   }
};
