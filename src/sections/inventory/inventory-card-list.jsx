import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import InventoryCard from './inventory-card.jsx';

// ----------------------------------------------------------------------

export default function InventoryCardList({ users }) {
  return (
    <Box>
        <InventoryCard key={users[0].id} user={users[0]} />
    </Box>
  );
}

InventoryCardList.propTypes = {
  users: PropTypes.array,
};
