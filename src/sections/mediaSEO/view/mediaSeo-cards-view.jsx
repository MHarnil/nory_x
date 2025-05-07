import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { _userCards } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import MediaSeoCardList from '../mediaSeo-card-list.jsx';

// ----------------------------------------------------------------------

export default function MediaSeoCardsView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Media SEO"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'User', href: paths.dashboard.user.root },
          { name: 'Media SEO' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <MediaSeoCardList users={_userCards} />
    </Container>
  );
}
