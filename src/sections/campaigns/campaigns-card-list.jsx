import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import CampaignsCard from './campaigns-card.jsx';

// ----------------------------------------------------------------------

export default function CampaignsCardList({ users }) {
  return (
    <Box>
        <CampaignsCard key={users[0].id} user={users[0]} />
    </Box>
  );
}

CampaignsCardList.propTypes = {
  users: PropTypes.array,
};
