import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import VariantsCard from './variants-card.jsx';

// ----------------------------------------------------------------------

export default function VariantsCardList({ users }) {
  return (
    <Box>
        <VariantsCard key={users[0].id} user={users[0]} />
    </Box>
  );
}

VariantsCardList.propTypes = {
  users: PropTypes.array,
};
