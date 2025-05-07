import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { _userCards } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import PotentialIssuesCardList from '../potentialIssues-card-list.jsx';

// ----------------------------------------------------------------------

export default function PotentialIssuesCardsView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Potential Issues"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'User', href: paths.dashboard.user.root },
          { name: 'Potential Issues' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <PotentialIssuesCardList users={_userCards} />
    </Container>
  );
}
