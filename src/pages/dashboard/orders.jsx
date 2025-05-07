import { Helmet } from 'react-helmet-async';

import { OrdersCardsView } from '../../sections/orders/view/index.js';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Orders</title>
      </Helmet>

      <OrdersCardsView />
    </>
  );
}
