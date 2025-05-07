import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { _userCards } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import OrdersCardList from '../orders-card-list.jsx';

// ----------------------------------------------------------------------

export default function OrdersCardsView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Orders & Analytics"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'User', href: paths.dashboard.user.root },
          { name: 'Orders & Analytics' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <OrdersCardList users={_userCards} />
    </Container>
  );
}
