import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { _userCards } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import BlogContentCardList from '../blogContent-card-list.jsx';

// ----------------------------------------------------------------------

export default function BlogContentCardsView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Blog Content"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'User', href: paths.dashboard.user.root },
          { name: 'Blog Content' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <BlogContentCardList users={_userCards} />
    </Container>
  );
}
