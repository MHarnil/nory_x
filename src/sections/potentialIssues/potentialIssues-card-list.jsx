import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import PotentialIssuesCard from './potentialIssues-card.jsx';

// ----------------------------------------------------------------------

export default function PotentialIssuesCardList({ users }) {
  return (
    <Box>
        <PotentialIssuesCard key={users[0].id} user={users[0]} />
    </Box>
  );
}

PotentialIssuesCardList.propTypes = {
  users: PropTypes.array,
};
