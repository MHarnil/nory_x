import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { _userCards } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import InventoryCardList from '../inventory-card-list.jsx';

// ----------------------------------------------------------------------

export default function InventoryCardsView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Inventory"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'User', href: paths.dashboard.user.root },
          { name: 'Inventory' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <InventoryCardList users={_userCards} />
    </Container>
  );
}
