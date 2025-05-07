import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import MediaSeoCard from './mediaSeo-card.jsx';

// ----------------------------------------------------------------------

export default function MediaSeoCardList({ users }) {
  return (
    <Box>
        <MediaSeoCard key={users[0].id} user={users[0]} />
    </Box>
  );
}

MediaSeoCardList.propTypes = {
  users: PropTypes.array,
};
