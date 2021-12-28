import { Slips } from '@brixtol/types';
import m from 'mithril';

export interface IFooter {
  data: {
    /**
     * Short version returns policy disclaimer
     */
    disclaimer: string;
  };
}

export function footer (data:Partial<Slips.IOrderQuery>) {

  const {
    data: {
      disclaimer
    }
  }: IFooter = {
    data: {
      disclaimer: 'Returned goods must be sent back in new condition with hang-tags intact and original wrapping. You need to include any free and/or promotional items you may have received with your purchase. Our warehouse staff will report to us on the condition of the returned items. We will contest and void your refund request or exchange if returned items show indication of prolonged wear, exposure to outdoor elements or damage of any kind.<br>Refer to the returns and exchanges policy on our website <strong>brixtoltextiles.com/returns</strong> for more information.'
    }
  };

  return m(
    '.row.jc-between.ac-center.py-3.mb-3'
    , m(
      '.col.fs-xs.text-center.text-italic'
      , m.trust(disclaimer)
    )
  );
};
