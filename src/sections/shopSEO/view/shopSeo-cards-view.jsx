import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { _userCards } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import ShopSeoCardList from '../shopSeo-card-list.jsx';

// ----------------------------------------------------------------------

export default function ShopSeoCardsView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Product SEO"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'User', href: paths.dashboard.user.root },
          { name: 'Product SEO' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <ShopSeoCardList users={_userCards} />
    </Container>
  );
}
