import m from 'mithril';

export function print () {

  const button = {
    label: 'PRINT SLIP'
  };

  return m('.row.print', [
    m('.col-auto.as-center.py-4',
      m('button.btn.btn-green.fc-white.radius', {
        type: 'button',
        onclick: () => window.print()
      },
      m('span', button.label)))
  ]);

}
