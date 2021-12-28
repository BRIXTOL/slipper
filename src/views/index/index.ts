import m from 'mithril';
import LazyLinePainter from 'lazy-line-painter';
import { searchOrder } from '../utils/utils';
import { logo } from './logo';

export const Index: m.Component<{}, {
  loading: boolean;
  search: string;
  error: string;
}> = {
  oninit: (
    {
      state
    }
  ) => {
    state.search = '';
    state.error = '';
    state.loading = false;
  },
  view: (
    {
      state
    }
  ) => m(
    '.container-fluid'
    , [
      m(
        '.channels__brixtol'
        , m(
          'a'
          , { href: 'https://www.brixtoltextiles.com' }
          , m('svg.icon', m('use[xlink:href="icons.svg#avatar"]'))
        )
      ),
      m(
        '.channels__github',
        m(
          'a'
          , { href: 'https://github.com/BRIXTOL/slipper' }
          , m('svg.icon', m('use[xlink:href="icons.svg#github"]'))
        )
      ),
      m(
        '.hero.row.jc-center.ai-center'
        , [
          m(
            '.col-12.col-sm-11.col-lg-6.as-center.text-center',
            [
              m('.hero__logo', {
                oncreate: ({ dom }) => new LazyLinePainter(dom, {
                  strokeWidth: 2,
                  strokeColor: '#ffffff',
                  strokeCap: 'round'
                }).paint()
              }, [
                logo(),
                m(
                  '.d-block.mt-4.fc-white.fs-sm.text-center.m-auto',
                  m.trust('DOCUMENT AND SLIP GENERATOR FOR <a href="https://brixtol.com" target="_blank"BRIXTOL TEXTILES</a>')
                )
              ]),

              m(
                '.row.jc-center.find.pt-4.gx-0',
                m(
                  '.col-12.col-sm-11.col-md-6',
                  m('.input-group', [
                    m(
                      'input.px-3.py-2',
                      {
                        type: 'text',
                        placeholder: 'ENTER ORDER ID NUMBER',
                        oncreate: ({ dom }) => (dom as HTMLInputElement).focus(),
                        oninput: async (event: InputEvent) => {

                          const input = (event.target as HTMLInputElement).value;

                          if (input.length < 3) {
                            state.loading = false;
                            state.error = '';
                            return;
                          }

                          state.loading = true;
                          state.search = 'Searching...';

                          try {

                            const response: any = await searchOrder(input);

                            console.log(response);
                            if (response.status === 'failed') {
                              state.error = response.message.replace(/(\d+)/, '<strong>$1</strong>');
                              state.loading = false;
                              state.search = '';
                            } else {
                              state.search = 'Redirecting...';
                              m.route.set(`/return?${response.path}`);
                            }

                          } catch (e) {

                            state.search = 'Internal Error';
                            state.loading = false;

                          }
                        }
                      }
                    )
                  ])
                )
              ),
              m(
                '.col-auto.mt-4',
                {
                  style: {
                    height: '100px'
                  }
                },
                state.loading ? [
                  m('span.mt-4.spinner.find-spinner'),
                  m('.d-block.fs-sm.fc-white.mt-3', state.search)
                ] : state.error ? [
                  m('.d-block.fs-xl.mt-4', '😞'),
                  m('.d-block.fs-md.fc-white.mt-3', m.trust(state.error))
                ] : m(
                  'svg.icon',
                  m('use[xlink:href="icons.svg#print"]')
                )
              )
            ]
          ),
          m(
            '.hero__caption.text-center.col-8.pb-2'
            , m.trust('<small class="version">V</small><!version!>')
          )
        ]
      )
    ]
  )

};
