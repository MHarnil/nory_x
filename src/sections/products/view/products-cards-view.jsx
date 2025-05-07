import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { _userCards } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import ProductsCardList from '../products-card-list.jsx';

// ----------------------------------------------------------------------

export default function ProductsCardsView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Products"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'User', href: paths.dashboard.user.root },
          { name: 'Products' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <ProductsCardList users={_userCards} />
    </Container>
  );
}
