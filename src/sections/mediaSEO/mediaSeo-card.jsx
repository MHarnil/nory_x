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
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import TablePagination from '@mui/material/TablePagination';
import AnalyticsWidgetSummary from '../overview/analytics/analytics-widget-summary.jsx';

const mockData = [
  {
    id: 74,
    name: 'THE COLLECTION SNOWBOARD',
    image: 'https://api-prod-minimal-v700.pages.dev/assets/images/m-product/product-1.webp',
    currentAltText: 'Snowboard with Blue Mount...',
    suggestedAltText: 'Blue Mountain Snowboard',
    suggestedDescription: 'Explore the slopes with the Blue Mountain...',
  },
  {
    id: 75,
    name: 'THE MULTI-MANAGED SNOWBOARD',
    image: 'https://api-prod-minimal-v700.pages.dev/assets/images/m-product/product-1.webp',
    currentAltText: 'SusTern Acme Snowboard...',
    suggestedAltText: 'Pink & Yellow Graphic Snowboard',
    suggestedDescription: 'Explore the SusTern Acme...',
  },
  {
    id: 74,
    name: 'THE COLLECTION SNOWBOARD',
    image: 'https://api-prod-minimal-v700.pages.dev/assets/images/m-product/product-1.webp',
    currentAltText: 'Snowboard with Blue Mount...',
    suggestedAltText: 'Blue Mountain Snowboard',
    suggestedDescription: 'Explore the slopes with the Blue Mountain...',
  },
  {
    id: 75,
    name: 'THE MULTI-MANAGED SNOWBOARD',
    image: 'https://api-prod-minimal-v700.pages.dev/assets/images/m-product/product-1.webp',
    currentAltText: 'SusTern Acme Snowboard...',
    suggestedAltText: 'Pink & Yellow Graphic Snowboard',
    suggestedDescription: 'Explore the SusTern Acme...',
  },
  {
    id: 74,
    name: 'THE COLLECTION SNOWBOARD',
    image: 'https://api-prod-minimal-v700.pages.dev/assets/images/m-product/product-1.webp',
    currentAltText: 'Snowboard with Blue Mount...',
    suggestedAltText: 'Blue Mountain Snowboard',
    suggestedDescription: 'Explore the slopes with the Blue Mountain...',
  },
  {
    id: 75,
    name: 'THE MULTI-MANAGED SNOWBOARD',
    image: 'https://api-prod-minimal-v700.pages.dev/assets/images/m-product/product-1.webp',
    currentAltText: 'SusTern Acme Snowboard...',
    suggestedAltText: 'Pink & Yellow Graphic Snowboard',
    suggestedDescription: 'Explore the SusTern Acme...',
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

export default function MediaSeoCard({ title = 'SEO Optimization' }) {
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const rowsPerPage = 5;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredData = mockData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery) ||
    item.currentAltText.toLowerCase().includes(searchQuery) ||
    item.suggestedAltText.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsWidgetSummary
            title="SEO applied to media"
            total={1}
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsWidgetSummary
            title="SEO suggestions for media"
            total={13}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsWidgetSummary
            title="SEO action required for media"
            total={16}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>
      </Grid>

      <Card sx={{ p: 2, mb: 6 }}>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 3 }}>
          <Typography variant="h6">Media SEO</Typography>
        </Stack>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <TextField
            label="Search..."
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={handleSearch}
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
                <TableCell rowSpan={2} align="center" sx={{ border: '1px solid #e0e0e0' }}>ID</TableCell>
                <TableCell colSpan={2} align="center" sx={{ border: '1px solid #e0e0e0' }}>Product</TableCell>
                <TableCell rowSpan={2} align="center" sx={{ border: '1px solid #e0e0e0' }}>Current Alt Text</TableCell>
                <TableCell colSpan={2} align="center" sx={{ border: '1px solid #e0e0e0' }}>Suggested</TableCell>
                <TableCell rowSpan={2} align="center" sx={{ border: '1px solid #e0e0e0' }}>Change Rationale</TableCell>
                <TableCell rowSpan={2} align="center" sx={{ border: '1px solid #e0e0e0' }}>Action</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" sx={{ border: '1px solid #e0e0e0' }}>Name</TableCell>
                <TableCell align="center" sx={{ border: '1px solid #e0e0e0' }}>Image</TableCell>
                <TableCell align="center" sx={{ border: '1px solid #e0e0e0' }}>Alt Text</TableCell>
                <TableCell align="center" sx={{ border: '1px solid #e0e0e0' }}>Description</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="center">
                    <img src={row.image} alt="Product" height="40" />
                  </TableCell>
                  <TableCell>{row.currentAltText}</TableCell>
                  <TableCell>{row.suggestedAltText}</TableCell>
                  <TableCell>{row.suggestedDescription}</TableCell>
                  <TableCell align="center">
                    <IconButton>
                      <VisibilityIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <RadioGroup row defaultValue="none" name={`action-${row.id}`}>
                      <FormControlLabel value="apply" control={<Radio />} label="Apply" />
                      <FormControlLabel value="none" control={<Radio />} label="None" />
                    </RadioGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

          <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
            <Typography variant="body2">
              Showing {Math.min(page * rowsPerPage + 1, filteredData.length)} to{" "}
              {Math.min((page + 1) * rowsPerPage, filteredData.length)} of {filteredData.length} items
            </Typography>
            <TablePagination
              component="div"
              count={filteredData.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[]}
            />
          </Box>
      </Card>
    </>
  );
}
