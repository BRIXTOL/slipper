import m from 'mithril';
import { Slips } from '@brixtol/types';
import { EU } from '../../utils/utils';

export interface IInformation {

  how_it_works: {
    heading: Uppercase<string>;
    conditions: string;
    instructions: string[]
  },
  return_policy: {
    heading: Uppercase<string>;
    policy: string;
  }
}

export function information ({ country_code, country }: Partial<Slips.IOrderQuery>) {

  /**
   * The free return threshold price
   */
  const return_threshold = '1,500 SEK';

  /**
   * The surchage if order is returned after 14 days
   */
  const policy_surcharge = '200 SEK';

  /**
   * The service point. Swedish order are DHL
   */
  const service_point = country_code === 'SE' ? 'DHL' : 'UPS';

  /* -------------------------------------------- */
  /* DATA                                         */
  /* -------------------------------------------- */

  const { how_it_works, return_policy }: IInformation = {
    how_it_works: {
      heading: 'HOW IT WORKS',
      conditions: EU.has(country_code)
        ? `We offer free returns on products purchased for <strong>${return_threshold}</strong> or more. <br>Products that are below this amount we will deduct a return fee from your refund.`
        : `Return fees are incurred when you return or exchange items shipping from ${country}. <br>We will deduct these cost/s from your refund total.`,
      instructions: [
        'Place item/s you wish to return or exchange in the package you recieved the order in.',
        'Fill out the reason for your return and include it in the package.',
        'Use the shipping label included in your package.',
        'Ensure that you have sealed the package securely.',
        `Hand in your return at the closest <strong>${service_point}</strong>.`
      ]
    },
    return_policy: {
      heading: 'RETURN POLICY',
      policy: `We have a strict <strong>14 days return policy</strong> which starts the day you receive your order. If you return your order to us after the 14 days have passed we will deduct a handling and shipping fee cost of <strong>${policy_surcharge}</strong> from your account and return the order to you.<p class="mt-3">Please refer to the return policy on our website <strong>brixtoltextiles.com/returns</strong> or send us an email to <strong>help@brixtoltextiles.com</strong> for more information.</p>`
    }
  };

  return m(
    '.row.jc-between.ai-center.g-0.pt-3.pb-5'
    , [
      m(
        '.col-auto'
        , { style: { width: '550px' } }
        , m(
          'strong.d-block.py-2',
          how_it_works.heading
        )
        , m(
          '.d-block.py-1.mb-3.fs-sm',
          m.trust(how_it_works.conditions)
        )
        , m(
          'ul.fs-sm.pl-3',
          how_it_works.instructions.map(
            info => m(
              'li'
              , m.trust(info)
            )
          )
        )

      ),
      m(
        '.col.pr-0'
        , m(
          '.p-3.bd.bd-gray.radius-2',
          m(
            'strong.mb-0.text-center',
            return_policy.heading
          )
          , m(
            '.d-block.mt-3.fs-sm',
            m.trust(return_policy.policy)
          )
        )
      )
    ]
  );
}
