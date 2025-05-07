import { Helmet } from 'react-helmet-async';

import InventoryCardsView from '../../sections/inventory/view/inventory-cards-view.jsx';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Inventory</title>
      </Helmet>

      <InventoryCardsView />
    </>
  );
}
