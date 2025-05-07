import { Helmet } from 'react-helmet-async';

import { DstrategyCardsView } from '../../sections/dstrategy/view/index.js';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Dynamic Strategy</title>
      </Helmet>

      <DstrategyCardsView />
    </>
  );
}
