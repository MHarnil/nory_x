import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { _userCards } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import DstrategyCardList from '../dstrategy-card-list.jsx';

// ----------------------------------------------------------------------

export default function DstrategyCardsView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Dynamic Strategy"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'User', href: paths.dashboard.user.root },
          { name: 'Dynamic Strategy' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <DstrategyCardList users={_userCards} />
    </Container>
  );
}
