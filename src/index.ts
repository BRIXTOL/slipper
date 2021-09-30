import './style/styles.scss';
import m from 'mithril';
import { Returns } from './slips/returns';
import { Index } from './index/index';

// m.route.prefix('');
m.route(document.body, '/', {
  '/': {
    render () {
      return m(Index);
    }
  },
  '/return': {
    render: () => m(Returns)
  }
});
