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
               m('.col-12.col-sm-11.col-lg-7.align-self-center.text-center', [
                  m("svg.hero__logo", m('use[xlink:href="icons.svg#slipper-logo"]')),
                  m('.hero__caption.d-block.pt-4.pb-2', "A document generator for Brixtol Textiles. Slipper generates document sheets that can be printed by integrating paramaters from the URL into views."),
                  m("svg.icon.mt-4", [
                     m('use[xlink:href="icons.svg#print"]')
                  ])
               ])
            ])
         ])
      ];
   }
};
