import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import OrdersCard from './orders-card.jsx';

// ----------------------------------------------------------------------

export default function OrdersCardList({ users }) {
  return (
    <Box>
        <OrdersCard key={users[0].id} user={users[0]} />
    </Box>
  );
}

OrdersCardList.propTypes = {
  users: PropTypes.array,
};
