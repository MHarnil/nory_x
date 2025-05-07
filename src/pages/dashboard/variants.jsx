import { Helmet } from 'react-helmet-async';

import { VariantsCardsView } from '../../sections/variants/view/index.js';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Variants</title>
      </Helmet>

      <VariantsCardsView />
    </>
  );
}
