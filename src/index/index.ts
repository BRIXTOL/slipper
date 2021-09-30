import m from 'mithril';

export const Index = {
  view: () => m.div('container-fluid')(
    [
      m.div('channels__brixtol')(
        m('a', { href: 'https://www.brixtoltextiles.com' },
          m.svg('icon')(m('use[xlink:href="icons.svg#avatar"]')))
      ),
      m.div('channels__github')(
        m('a', { href: 'https://github.com/BRIXTOL/slipper' },
          m.svg('icon')(m('use[xlink:href="icons.svg#github"]')))
      ),
      m.div(
        'hero',
        'row',
        'jc-center',
        'ai-center'
      )([
        m.div(
          'col-12',
          'col-sm-11',
          'col-lg-6',
          'as-center',
          'text-center'
        )([
          m.svg('hero__logo')(m('use[xlink:href="icons.svg#slipper-logo"]')),
          m.div(
            'row',
            'jc-center',
            'find',
            'pt-4',
            'gx-0'
          )([
            m.div(
              'col-12',
              'col-sm-11',
              'col-lg-6'
            )([
              m.input('px-3', 'py-2')({ type: 'text', placeholder: 'ORDER NUMBER' })
            ])
          ]),
          m.div('col-auto')([
            m.svg('icon', 'mt-4')(m('use[xlink:href="icons.svg#print"]'))
          ])
        ]),
        m.div(
          'hero__caption',
          'text-center',
          'col-8',
          'pb-2'
        )(m.trust('<small class="version">V</small>3.1.0'))
      ])

    ]
  )

};
