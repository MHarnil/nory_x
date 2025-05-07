import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { _userCards } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import BusinessInfoCardList from '../businessInfo-card-list.jsx';

// ----------------------------------------------------------------------

export default function BusinessInfoCardsView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Business Info"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'User', href: paths.dashboard.user.root },
          { name: 'Business Info' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <BusinessInfoCardList users={_userCards} />
    </Container>
  );
}
