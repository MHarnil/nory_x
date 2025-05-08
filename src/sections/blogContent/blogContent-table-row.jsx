import PropTypes from 'prop-types';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { useBoolean } from 'src/hooks/use-boolean';
import Iconify from 'src/components/iconify';
import { ConfirmDialog } from 'src/components/custom-dialog';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';

// ----------------------------------------------------------------------

export default function BlogContentTableRow({ row, selected, onViewRow, onSelectRow, onDeleteRow }) {
  const { id, title, category, contentDate, action } = row;

  const confirm = useBoolean();

  const collapse = useBoolean();
  const [uploadStatus, setUploadStatus] = useState({});
  const handleUploadChange = (id, value) => {
    setUploadStatus((prev) => ({ ...prev, [id]: value }));
  };

  const popover = usePopover();

  const renderPrimary = (
    <TableRow hover selected={selected}>
      <TableCell>
        <Box
          onClick={onViewRow}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          {id}
        </Box>
      </TableCell>

      <TableCell>
        <Box
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxHeight: '4.2em',
          }}
        >
          {title}
        </Box>
      </TableCell>

      <TableCell>
        <Box
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxHeight: '4.2em',
          }}
        >
          {category}
        </Box>
      </TableCell>

      <TableCell>
        <Box
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxHeight: '4.2em',
          }}
        >
          {' '}
          {contentDate}{' '}
        </Box>
      </TableCell>

      <TableCell>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <VisibilityIcon />
      </Box>
      </TableCell>

      <TableCell>
        <RadioGroup
          row
          value={uploadStatus[action] || 'none'}
          onChange={(e) => handleUploadChange(action, e.target.value)}
        >
          <FormControlLabel
            value="upload"
            control={<Radio size="small" />}
            label="Upload"
          />
          <FormControlLabel
            value="none"
            control={<Radio size="small" />}
            label="None"
          />
        </RadioGroup>
      </TableCell>
    </TableRow>
  );

  return (
    <>
      {renderPrimary}

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        <MenuItem
          onClick={() => {
            confirm.onTrue();
            popover.onClose();
          }}
          sx={{ color: 'error.main' }}
        >
          <Iconify icon="solar:trash-bin-trash-bold" />
          Delete
        </MenuItem>

        <MenuItem
          onClick={() => {
            onViewRow();
            popover.onClose();
          }}
        >
          <Iconify icon="solar:eye-bold" />
          View
        </MenuItem>
      </CustomPopover>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content="Are you sure want to delete?"
        action={
          <Button variant="contained" color="error" onClick={onDeleteRow}>
            Delete
          </Button>
        }
      />
    </>
  );
}

BlogContentTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onViewRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
  onSelectRow: PropTypes.func,
};
