/* Stylesheet */
import './sass/styles.js';

/* Modules */
import m from 'mithril';

/* Layout */
import Header from './views/layout/header';
import Print from './views/layout/print';
/* Views */
import Rewaxing from './views/rewaxing';

const root = document.getElementById('app');

//m.route.prefix('');

m.route(root, '/rewaxing', {
  '/rewaxing': {
    render() {
      return [
        m(Print),
        m('.container.p-5', [
          m(Header),
          m(Rewaxing)
        ])
      ];
    }
  }
});
