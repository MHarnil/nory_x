import { Helmet } from 'react-helmet-async';

import InventorysListView from '../../sections/inventorys/view/inventorys-list-view.jsx';

// ----------------------------------------------------------------------

export default function InventoryPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Inventory</title>
      </Helmet>

      <InventorysListView />
    </>
  );
}
