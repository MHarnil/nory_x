// MediaSeoCard.jsx
import {
  Card,
  Typography,
  Box,
  Grid,
  Stack,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Avatar,
  FormControl,
  MenuItem,
  Button,
  Select,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchIcon from '@mui/icons-material/Search';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TablePagination from '@mui/material/TablePagination';
import AnalyticsWidgetSummary from '../overview/analytics/analytics-widget-summary.jsx';

const data = [
  {
    id: 61,
    name: 'RED SNOWBOARD',
    current: { title: '-', desc: '-' },
    suggested: {
      focus: 'RED SNOWBOARD Canada',
      title: 'RED SNOWBOARD - Canada',
      desc: 'Get your RED SNOWBOARD today...',
      tags: '"RED SNOWBOARD", "snowboard"',
    },
    health: 'red',
  },
  {
    id: 62,
    name: 'GREEN SNOWBOARD',
    current: { title: '-', desc: '-' },
    suggested: {
      focus: 'None',
      title: 'GREEN SNOWBOARD - Canada',
      desc: 'Get your GREEN SNOWBOARD today...',
      tags: '"GREEN SNOWBOARD", "snowboard"',
    },
    health: 'red',
  },
  {
    id: 63,
    name: 'THE COLLECTION SNOWBOARD',
    current: { title: 'THE COLLECTION SNOWBOARD...', desc: 'Shop THE COLLECTION SNOWBOARD...' },
    suggested: {
      focus: 'THE COLLECTION SNOWBOARD...',
      title: 'Liquid Snowboard - The Collection',
      desc: 'Shop The Collection...',
      tags: '"Liquid Snowboard", "The..."',
    },
    health: 'red',
  },
  {
    id: 64,
    name: 'THE MULTI-MANAGED SNOWBOARD',
    current: { title: 'THE MULTI-MANAGED SNOWBOARD...', desc: 'Shop THE MULTI-MANAGED SN...' },
    suggested: {
      focus: 'Multi-Managed Snowboard',
      title: 'Multi-Managed Snowboard - Canada',
      desc: 'Shop the Multi-Managed Fr...',
      tags: '"Multi-Managed Snowboard"...',
    },
    health: 'green',
  },
];

const StatCard = ({ value, color }) => (
  <Box
    sx={{
      bgcolor: color,
      color: 'white',
      px: 1.5,
      py: 0.5,
      borderRadius: '12px',
      fontWeight: 'bold',
      fontSize: 12,
      minWidth: 28,
      textAlign: 'center',
    }}
  >
    {value}
  </Box>
);

export default function ProductSeoCard({ title = 'SEO Optimization' }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);
  const [search, setSearch] = useState('');

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const getColor = (health) => {
    return {
      red: '#d32f2f',
      yellow: '#fbc02d',
      green: '#388e3c',
    }[health];
  };

  const filteredData = data.filter((row) => row.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsWidgetSummary
            title="SEO applied to products"
            total={1}
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsWidgetSummary
            title="SEO suggestions for products"
            total={13}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsWidgetSummary
            title="SEO action required for products"
            total={16}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>
      </Grid>

      <Card sx={{ p: 2, mb: 6 }}>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 3 }}>
          <Typography variant="h6">Product SEO</Typography>
        </Stack>
        <Box display="flex" justifyContent="space-between" mb={1}>
          <TextField
            size="small"
            placeholder="Search SEO products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ width: 300 }}
          />
          <Box display="flex" alignItems="center">
            <Typography mr={1}>Items per page</Typography>
            <TextField
              size="small"
              select
              SelectProps={{ native: true }}
              defaultValue={5}
              sx={{ width: 80 }}
            >
              {[5, 25, 50].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>
          </Box>
        </Box>

        <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center" rowSpan={2} sx={{ border: '1px solid #e0e0e0' }}>ID</TableCell>
                <TableCell align="center" rowSpan={2} sx={{ border: '1px solid #e0e0e0' }}>Product Name</TableCell>
                <TableCell align="center" colSpan={2} sx={{ border: '1px solid #e0e0e0' }}>
                  Current SEO
                </TableCell>
                <TableCell align="center" colSpan={4} sx={{ border: '1px solid #e0e0e0' }}>
                  Suggested SEO
                </TableCell>
                <TableCell align="center" rowSpan={2} sx={{ border: '1px solid #e0e0e0' }}>SEO Health</TableCell>
                <TableCell align="center" rowSpan={2} sx={{ border: '1px solid #e0e0e0' }}>Change Rationale</TableCell>
                <TableCell align="center" rowSpan={2} sx={{ border: '1px solid #e0e0e0' }}>Action</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" sx={{ border: '1px solid #e0e0e0' }}>Title</TableCell>
                <TableCell align="center" sx={{ border: '1px solid #e0e0e0' }}>Description</TableCell>
                <TableCell align="center" sx={{ border: '1px solid #e0e0e0' }}>Focus</TableCell>
                <TableCell align="center" sx={{ border: '1px solid #e0e0e0' }}>Title</TableCell>
                <TableCell align="center" sx={{ border: '1px solid #e0e0e0' }}>Description</TableCell>
                <TableCell align="center" sx={{ border: '1px solid #e0e0e0' }}>Tags</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.current.title}</TableCell>
                    <TableCell>{row.current.desc}</TableCell>
                    <TableCell>{row.suggested.focus}</TableCell>
                    <TableCell>{row.suggested.title}</TableCell>
                    <TableCell>{row.suggested.desc}</TableCell>
                    <TableCell>{row.suggested.tags}</TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          bgcolor: getColor(row.health),
                          mx: 'auto',
                          borderRadius: '50px',
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton size="small" color="primary">
                        <VisibilityIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <RadioGroup row defaultValue="none">
                        <FormControlLabel
                          value="apply"
                          control={<Radio size="small" />}
                          label="Apply"
                        />
                        <FormControlLabel
                          value="none"
                          control={<Radio size="small" />}
                          label="None"
                        />
                      </RadioGroup>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography variant="body2">
            Showing {Math.min((page + 1) * rowsPerPage, filteredData.length)} of{' '}
            {filteredData.length} items
          </Typography>
          <TablePagination
            component="div"
            count={filteredData.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[10]}
          />
        </Box>
      </Card>
    </>
  );
}
