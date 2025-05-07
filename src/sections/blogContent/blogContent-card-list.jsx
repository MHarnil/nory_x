import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import BlogContentCard from './blogContent-card.jsx';

// ----------------------------------------------------------------------

export default function BlogContentCardList({ users }) {
  return (
    <Box>
        <BlogContentCard key={users[0].id} user={users[0]} />
    </Box>
  );
}

BlogContentCardList.propTypes = {
  users: PropTypes.array,
};
