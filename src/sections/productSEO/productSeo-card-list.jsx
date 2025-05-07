import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import ProductSeoCard from './productSeo-card.jsx';

// ----------------------------------------------------------------------

export default function ProductSeoCardList({ users }) {
  return (
    <Box>
        <ProductSeoCard key={users[0].id} user={users[0]} />
    </Box>
  );
}

ProductSeoCardList.propTypes = {
  users: PropTypes.array,
};
