import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { _userCards } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import CampaignsCardList from '../campaigns-card-list.jsx';

// ----------------------------------------------------------------------

export default function CampaignsCardsView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Campaigns"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'User', href: paths.dashboard.user.root },
          { name: 'Campaigns' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <CampaignsCardList users={_userCards} />
    </Container>
  );
}
