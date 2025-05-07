import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import ShopSeoCard from './shopSeo-card.jsx';

// ----------------------------------------------------------------------

export default function ShopSeoCardList({ users }) {
  return (
    <Box>
        <ShopSeoCard key={users[0].id} user={users[0]} />
    </Box>
  );
}

ShopSeoCardList.propTypes = {
  users: PropTypes.array,
};
