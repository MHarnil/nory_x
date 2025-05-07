import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import ProductsCard from './products-card.jsx';

// ----------------------------------------------------------------------

export default function ProductsCardList({ users }) {
  return (
    <Box>
        <ProductsCard key={users[0].id} user={users[0]} />
    </Box>
  );
}

ProductsCardList.propTypes = {
  users: PropTypes.array,
};
