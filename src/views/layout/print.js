/* Modules */
import m from 'mithril';


export default {
  view() {
    return [
      m('.row.justify-content-center.align-items-center.print', [
        m('.col-auto.align-self-center.py-4', [
          m('button.print__button[type="button"]', {
             onclick:() => window.print()
          }, 'PRINT REWAXING SLIP'),
        ])
      ])
    ];
  }
};
