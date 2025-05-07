import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Tabs,
  Tab,
  TextField,
  Button,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  Paper,
  InputAdornment
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  CalendarToday as CalendarIcon,
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
  People as PeopleIcon,
  ShoppingBag as ShoppingBagIcon,
  Search as SearchIcon,
  OpenInNew as OpenInNewIcon
} from '@mui/icons-material';

export default function OrdersCard() {
  const [dateRange, setDateRange] = useState({
    start: new Date('1970-01-01'),
    end: new Date('2025-05-02')
  });
  const [tabValue, setTabValue] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleTabChange = (_, newValue) => setTabValue(newValue);
  const handleItemsPerPageChange = (e) => setItemsPerPage(e.target.value);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Date Range Filter */}
      <Paper
        elevation={1}
        sx={{
          p: 2,
          mb: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body1">Date Range</Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Start"
              value={dateRange.start}
              onChange={(date) => setDateRange({ ...dateRange, start: date })}
              renderInput={(params) => <TextField {...params} size="small" sx={{ width: 150 }} />}
              inputFormat="MM-dd-yyyy"
            />
            <Typography>-</Typography>
            <DatePicker
              label="End"
              value={dateRange.end}
              onChange={(date) => setDateRange({ ...dateRange, end: date })}
              renderInput={(params) => <TextField {...params} size="small" sx={{ width: 150 }} />}
              inputFormat="MM-dd-yyyy"
            />
          </LocalizationProvider>
        </Box>
        <Button variant="contained" color="primary" sx={{ textTransform: 'none' }}>
          Refresh
        </Button>
      </Paper>

      {/* Sales & Forecast Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {[{ icon: <ShoppingBagIcon />, title: 'Sales' }, { icon: <PeopleIcon />, title: 'Forecast' }].map(
          (section, index) => (
            <Grid item xs={12} md={6} key={section.title}>
              <Card elevation={1} sx={{ height: '100%' }}>
                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      {React.cloneElement(section.icon, { color: 'primary', sx: { mr: 1 } })}
                      <Typography variant="h6" color="text.secondary">{section.title}</Typography>
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2 }}>CAD 0</Typography>
                    <Grid container spacing={2}>
                      {['0 orders received', '0 units sold', '0 units refunded', '0 units unfulfilled'].slice(
                        0, index === 0 ? 4 : 2
                      ).map((label, i) => (
                        <Grid item xs={6} key={i}>
                          <Paper
                            variant="outlined"
                            sx={{ p: 2, textAlign: 'center', borderRadius: 1 }}
                          >
                            <Typography
                              color={label.includes('received') ? 'success.main' : 'error.main'}
                              variant="body2"
                            >
                              {label}
                            </Typography>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )
        )}
      </Grid>

      {/* Tabbed Sales Section */}
      <Card elevation={1} sx={{px:2}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Sales" />
            <Tab label="Forecast" />
            <Tab label="Summary" />
          </Tabs>
        </Box>
        <Box sx={{ p: 3 }}>
          {/* Top Control Row */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <Select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                  {[10, 25, 50].map((n) => (
                    <MenuItem value={n} key={n}>{n}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Typography variant="body2" color="text.secondary">Items per page</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                variant="outlined"
                startIcon={<OpenInNewIcon />}
                sx={{ textTransform: 'none' }}
              >
                Manage Orders
              </Button>
              <TextField
                placeholder="Search sales..."
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
                sx={{ width: 200 }}
              />
            </Box>
          </Box>

          {/* Placeholder for tab content */}
          <Box sx={{ height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography color="text.secondary">Content for "{['Sales', 'Forecast', 'Summary'][tabValue]}" goes here</Typography>
          </Box>

          {/* Pagination */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <IconButton size="small"><ArrowBackIcon /></IconButton>
            <IconButton size="small"><ArrowForwardIcon /></IconButton>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
