import { Helmet } from 'react-helmet-async';

import { VariantListView } from '../../sections/variant/view/index.js';

// ----------------------------------------------------------------------

export default function VariantsPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Variants</title>
      </Helmet>

      <VariantListView />
    </>
  );
}
