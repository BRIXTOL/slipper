/* Modules */
import m from 'mithril';

export default {
  view(){
    return [
      m('footer', [
        m('.container-fluid', [
          m('.row.justify-content-center.align-items-center', [
            m('.col-11', [
              m('.row.justify-content-center.align-items-center', [
                m('.col-5', [

                ]),
                m('.col', [
                  m('ul', [
                    m('li', m('a[href="#"]', 'Guide')),
                    m('li', m('a[href="#"]', 'API')),
                    m('li', m('a[href="#"]', 'Gitter Chat')),
                    m('li', m('a[href="#"]', 'Github')),
                    m('li', m('a[href="#"]', 'Examples')),
                    m('li', m('a[href="#"]', 'Contributing')),
                  ])
                ]),
                m('.col', [
                  m('ul', [
                    m('li', m('a[href="#"]', 'What is Mithril?')),
                    m('li', m('a[href="#"]', 'Getting started')),
                    m('li', m('a[href="#"]', 'DOM elements')),
                    m('li', m('a[href="#"]', 'Components')),
                    m('li', m('a[href="#"]', 'Routing')),
                    m('li', m('a[href="#"]', 'XHR'))
                  ])
                ]),
                m('.col', [
                  m('ul', [
                    m('li', m('a[href="#"]', 'Installation')),
                    m('li', m('a[href="#"]', 'Tutorials')),
                    m('li', m('a[href="#"]', 'Resources')),
                    m('li', m('a[href="#"]', 'Key concepts')),
                    m('li', m('a[href="#"]', 'Social')),
                    m('li', m('a[href="#"]', 'Misc'))
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
