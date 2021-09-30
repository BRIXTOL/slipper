import m from 'mithril';

export function print () {

  const button = {
    label: 'PRINT SLIP'
  };

  return m.div('row', 'print')(
    m.div(
      'col-auto',
      'as-center',
      'py-4'
    )(
      m.button('print__button')(
        {
          type: 'button',
          onclick: () => window.print()
        },
        [
          m.svg('icon')(m('use[xlink:href="icons.svg#print"]')),
          m.span(button.label)
        ]
      )
    )
  );

}
