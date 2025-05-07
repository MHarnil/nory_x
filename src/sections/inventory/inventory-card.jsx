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
  Button,
  Select,
  MenuItem,
  Paper,
  Grid,
} from '@mui/material';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AnalyticsWidgetSummary from '../overview/analytics/analytics-widget-summary.jsx';

const data = [
  {
    id: 112,
    name: 'RED SNOWBOARD',
    date: '02/05/2025',
    available: 0,
    incoming: 0,
    committed: 0,
    onHand: 0,
    damaged: 0,
    unit: 'units',
    sites: 1,
  },
  {
    id: 113,
    name: 'GREEN SNOWBOARD',
    date: '02/05/2025',
    available: 0,
    incoming: 0,
    committed: 0,
    onHand: 0,
    damaged: 0,
    unit: 'units',
    sites: 1,
  },
  {
    id: 114,
    name: 'THE COLLECTION SNOWBOARD: LIQUID',
    date: '02/05/2025',
    available: 1010,
    incoming: 0,
    committed: 0,
    onHand: 1010,
    damaged: 0,
    unit: 'units',
    sites: 1,
  },
  {
    id: 115,
    name: 'THE MULTI-MANAGED SNOWBOARD',
    date: '03/05/2025',
    available: 1104,
    incoming: 0,
    committed: 0,
    onHand: 1104,
    damaged: 0,
    unit: 'units',
    sites: 1,
  },
  {
    id: 116,
    name: 'THE 3P FULFILLED SNOWBOARD',
    date: '04/05/2025',
    available: 0,
    incoming: 0,
    committed: 0,
    onHand: 0,
    damaged: 0,
    unit: 'units',
    sites: 1,
  },
  {
    id: 117,
    name: 'THE COLLECTION SNOWBOARD: OXYGEN',
    date: '02/05/2025',
    available: 1715,
    incoming: 0,
    committed: 0,
    onHand: 1715,
    damaged: 0,
    unit: 'units',
    sites: 1,
  },
  {
    id: 118,
    name: 'THE MULTI-LOCATION SNOWBOARD',
    date: '03/05/2025',
    available: 936,
    incoming: 0,
    committed: 0,
    onHand: 936,
    damaged: 0,
    unit: 'units',
    sites: 1,
  },
  {
    id: 119,
    name: 'THE COLLECTION SNOWBOARD: HYDROGEN',
    date: '02/05/2025',
    available: 726,
    incoming: 0,
    committed: 0,
    onHand: 726,
    damaged: 0,
    unit: 'units',
    sites: 1,
  },
  {
    id: 120,
    name: 'THE COMPARE AT PRICE SNOWBOARD',
    date: '02/05/2025',
    available: 1732,
    incoming: 0,
    committed: 0,
    onHand: 1732,
    damaged: 0,
    unit: 'units',
    sites: 1,
  },
  {
    id: 121,
    name: 'THE COMPLETE SNOWBOARD - ICE',
    date: '04/05/2025',
    available: 1901,
    incoming: 0,
    committed: 0,
    onHand: 1901,
    damaged: 0,
    unit: 'units',
    sites: 1,
  },
];

const InventoryForecastData = [
  {
    id: 1,
    name: 'GREEN SNOWBOARD',
    date: '02/05/2025',
    available: 0,
    incoming: 0,
    committed: 0,
    onHand: 0,
    damaged: 0,
    unit: 'units',
    sites: 1,
  },
  {
    id: 2,
    name: 'RED SNOWBOARD',
    date: '02/05/2025',
    available: 0,
    incoming: 0,
    committed: 0,
    onHand: 0,
    damaged: 0,
    unit: 'units',
    sites: 1,
  },
  {
    id: 3,
    name: 'THE COLLECTION SNOWBOARD: LIQUID',
    date: '02/05/2025',
    available: 1010,
    incoming: 0,
    committed: 0,
    onHand: 1010,
    damaged: 0,
    unit: 'units',
    sites: 1,
  },
  {
    id: 4,
    name: 'THE MULTI-MANAGED SNOWBOARD',
    date: '03/05/2025',
    available: 1104,
    incoming: 0,
    committed: 0,
    onHand: 1104,
    damaged: 0,
    unit: 'units',
    sites: 1,
  },
  {
    id: 5,
    name: 'THE 3P FULFILLED SNOWBOARD',
    date: '04/05/2025',
    available: 0,
    incoming: 0,
    committed: 0,
    onHand: 0,
    damaged: 0,
    unit: 'units',
    sites: 1,
  },
  {
    id: 6,
    name: 'THE COLLECTION SNOWBOARD: OXYGEN',
    date: '02/05/2025',
    available: 1715,
    incoming: 0,
    committed: 0,
    onHand: 1715,
    damaged: 0,
    unit: 'units',
    sites: 1,
  },
  {
    id: 7,
    name: 'THE MULTI-LOCATION SNOWBOARD',
    date: '03/05/2025',
    available: 936,
    incoming: 0,
    committed: 0,
    onHand: 936,
    damaged: 0,
    unit: 'units',
    sites: 1,
  },
  {
    id: 8,
    name: 'THE COLLECTION SNOWBOARD: HYDROGEN',
    date: '02/05/2025',
    available: 726,
    incoming: 0,
    committed: 0,
    onHand: 726,
    damaged: 0,
    unit: 'units',
    sites: 1,
  },
  {
    id: 9,
    name: 'THE COMPARE AT PRICE SNOWBOARD',
    date: '02/05/2025',
    available: 1732,
    incoming: 0,
    committed: 0,
    onHand: 1732,
    damaged: 0,
    unit: 'units',
    sites: 1,
  },
  {
    id: 10,
    name: 'THE COMPLETE SNOWBOARD - ICE',
    date: '04/05/2025',
    available: 1901,
    incoming: 0,
    committed: 0,
    onHand: 1901,
    damaged: 0,
    unit: 'units',
    sites: 1,
  },
];

