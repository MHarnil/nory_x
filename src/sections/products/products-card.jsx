import {
  Card,
  Typography,
  Box,
  Stack,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Avatar,
  Button, Grid,
} from '@mui/material';
import { useState } from 'react';
import CategoryIcon from '@mui/icons-material/Category';
import TablePagination from '@mui/material/TablePagination';
import AnalyticsWidgetSummary from '../overview/analytics/analytics-widget-summary.jsx';

const rows = [
  { id: 75, name: 'RED SNOWBOARD', status: 'ACTIVE', type: 'NEW', category: '-' },
  { id: 76, name: 'GREEN SNOWBOARD', status: 'ACTIVE', type: 'NEW', category: '-' },
  {
    id: 77,
    name: 'THE COLLECTION SNOWBOARD: LIQUID',
    status: 'ACTIVE',
    type: 'NEW',
    category: '-',
  },
  { id: 78, name: 'THE MULTI-MANAGED SNOWBOARD', status: 'ACTIVE', type: 'NEW', category: '-' },
  {
    id: 79,
    name: 'THE 3P FULFILLED SNOWBOARD',
    status: 'ACTIVE',
    type: 'NEW',
    category: 'Snowboards',
  },
  {
    id: 80,
    name: 'THE COLLECTION SNOWBOARD: OXYGEN',
    status: 'ACTIVE',
    type: 'NEW',
    category: '-',
  },
  { id: 81, name: 'THE MULTI-LOCATION SNOWBOARD', status: 'ACTIVE', type: 'NEW', category: '-' },
  {
    id: 82,
    name: 'THE COLLECTION SNOWBOARD: HYDROGEN',
    status: 'ACTIVE',
    type: 'NEW',
    category: '-',
  },
  { id: 83, name: 'THE COMPARE AT PRICE SNOWBOARD', status: 'ACTIVE', type: 'NEW', category: '-' },
  { id: 84, name: 'THE COMPLETE SNOWBOARD', status: 'ACTIVE', type: 'NEW', category: '-' },
];

export default function ProductsCard({ title = 'Campaigns' }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setPage(0);
  };

  const filteredRows = rows.filter((row) => row.name.toLowerCase().includes(searchQuery));

  return (
    <>
      <Grid container spacing={3} sx={{display: 'flex', justifyContent: 'center'}}>
        <Grid item xs={12} sm={6} md={6}>
          <AnalyticsWidgetSummary
            title="18 products"
            total={16} // active
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>
      </Grid>

      <Card sx={{ p: 2, mb: 6 }}>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 3 }}>
          <Typography variant="h6">Products</Typography>
        </Stack>

        <TableContainer>
          <Box display="flex" justifyContent="space-between" px={2} py={1}>
            <TextField
              label="Search products..."
              variant="outlined"
              size="small"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Box display="flex" alignItems="center">
              <Box display="flex" alignItems="center" sx={{ mr: 2 }}>
                <Typography mr={1}>Items per page</Typography>
                <TextField
                  size="small"
                  select
                  SelectProps={{ native: true }}
                  value={rowsPerPage}
                  onChange={handleChangeRowsPerPage}
                  sx={{ width: 80 }}
                >
                  {[5, 25, 50].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </TextField>
              </Box>
              <Button variant="contained">Manage Products</Button>
            </Box>
          </Box>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Variants</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>
                      <Button variant="contained" size="small">
                        1
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="" // Hides "Rows per page:"
          rowsPerPageOptions={[]} // Hides the dropdown
          labelDisplayedRows={({ from, to, count }) =>
            `Showing ${from} to ${to} of ${count} products`
          }
        />
      </Card>
    </>
  );
}
