import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import BusinessInfoCard from './businessInfo-card.jsx';

// ----------------------------------------------------------------------

export default function BusinessInfoCardList({ users }) {
  return (
    <Box>
        <BusinessInfoCard key={users[0].id} user={users[0]} />
    </Box>
  );
}

BusinessInfoCardList.propTypes = {
  users: PropTypes.array,
};
