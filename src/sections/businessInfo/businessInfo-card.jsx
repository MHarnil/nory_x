import {
  Card,
  Typography,
  Box,
  Grid,
  Chip,
  Divider,
  Stack,
  Icon,
  Paper,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
import PublicIcon from '@mui/icons-material/Public';
import StoreIcon from '@mui/icons-material/Store';
import LayersIcon from '@mui/icons-material/Layers';

export default function BusinessInfoCard() {
  return (
    <Card sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ py: 2, borderRadius: 2, backgroundColor: '#f9fafb' }}
        >
          <Typography variant="subtitle1" fontWeight="500">
            sustern-development.myshopify.com
          </Typography>
          <Chip
            label="My Account"
            color="primary"
            clickable
            sx={{ mt: 1 }}
            icon={<AccountCircleIcon />}
          />
        </Paper>
      </Box>

      {/* Info Sections */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <AccountCircleIcon color="action" />
              <Typography variant="subtitle2">Account Information</Typography>
            </Stack>
            <Typography variant="body2">
              <strong>Country:</strong> CA
            </Typography>
            <Typography variant="body2">
              <strong>Store Currency:</strong> CAD
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <LayersIcon color="action" />
              <Typography variant="subtitle2">Product Categories</Typography>
            </Stack>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Chip label="ski & snowboard wax" color="info" />
              <Chip label="snowboards" color="info" />
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <PublicIcon color="action" />
              <Typography variant="subtitle2">Primary Market</Typography>
            </Stack>
            <Typography>Canada</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <PublicIcon color="action" />
              <Typography variant="subtitle2">Other Markets</Typography>
            </Stack>
            <Typography>No other markets provided</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      {/* Locations */}
      <Typography variant="h6" gutterBottom>
        <Stack direction="row" alignItems="center" spacing={1}>
          <StoreIcon color="primary" />
          <span>Locations</span>
        </Stack>
      </Typography>

      <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
        <Grid container spacing={1}>
          {['Name', 'Country', 'Active', 'Inventory', 'Ships', 'Online'].map((head) => (
            <Grid key={head} item xs={2}>
              <Typography variant="caption" fontWeight="bold">
                {head}
              </Typography>
            </Grid>
          ))}
          {['Shop location', 'CA', '✔', '✔', '✔', '✔'].map((value, idx) => (
            <Grid key={idx} item xs={2}>
              <Typography variant="body2">{value}</Typography>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Card>
  );
}
