import {
  Card,
  Typography,
  Box,
  Grid,
  Chip,
  Divider,
  Stack,
  Paper,
  Avatar,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
  alpha,
  IconButton,
  useMediaQuery,
  Container,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
import PublicIcon from '@mui/icons-material/Public';
import StoreIcon from '@mui/icons-material/Store';
import LayersIcon from '@mui/icons-material/Layers';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import FlagIcon from '@mui/icons-material/Flag';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

export default function BusinessInfoCard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  // Define custom colors
  const skyBlue = '#0096D6';
  const skyBlueDark = '#0078B0';
  const skyBlueLight = '#E6F7FF';
  const lightGray = '#F8FAFC';
  const midGray = '#EEF2F6';

  const storeName = 'sustern-development.myshopify.com';

  return (
    <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
      <Card
        sx={{
          borderRadius: { xs: 2, sm: 3, md: 4 },
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05), 0 1px 8px rgba(0, 0, 0, 0.06)',
          overflow: 'hidden',
          border: '1px solid',
          borderColor: midGray,
          position: 'relative',
          width: '100%',
        }}
      >
        {/* Top Corner Accent */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: { xs: '15%', sm: '20%', md: '25%' },
            height: { xs: '10%', sm: '14.4%' },
            bgcolor: alpha(skyBlue, 0.08),
            borderBottomLeftRadius: { xs: 50, sm: 75, md: 100 },
          }}
        />

        {/* Header */}
        <Box
          sx={{
            p: { xs: 2, sm: 2.5, md: 3 },
            pt: { xs: 3, sm: 3.5, md: 4 },
            pb: { xs: 2, sm: 2.5, md: 3 },
            position: 'relative',
          }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            justifyContent="space-between"
            spacing={2}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                sx={{
                  bgcolor: skyBlueLight,
                  color: skyBlueDark,
                  width: { xs: 42, sm: 48, md: 52 },
                  height: { xs: 42, sm: 48, md: 52 },
                  boxShadow: '0 4px 12px rgba(0, 120, 176, 0.15)',
                }}
              >
                <StorefrontIcon fontSize={isMobile ? 'medium' : 'large'} />
              </Avatar>
              <Box>
                <Typography variant={isMobile ? 'h6' : 'h5'} fontWeight="700" color={skyBlueDark}>
                  Business Info
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mt: 0.5,
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' },
                    maxWidth: { xs: '190px', sm: '250px', md: 'none' },
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {storeName}
                </Typography>
              </Box>
            </Stack>

            <Box
              sx={{
                display: 'flex',
                mt: { xs: 1, sm: 0 },
                alignSelf: { xs: 'flex-end', sm: 'auto' },
              }}
            >
              {!isMobile && (
                <Button
                  variant="outlined"
                  startIcon={<AccountCircleIcon />}
                  sx={{
                    borderColor: skyBlue,
                    color: skyBlue,
                    borderRadius: 6,
                    px: { xs: 1.5, sm: 1.75, md: 2 },
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' },
                    '&:hover': {
                      borderColor: skyBlueDark,
                      bgcolor: alpha(skyBlue, 0.05),
                    },
                  }}
                >
                  My Account
                </Button>
              )}
              <IconButton sx={{ ml: 1, color: 'text.secondary' }}>
                {isMobile ? <MenuIcon /> : <MoreVertIcon />}
              </IconButton>
            </Box>
          </Stack>
        </Box>

        <Divider />

        {/* Content */}
        <Box sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
          {/* Info Sections */}
          <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
            {/* Account Information */}
            <Grid item xs={12} sm={6} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 1.5, sm: 2, md: 2.5 },
                  borderRadius: { xs: 2, sm: 2.5, md: 3 },
                  height: '100%',
                  bgcolor: lightGray,
                  transition: 'all 0.2s',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                  },
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1.5} mb={2}>
                  <Avatar
                    sx={{
                      bgcolor: 'white',
                      color: skyBlue,
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                      width: { xs: 32, sm: 36, md: 40 },
                      height: { xs: 32, sm: 36, md: 40 },
                    }}
                  >
                    <FlagIcon sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }} />
                  </Avatar>
                  <Typography
                    variant={isMobile ? 'subtitle1' : 'h6'}
                    fontWeight="600"
                    color={skyBlueDark}
                  >
                    Account Information
                  </Typography>
                </Stack>
                <Stack spacing={1.5} sx={{ pl: { xs: 0.5, sm: 0.75, md: 1 } }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                      bgcolor: 'white',
                      p: { xs: 1.25, sm: 1.5 },
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: midGray,
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <PublicIcon
                        sx={{ fontSize: { xs: '0.875rem', sm: '1rem' }, color: 'text.secondary' }}
                      />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' } }}
                      >
                        Country
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body1"
                      fontWeight="600"
                      color="text.primary"
                      sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem', md: '1rem' } }}
                    >
                      CA
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                      bgcolor: 'white',
                      p: { xs: 1.25, sm: 1.5 },
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: midGray,
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <CurrencyExchangeIcon
                        sx={{ fontSize: { xs: '0.875rem', sm: '1rem' }, color: 'text.secondary' }}
                      />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' } }}
                      >
                        Store Currency
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body1"
                      fontWeight="600"
                      color="text.primary"
                      sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem', md: '1rem' } }}
                    >
                      CAD
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>

            {/* Product Categories */}
            <Grid item xs={12} sm={6} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 1.5, sm: 2, md: 2.5 },
                  borderRadius: { xs: 2, sm: 2.5, md: 3 },
                  height: '100%',
                  bgcolor: lightGray,
                  transition: 'all 0.2s',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                  },
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1.5} mb={2}>
                  <Avatar
                    sx={{
                      bgcolor: 'white',
                      color: skyBlue,
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                      width: { xs: 32, sm: 36, md: 40 },
                      height: { xs: 32, sm: 36, md: 40 },
                    }}
                  >
                    <LayersIcon sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }} />
                  </Avatar>
                  <Typography
                    variant={isMobile ? 'subtitle1' : 'h6'}
                    fontWeight="600"
                    color={skyBlueDark}
                  >
                    Product Categories
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  gap={1}
                  sx={{ pl: { xs: 0.5, sm: 0.75, md: 1 } }}
                >
                  <Chip
                    label="ski & snowboard wax"
                    sx={{
                      borderRadius: 6,
                      bgcolor: 'white',
                      border: '1px solid',
                      borderColor: alpha(skyBlue, 0.3),
                      color: skyBlueDark,
                      fontWeight: 500,
                      px: 0.5,
                      py: { xs: 2, sm: 2.25, md: 2.5 },
                      fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                      '& .MuiChip-label': {
                        px: { xs: 1, sm: 1.25, md: 1.5 },
                      },
                      '&:hover': {
                        bgcolor: 'white',
                        cursor: 'default',
                      },
                    }}
                  />
                  <Chip
                    label="snowboards"
                    sx={{
                      borderRadius: 6,
                      bgcolor: 'white',
                      border: '1px solid',
                      borderColor: alpha(skyBlue, 0.3),
                      color: skyBlueDark,
                      fontWeight: 500,
                      px: 0.5,
                      py: { xs: 2, sm: 2.25, md: 2.5 },
                      fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                      '& .MuiChip-label': {
                        px: { xs: 1, sm: 1.25, md: 1.5 },
                      },
                      '&:hover': {
                        bgcolor: 'white',
                        cursor: 'default',
                      },
                    }}
                  />
                </Stack>
              </Paper>
            </Grid>

            {/* Primary Market */}
            <Grid item xs={12} sm={6} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 1.5, sm: 2, md: 2.5 },
                  borderRadius: { xs: 2, sm: 2.5, md: 3 },
                  height: '100%',
                  bgcolor: lightGray,
                  transition: 'all 0.2s',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                  },
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1.5} mb={2}>
                  <Avatar
                    sx={{
                      bgcolor: 'white',
                      color: skyBlue,
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                      width: { xs: 32, sm: 36, md: 40 },
                      height: { xs: 32, sm: 36, md: 40 },
                    }}
                  >
                    <PublicIcon sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }} />
                  </Avatar>
                  <Typography
                    variant={isMobile ? 'subtitle1' : 'h6'}
                    fontWeight="600"
                    color={skyBlueDark}
                  >
                    Primary Market
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    pl: { xs: 0.5, sm: 0.75, md: 1 },
                    bgcolor: 'white',
                    p: { xs: 1.5, sm: 1.75, md: 2 },
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: midGray,
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography
                      variant="body1"
                      fontWeight="600"
                      sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem', md: '1rem' } }}
                    >
                      Canada
                    </Typography>
                  </Stack>
                </Box>
              </Paper>
            </Grid>

            {/* Other Markets */}
            <Grid item xs={12} sm={6} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 1.5, sm: 2, md: 2.5 },
                  borderRadius: { xs: 2, sm: 2.5, md: 3 },
                  height: '100%',
                  bgcolor: lightGray,
                  transition: 'all 0.2s',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                  },
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1.5} mb={2}>
                  <Avatar
                    sx={{
                      bgcolor: 'white',
                      color: skyBlue,
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                      width: { xs: 32, sm: 36, md: 40 },
                      height: { xs: 32, sm: 36, md: 40 },
                    }}
                  >
                    <LanguageIcon sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }} />
                  </Avatar>
                  <Typography
                    variant={isMobile ? 'subtitle1' : 'h6'}
                    fontWeight="600"
                    color={skyBlueDark}
                  >
                    Other Markets
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    pl: { xs: 0.5, sm: 0.75, md: 1 },
                    bgcolor: 'white',
                    p: { xs: 1.5, sm: 1.75, md: 2 },
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: midGray,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontStyle="italic"
                    sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' } }}
                  >
                    No other markets provided
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          <Box sx={{ my: { xs: 3, sm: 3.5, md: 4 }, position: 'relative' }}>
            <Divider>
              <Chip
                label="Locations"
                icon={
                  <StoreIcon sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }} />
                }
                sx={{
                  px: { xs: 1, sm: 1.5, md: 2 },
                  py: { xs: 0.25, sm: 0.5 },
                  bgcolor: skyBlueLight,
                  color: skyBlueDark,
                  fontWeight: 600,
                  fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' },
                  '& .MuiChip-icon': {
                    color: skyBlue,
                  },
                  '&:hover': {
                    bgcolor: skyBlueLight,
                    cursor: 'default',
                  },
                }}
              />
            </Divider>
          </Box>

          {/* Locations Table - Responsive */}
          <Box sx={{ mb: 3, overflowX: 'auto' }}>
            {/* Table for medium and large screens */}
            {!isMobile && (
              <TableContainer
                component={Paper}
                elevation={0}
                sx={{
                  borderRadius: { xs: 2, sm: 2.5, md: 3 },
                  border: '1px solid',
                  borderColor: midGray,
                  overflow: 'hidden',
                }}
              >
                <Table>
                  <TableHead sx={{ bgcolor: lightGray }}>
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          color: skyBlueDark,
                          py: { xs: 1.5, sm: 1.75, md: 2 },
                          fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' },
                        }}
                      >
                        Name
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          color: skyBlueDark,
                          py: { xs: 1.5, sm: 1.75, md: 2 },
                          fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' },
                        }}
                      >
                        Country
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          color: skyBlueDark,
                          py: { xs: 1.5, sm: 1.75, md: 2 },
                          fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' },
                        }}
                      >
                        Active
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          color: skyBlueDark,
                          py: { xs: 1.5, sm: 1.75, md: 2 },
                          fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' },
                        }}
                      >
                        Inventory
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          color: skyBlueDark,
                          py: { xs: 1.5, sm: 1.75, md: 2 },
                          fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' },
                        }}
                      >
                        Ships
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          color: skyBlueDark,
                          py: { xs: 1.5, sm: 1.75, md: 2 },
                          fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' },
                        }}
                      >
                        Online
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow sx={{ '&:hover': { bgcolor: alpha(skyBlueLight, 0.5) } }}>
                      <TableCell sx={{ py: { xs: 1.5, sm: 1.75, md: 2 } }}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <StoreIcon fontSize="small" sx={{ color: skyBlue }} />
                          <Typography
                            fontWeight="500"
                            sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' } }}
                          >
                            Shop location
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ py: { xs: 1.5, sm: 1.75, md: 2 } }}>
                        <Chip
                          label="CA"
                          size="small"
                          sx={{
                            bgcolor: alpha(skyBlue, 0.1),
                            color: skyBlueDark,
                            fontWeight: 500,
                            fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ py: { xs: 1.5, sm: 1.75, md: 2 } }}>
                        <CheckCircleIcon
                          sx={{ color: skyBlue, fontSize: { xs: '1rem', sm: '1.25rem' } }}
                        />
                      </TableCell>
                      <TableCell sx={{ py: { xs: 1.5, sm: 1.75, md: 2 } }}>
                        <CheckCircleIcon
                          sx={{ color: skyBlue, fontSize: { xs: '1rem', sm: '1.25rem' } }}
                        />
                      </TableCell>
                      <TableCell sx={{ py: { xs: 1.5, sm: 1.75, md: 2 } }}>
                        <CheckCircleIcon
                          sx={{ color: skyBlue, fontSize: { xs: '1rem', sm: '1.25rem' } }}
                        />
                      </TableCell>
                      <TableCell sx={{ py: { xs: 1.5, sm: 1.75, md: 2 } }}>
                        <CheckCircleIcon
                          sx={{ color: skyBlue, fontSize: { xs: '1rem', sm: '1.25rem' } }}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            )}

            {/* Card view for mobile */}
            {isMobile && (
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: midGray,
                  overflow: 'hidden',
                }}
              >
                <Box sx={{ bgcolor: lightGray, py: 1.5, px: 2 }}>
                  <Typography fontWeight="600" color={skyBlueDark} fontSize="0.85rem">
                    Shop location
                  </Typography>
                </Box>
                <Box sx={{ p: 2 }}>
                  <Grid container spacing={1.5}>
                    <Grid item xs={6}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <PublicIcon
                          fontSize="small"
                          sx={{ color: 'text.secondary', fontSize: '0.875rem' }}
                        />
                        <Typography fontSize="0.75rem" color="text.secondary">
                          Country:
                        </Typography>
                      </Stack>
                      <Typography fontSize="0.8rem" fontWeight="500" sx={{ mt: 0.5, ml: 2 }}>
                        <Chip
                          label="CA"
                          size="small"
                          sx={{
                            bgcolor: alpha(skyBlue, 0.1),
                            color: skyBlueDark,
                            fontWeight: 500,
                            fontSize: '0.7rem',
                            height: '22px',
                          }}
                        />
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <CheckCircleIcon
                          fontSize="small"
                          sx={{ color: 'text.secondary', fontSize: '0.875rem' }}
                        />
                        <Typography fontSize="0.75rem" color="text.secondary">
                          Active:
                        </Typography>
                      </Stack>
                      <Typography fontSize="0.8rem" fontWeight="500" sx={{ mt: 0.5, ml: 2 }}>
                        <CheckCircleIcon sx={{ color: skyBlue, fontSize: '1rem' }} />
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <LayersIcon
                          fontSize="small"
                          sx={{ color: 'text.secondary', fontSize: '0.875rem' }}
                        />
                        <Typography fontSize="0.75rem" color="text.secondary">
                          Inventory:
                        </Typography>
                      </Stack>
                      <Typography fontSize="0.8rem" fontWeight="500" sx={{ mt: 0.5, ml: 2 }}>
                        <CheckCircleIcon sx={{ color: skyBlue, fontSize: '1rem' }} />
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <LocalShippingIcon
                          fontSize="small"
                          sx={{ color: 'text.secondary', fontSize: '0.875rem' }}
                        />
                        <Typography fontSize="0.75rem" color="text.secondary">
                          Ships:
                        </Typography>
                      </Stack>
                      <Typography fontSize="0.8rem" fontWeight="500" sx={{ mt: 0.5, ml: 2 }}>
                        <CheckCircleIcon sx={{ color: skyBlue, fontSize: '1rem' }} />
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <LanguageIcon
                          fontSize="small"
                          sx={{ color: 'text.secondary', fontSize: '0.875rem' }}
                        />
                        <Typography fontSize="0.75rem" color="text.secondary">
                          Online:
                        </Typography>
                      </Stack>
                      <Typography fontSize="0.8rem" fontWeight="500" sx={{ mt: 0.5, ml: 2 }}>
                        <CheckCircleIcon sx={{ color: skyBlue, fontSize: '1rem' }} />
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            )}
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
