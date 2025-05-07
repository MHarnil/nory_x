import PropTypes from 'prop-types';

import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { _userList } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import user2 from '../../../pages/user2.jsx';
import User2NewEditForm from '../user2-new-edit-form.jsx';
import { useParams } from 'react-router';
import { useGetData } from '../../../api/getapi.jsx';

// ----------------------------------------------------------------------

export default function User2EditView() {
  const settings = useSettingsContext();
  const {id} = useParams();
  const {users} = useGetData();

  console.log(id,'id');

  const currentUser = users.find((user) => user.id === id);
  console.log(currentUser,"user");

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'User',
            href: paths.dashboard.user2.root,
          },
          { name: currentUser?.name },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <User2NewEditForm currentUser={currentUser} />
    </Container>
  );
}

User2EditView.propTypes = {
  id: PropTypes.string,
};

