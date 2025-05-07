import Container from '@mui/material/Container';
import { _userCards } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';
import HomeCardList from '../home-card-list.jsx';

// ----------------------------------------------------------------------

export default function HomeCardsView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <HomeCardList users={_userCards} />
    </Container>
  );
}
