import m from 'mithril';

export interface IFooter {
  data: {
    /**
     * Short version returns policy disclaimer
     */
    disclaimer: string;
  };
}

export function footer () {

  const {
    data: {
      disclaimer
    }
  }: IFooter = {
    data: {
      disclaimer: 'We have a 14 day return policy. Returned goods must be in new condition with tags and original wrapping. You need to include any free and/or promotional items you may have received with your purchase. You cannot return items purchased during sale periods or discounted (only exchanges are applicable). Refer to the terms and conditions on our website for more information or email us at help@brixtoltextiles.com'
    }
  };

  return m.div(
    'row',
    'jc-center',
    'ac-center',
    'py-3',
    'mb-3'
  )(
    m.div(
      'col-11',
      'text-center',
      'promo-disclaim'
    )(
      disclaimer
    )
  );
};
