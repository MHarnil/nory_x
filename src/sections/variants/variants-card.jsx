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
  Button,
  Select,
  MenuItem,
  Paper, Grid,
} from '@mui/material';
import { useState } from 'react';
import CategoryIcon from '@mui/icons-material/Category';
import Pagination from '@mui/material/Pagination';
import AnalyticsWidgetSummary from '../overview/analytics/analytics-widget-summary.jsx';

const data = [
  { id: 114, name: 'RED SNOWBOARD', forSale: true, cost: '0.00 currency code', price: '100.00 CAD', inventory: 0 },
  { id: 115, name: 'GREEN SNOWBOARD', forSale: true, cost: '0.00 currency code', price: '100.00 CAD', inventory: 0 },
  { id: 116, name: 'THE COLLECTION SNOWBOARD: LIQUID', forSale: true, cost: '0.00 currency code', price: '749.95 CAD', inventory: 1010 },
  { id: 117, name: 'THE MULTI-MANAGED SNOWBOARD', forSale: true, cost: '0.00 currency code', price: '629.95 CAD', inventory: 1104 },
  { id: 118, name: 'THE 3P FULFILLED SNOWBOARD', forSale: false, cost: '0.00 currency code', price: '2629.95 CAD', inventory: 0 },
  { id: 119, name: 'THE COLLECTION SNOWBOARD: OXYGEN', forSale: true, cost: '0.00 currency code', price: '1025.00 CAD', inventory: 1715 },
  { id: 120, name: 'THE MULTI-LOCATION SNOWBOARD', forSale: true, cost: '0.00 currency code', price: '729.95 CAD', inventory: 936 },
  { id: 121, name: 'THE COLLECTION SNOWBOARD: HYDROGEN', forSale: true, cost: '0.00 currency code', price: '600.00 CAD', inventory: 726 },
  { id: 122, name: 'THE COMPARE AT PRICE SNOWBOARD', forSale: true, cost: '0.00 currency code', price: '785.95 CAD', inventory: 1732 },
  { id: 123, name: 'THE COMPLETE SNOWBOARD - ICE', forSale: true, cost: '0.00 currency code', price: '699.95 CAD', inventory: 1901 },
];

export default function VariantsCard({ title = 'Campaigns' }) {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data.filter(row =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedData = filteredData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setPage(1);
  };

  return (
    <>
      <Grid container spacing={3} sx={{display: 'flex', justifyContent: 'center'}}>
        <Grid item xs={12} sm={6} md={6}>
          <AnalyticsWidgetSummary
            title="10 Variants"
            total={9} // for sale
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>
      </Grid>

      <Card sx={{ p: 2, mb: 6 }}>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 3 }}>
          <Typography variant="h6">Variants</Typography>
        </Stack>

        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Box display="flex" alignItems="center">
            <Select size="small" value={rowsPerPage} onChange={handleRowsPerPageChange}>
              {[5, 10, 25].map(opt => (
                <MenuItem key={opt} value={opt}>{opt}</MenuItem>
              ))}
            </Select>
            <Typography variant="body2" ml={1}>Items per page</Typography>
          </Box>
          <TextField
            size="small"
            placeholder="Search variants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Box>

        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Variant Name</TableCell>
                <TableCell>For Sale</TableCell>
                <TableCell>Cost</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Inventory</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.forSale ? 'Yes' : 'No'}</TableCell>
                  <TableCell>{row.cost}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.inventory}</TableCell>
                </TableRow>
              ))}
              {paginatedData.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No matching variants found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Box mt={2} display="flex" justifyContent="end" alignItems="center">
          <Typography variant="body2" sx={{mr:1}}>
            Showing {paginatedData.length} of {filteredData.length} variants
          </Typography>
          <Pagination
            count={Math.ceil(filteredData.length / rowsPerPage)}
            page={page}
            onChange={(e, val) => setPage(val)}
            size="small"
            shape="rounded"
          />
        </Box>
      </Card>
    </>
  );
}
