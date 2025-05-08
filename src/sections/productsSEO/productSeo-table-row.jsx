import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Collapse from '@mui/material/Collapse';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';

import { useBoolean } from 'src/hooks/use-boolean';

import { fCurrency } from 'src/utils/format-number';
import { fDate, fTime } from 'src/utils/format-time';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { ConfirmDialog } from 'src/components/custom-dialog';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { useState } from 'react';

// ----------------------------------------------------------------------

export default function ProductSeoTableRow({ row, selected, onViewRow, onSelectRow, onDeleteRow }) {
  const {
    id,
    productName,
    CurrentTitle,
    CurrentDescription,
    SuggestedFocus,
    SuggestedTitle,
    SuggestedDescription,
    SuggestedTags,
    SEOHealth,
    action,
  } = row;

  const confirm = useBoolean();

  const collapse = useBoolean();

  const [uploadStatus, setUploadStatus] = useState({});

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
          {productName}
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
          {CurrentTitle}{' '}
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
          {CurrentDescription}{' '}
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
          {SuggestedFocus}{' '}
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
          {SuggestedTitle}{' '}
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
          {SuggestedDescription}
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
          {SuggestedTags}
        </Box>
      </TableCell>
      <TableCell>
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor:
              SEOHealth === 'good' ? '#4CAF50' : SEOHealth === 'average' ? '#FF3D3D' : '#FF3D3D',
            margin: 'auto',
          }}
        />
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
          <FormControlLabel value="upload" control={<Radio size="small" />} label="Upload" />
          <FormControlLabel value="none" control={<Radio size="small" />} label="None" />
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

ProductSeoTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onViewRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
  onSelectRow: PropTypes.func,
};
