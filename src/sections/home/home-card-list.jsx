import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import HomeCard from './home-card.jsx';

// ----------------------------------------------------------------------

export default function HomeCardList({ users }) {
  return (
    <Box>
        <HomeCard key={users[0].id} user={users[0]} />
    </Box>
  );
}

HomeCardList.propTypes = {
  users: PropTypes.array,
};
