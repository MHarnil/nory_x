import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import BusinessInsightsCard from './businessInsights-card.jsx';

// ----------------------------------------------------------------------

export default function BusinessInsightsCardList({ users }) {
  return (
    <Box>
        <BusinessInsightsCard key={users[0].id} user={users[0]} />
    </Box>
  );
}

BusinessInsightsCardList.propTypes = {
  users: PropTypes.array,
};
