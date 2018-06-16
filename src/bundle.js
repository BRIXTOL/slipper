/* Stylesheet */
import './sass/styles.js';

/* Modules */
import m from 'mithril';

/* Components */
import Print from './views/components/print';

/* Layout */
import Footer from './layout/footer';

/* Slips */
import Rewaxing from './views/slips/rewaxing';

/* Views */
import Index from './views/index';

const root = document.getElementById('app');

//m.route.prefix('');
m.route(root, '/', {
  '/': {
    render() {
      return m(Index);
    }
  },
  '/rewaxing': {
    render() {
      return [
        m(Print),
        m(Rewaxing),
        m(Footer)
      ];
    }
  }
});
