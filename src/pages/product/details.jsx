import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';
// import { ProductSeoListView } from '../../sections/productsSEO/view/index.js';

// ----------------------------------------------------------------------

export default function ProductShopDetailsPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Product: Details</title>
      </Helmet>

      {/*<ProductSeoListView id={`${id}`} />*/}
    </>
  );
}
