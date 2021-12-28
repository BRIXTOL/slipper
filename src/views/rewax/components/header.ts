import m from 'mithril';
import { Slips } from '@brixtol/types';
import { qrcanvas } from 'qrcanvas';

export interface IHeader {
  heading: {
    title: Uppercase<string>;
    sub_title: Uppercase<string>;
    order_no: Uppercase<string>;
  }
}

export function header ({ id }: Partial<Slips.IOrderQuery>) {

  const {
    heading: {
      title,
      sub_title
    }
  }: IHeader = {
    heading: {
      title: 'REWAXING SLIP',
      sub_title: 'SERVICE BY BRIXTOL TEXTILES',
      order_no: 'ORDER NO:'
    }
  };

  console.log(title);
  return m('.row.jc-between.ac-center.bd-bottom.mb-3', [
    m('.col-auto', [
      m('h1', title),
      m('h5.fc-gray', sub_title)
    ]),
    m('.col-auto', m('div', {
      oncreate: ({ dom }) => {

        const qrcode = qrcanvas({
          padding: 10,
          cellSize: 2,
          resize: true,
          foreground: [
            // foreground color
            { style: '#000000' }
            // outer squares of the positioner

          ],
          background: '#fff',
          data: 'https://synth.brixtol.com/service/rewaxing/' + id,
          correctLevel: 'H',
          effect: {
            // type: 'fusion',
            value: 0
          }
        });

        dom.parentNode.appendChild(qrcode);

      }
    }))
  ]);

};
