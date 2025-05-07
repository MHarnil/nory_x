import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { _userCards } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import VariantsCardList from '../variants-card-list.jsx';

// ----------------------------------------------------------------------

export default function VariantsCardsView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Variants"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'User', href: paths.dashboard.user.root },
          { name: 'Variants' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <VariantsCardList users={_userCards} />
    </Container>
  );
}
