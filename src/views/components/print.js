/* Modules */
import m from 'mithril';


export default {
  view() {
    return [
      m('.container', [
        m('.row.print', [
          m('.col-auto.align-self-center.py-4', [
            m('button.print__button[type="button"]', {
              onclick: () =>  window.print()
            },[
              m('svg.icon', m('use[xlink:href="icons.svg#print"]')),
              m('.span', 'PRINT SLIP')
            ]),
          ])
        ])
      ])
    ];
  }
};
