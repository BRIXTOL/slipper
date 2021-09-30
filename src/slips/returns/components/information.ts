import m from 'mithril';
import { IParams } from '..';
import { EU } from '../../utils';

export interface IInformation {
  heading: {
    how_it_works: Uppercase<string>;
    return_address: Uppercase<string>;
  },
  data: {
    instructions: string[];
    options: Array<{
      option: IParams['return_option']
      title: Uppercase<string>;
      info: string;
    }>;
    address: {
      name: Uppercase<string>;
      warehouse: Uppercase<string>;
      street_address: string;
      city: string;
      zip: string;
      country: string;
    };
  }
}

export function information ({ country_code }: Partial<IParams>) {

  const {
    heading,
    data: {
      options,
      address,
      instructions
    }
  }: IInformation = {
    heading: {
      how_it_works: 'HOW IT WORKS',
      return_address: 'RETURN ADDRESS'
    },
    data: {
      address: {
        name: 'BRIXTOL TEXTILES',
        warehouse: 'C/O KORALLEN AB',
        street_address: 'Ålandsgatan 10',
        city: 'Borås',
        zip: '504 41',
        country: 'Sweden'
      },
      options: [
        {
          option: 'free',
          title: 'FREE RETURN',
          info: 'Please use the return label included in your package.'
        },
        {
          option: 'prepaid',
          title: 'PRE-PAID RETURN',
          info: 'Return cost will be deducted from your refund. Please use the return label included in your package.'
        },
        {
          option: 'paid',
          title: 'RETURN AT OWN COST',
          info: 'Contact us at help@brixtoltextiles.com for customs clearance documents.'
        }
      ],
      instructions: [
        'Place item/s you wish to return or exchange in the package good/s were recieved',
        'Fill in this return slip and include it in the package',
        'Seal the package securely',
        'Send your return/exchange to our return address'
      ]
    }
  };

  const opt = EU.has(country_code) ? 'free' : 'paid';
  const cost = options.find(({ option }) => option === opt);

  return m.div(
    'row',
    'jc-between',
    'ai-center',
    'g-1',
    'pb-3'
  )(
    [
      m.div('col-9')(
        [
          m.strong('d-block', 'pb-2')(cost.title),
          m.span('how-it-works')(m.trust(cost.info)),
          m.strong('d-block', 'py-2')(heading.how_it_works),
          m.ul('how-it-works')(instructions.map(info => m.li(info)))
        ]
      ),
      m.div('col')(
        [
          m.strong('mb-0', 'text-center')(heading.return_address),
          m.div(
            'row',
            'pb-3',
            'pl-2',
            'how-it-works'
          )(
            [
              m.div('sender__address', 'mt-3')(
                [
                  m.div('d-block', 'sender__name')(address.name),
                  m.div('d-block', 'pb-1')(address.warehouse),
                  m.div('d-block')(`${address.street_address},${address.zip}`),
                  m.div('d-block')(`${address.city}, ${address.country}`)
                ]
              )
            ]
          )
        ]
      )
    ]
  );
}
