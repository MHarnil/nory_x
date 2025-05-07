import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import DstrategyCard from './dstrategy-card.jsx';

// ----------------------------------------------------------------------

export default function DstrategyCardList({ users }) {
  return (
    <Box>
        <DstrategyCard key={users[0].id} user={users[0]} />
    </Box>
  );
}

DstrategyCardList.propTypes = {
  users: PropTypes.array,
};