export default function InventoryCard() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [tab, setTab] = useState(0);

  const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedData = filteredData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <>
      <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item xs={12} sm={6} md={6}>
          <AnalyticsWidgetSummary
            title="10 items"
            total={3} // out of stoke
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>
      </Grid>

      <Card sx={{ p: 2 }}>
        {/* Tabs */}
        <Tabs value={tab} onChange={(e, newVal) => setTab(newVal)} sx={{ mb: 2 }}>
          <Tab label="Inventory" />
          <Tab label="Inventory Forecast" />
        </Tabs>

        {/* Inventory Table */}
        {tab === 0 && (
          <>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Select
                size="small"
                value={rowsPerPage}
                onChange={(e) => setRowsPerPage(Number(e.target.value))}
              >
                {[10, 25, 50].map((val) => (
                  <MenuItem key={val} value={val}>
                    {val}
                  </MenuItem>
                ))}
              </Select>

              <Box display="flex" gap={1}>
                <Button variant="outlined">Manage Inventory</Button>
                <TextField
                  size="small"
                  placeholder="Search inventory..."
                  value={searchQuery}
                  onChange={(e) => {
                    setPage(1);
                    setSearchQuery(e.target.value);
                  }}
                />
              </Box>
            </Box>

            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Available</TableCell>
                    <TableCell>Incoming</TableCell>
                    <TableCell>Committed</TableCell>
                    <TableCell>On Hand</TableCell>
                    <TableCell>Damaged</TableCell>
                    <TableCell>Unit</TableCell>
                    <TableCell>Sites</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{item.available}</TableCell>
                      <TableCell>{item.incoming}</TableCell>
                      <TableCell>{item.committed}</TableCell>
                      <TableCell>{item.onHand}</TableCell>
                      <TableCell>{item.damaged}</TableCell>
                      <TableCell>{item.unit}</TableCell>
                      <TableCell>
                        <Button size="small" variant="contained" color="primary" sx={{ px: 1 }}>
                          {item.sites}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {paginatedData.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={10} align="center">
                        No matching records found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>

            <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body2">
                Showing {paginatedData.length} of {filteredData.length} items
              </Typography>
              <Pagination
                count={Math.ceil(filteredData.length / rowsPerPage)}
                page={page}
                onChange={(e, val) => setPage(val)}
                size="small"
                shape="rounded"
              />
            </Box>
          </>
        )}

        {/* Forecast Table */}
        {tab === 1 && (
          <>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Select
                size="small"
                value={rowsPerPage}
                onChange={(e) => setRowsPerPage(Number(e.target.value))}
              >
                {[10, 25, 50].map((val) => (
                  <MenuItem key={val} value={val}>
                    {val}
                  </MenuItem>
                ))}
              </Select>

              <Box display="flex" gap={1}>
                <Button variant="outlined">Manage Inventory</Button>
                <TextField
                  size="small"
                  placeholder="Search inventory..."
                  value={searchQuery}
                  onChange={(e) => {
                    setPage(1);
                    setSearchQuery(e.target.value);
                  }}
                />
              </Box>
            </Box>
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Available</TableCell>
                    <TableCell>Incoming</TableCell>
                    <TableCell>Committed</TableCell>
                    <TableCell>On Hand</TableCell>
                    <TableCell>Damaged</TableCell>
                    <TableCell>Unit</TableCell>
                    <TableCell>Sites</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {InventoryForecastData.map((item, index) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{item.available}</TableCell>
                      <TableCell>{item.incoming}</TableCell>
                      <TableCell>{item.committed}</TableCell>
                      <TableCell>{item.onHand}</TableCell>
                      <TableCell>{item.damaged}</TableCell>
                      <TableCell>{item.unit}</TableCell>
                      <TableCell>
                        <Button size="small" variant="contained" color="primary" sx={{ px: 1 }}>
                          {item.sites}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </Card>
    </>
  );
}
