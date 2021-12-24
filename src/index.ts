import './style/styles.scss';
import m from 'mithril';
import { Rewax } from './views/rewax';
import { Returns } from './views/returns';
import { Index } from './views/index/index';

m.route.prefix = '';
m.route(document.body, '/', {
  '/': {
    render () {
      return m(Index);
    }
  },
  '/return': {
    render () {
      return m(Returns);
    }
  },
  '/rewaxing': {
    render () {
      return m(Rewax);
    }
  }
});
