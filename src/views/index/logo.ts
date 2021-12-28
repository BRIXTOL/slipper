import m from 'mithril';

export function logo () {

  return m('svg', {
    class: 'logo-lined',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 539 80',
    id: 'logo'
  },

  m('g[transform="translate(0.5,0.4)"]', [
    m('path', {
      d: 'M0,24.42V48.84H51V61H0V79H71.82V30.52H20.47V18.31H71.82V0H0Z',
      'data-llp-duration': '500',
      'shape-rendering': 'geometricPrecision',
      'data-llp-delay': '0'
    }),
    m('path', {
      d: 'M85.82,39.5V79H158V61H106.65V0H85.82Z',
      'data-llp-duration': '500',
      'data-llp-delay': '500'

    }),
    m('path', {
      d: 'M172,39.5V79h20.83V0H172Z',
      'data-llp-duration': '500',
      'data-llp-delay': '750'

    }),
    m('path', {
      d: 'M207.91,39.5V79h20.83V48.84h51.35V0H207.91Zm51.35-15.08v6.1H228.74V18.31h30.52Z',
      'data-llp-duration': '500',
      'data-llp-delay': '1000'

    }),
    m('path', {
      d: 'M293.74,39.5V79h20.83V48.84h51.35V0H293.74Zm51.35-15.08v6.1H314.56V18.31h30.52Z',
      'data-llp-duration': '500',
      'data-llp-delay': '1500'

    }),
    m('path', {
      d: 'M379.92,9.16v9.16h51.35V30.52H397.15V48.84h33.4V61H379.92V79H452.1V0H379.92Z',
      'data-llp-duration': '500',
      'data-llp-delay': '2000'

    }),
    m('path', {
      d: 'M466.1,24.42V48.84l10.77.07,10.81.11-10.81,9.66L466.1,68.33V79h21.47L502.4,65.61l14.87-13.43.11,13.43L517.45,79h20.11V0H466.1Zm51.35,0v6.1H486.93V18.31h30.52Z',
      'data-llp-duration': '500',
      'data-llp-delay': '2500'
    })
  ]));
}
