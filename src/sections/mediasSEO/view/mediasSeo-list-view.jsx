import { useState, useCallback } from 'react';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';

import { isAfter, isBetween } from 'src/utils/format-time';

import { _orders, ORDER_STATUS_OPTIONS } from 'src/_mock';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { useSnackbar } from 'src/components/snackbar';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import {
  useTable,
  emptyRows,
  TableNoData,
  getComparator,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from 'src/components/table';

import MediasSeoTableRow from '../mediasSeo-table-row.jsx';
import MediasSeoTableToolbar from '../mediasSeo-table-toolbar.jsx';
import MediasSeoTableFiltersResult from '../mediasSeo-table-filters-result.jsx';
import { Grid } from '@mui/material';
import AnalyticsWidgetSummary from '../../overview/analytics/analytics-widget-summary.jsx';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VariantListView from '../../variant/view/variant-list-view.jsx';
import InventorysListView from '../../inventorys/view/inventorys-list-view.jsx';

const mediaSeoRows = [
  {
    id: 74,
    productName: 'THE COLLECTION SNOWBOARD',
    image: 'https://api-prod-minimal-v700.pages.dev/assets/images/m-product/product-2.webp',
    currentAltText: 'Snowboard with Blue Mount...',
    suggestedAltText: 'Blue Mountain Snowboard',
    suggestedDescription: 'Explore the slopes with the Blue Mountain...',
    action: 'None',
  },
  {
    id: 75,
    productName: 'THE MULTI-MANAGED SNOWBOARD',
    image: 'https://api-prod-minimal-v700.pages.dev/assets/images/m-product/product-2.webp',
    currentAltText: 'SusTern Acme Snowboard...',
    suggestedAltText: 'Pink & Yellow Graphic Snowboard',
    suggestedDescription: 'Explore the SusTern Acme...',
    action: 'None',
  },
  {
    id: 76,
    productName: 'FROSTBITE RIDER',
    image: 'https://api-prod-minimal-v700.pages.dev/assets/images/m-product/product-2.webp',
    currentAltText: 'Ride through the frost...',
    suggestedAltText: 'Frostbite Snowboard',
    suggestedDescription: 'Conquer the cold with the Frostbite Rider...',
    action: 'Apply',
  },
  {
    id: 77,
    productName: 'URBAN GLIDER',
    image: 'https://api-prod-minimal-v700.pages.dev/assets/images/m-product/product-2.webp',
    currentAltText: 'City style glider...',
    suggestedAltText: 'Urban Street Snowboard',
    suggestedDescription: 'Ride the streets with the Urban Glider...',
    action: 'None',
  },
  {
    id: 78,
    productName: 'POLAR BLAST',
    image: 'https://api-prod-minimal-v700.pages.dev/assets/images/m-product/product-2.webp',
    currentAltText: 'Blast the slopes...',
    suggestedAltText: 'Polar Blast Snowboard',
    suggestedDescription: 'Hit the snow hard with the Polar Blast...',
    action: 'Apply',
  },
  {
    id: 79,
    productName: 'MIDNIGHT SLIDER',
    image: 'https://api-prod-minimal-v700.pages.dev/assets/images/m-product/product-2.webp',
    currentAltText: 'Dark style board...',
    suggestedAltText: 'Midnight Edition Snowboard',
    suggestedDescription: 'Slide smooth with Midnight style...',
    action: 'None',
  },
  {
    id: 80,
    productName: 'SUNSET STRIKER',
    image: 'https://api-prod-minimal-v700.pages.dev/assets/images/m-product/product-2.webp',
    currentAltText: 'Ride into the sunset...',
    suggestedAltText: 'Sunset Series Snowboard',
    suggestedDescription: 'Make a statement on the slopes...',
    action: 'Apply',
  },
  {
    id: 81,
    productName: 'ECO CRUISER',
    image: 'https://api-prod-minimal-v700.pages.dev/assets/images/m-product/product-2.webp',
    currentAltText: 'Eco-friendly board...',
    suggestedAltText: 'Sustainable Snowboard',
    suggestedDescription: 'Cruise green with eco materials...',
    action: 'None',
  },
  {
    id: 82,
    productName: 'ICE BREAKER',
    image: 'https://api-prod-minimal-v700.pages.dev/assets/images/m-product/product-2.webp',
    currentAltText: 'Crack through the snow...',
    suggestedAltText: 'Ice Breaker Pro',
    suggestedDescription: 'Break boundaries on the ice...',
    action: 'Apply',
  },
  {
    id: 83,
    productName: 'WILDFIRE EDGE',
    image: 'https://api-prod-minimal-v700.pages.dev/assets/images/m-product/product-2.webp',
    currentAltText: 'Edge with power...',
    suggestedAltText: 'Wildfire Snowboard',
    suggestedDescription: 'Turn up the heat on cold days...',
    action: 'None',
  },
  {
    id: 84,
    productName: 'OCEAN BLUES',
    image: 'https://api-prod-minimal-v700.pages.dev/assets/images/m-product/product-2.webp',
    currentAltText: 'Flow like the ocean...',
    suggestedAltText: 'Blue Wave Snowboard',
    suggestedDescription: 'Surf the snow with blue vibes...',
    action: 'Apply',
  },
  {
    id: 85,
    productName: 'CRIMSON DIVE',
    image: 'https://api-prod-minimal-v700.pages.dev/assets/images/m-product/product-2.webp',
    currentAltText: 'Deep red board...',
    suggestedAltText: 'Crimson Flame Snowboard',
    suggestedDescription: 'Burn bright with Crimson style...',
    action: 'None',
  },
  {
    id: 86,
    productName: 'STEALTH RIDER',
    image: 'https://api-prod-minimal-v700.pages.dev/assets/images/m-product/product-2.webp',
    currentAltText: 'Silent and smooth...',
    suggestedAltText: 'Stealth Mode Board',
    suggestedDescription: 'Ride undetected with sleek design...',
    action: 'Apply',
  },
  {
    id: 87,
    productName: 'ARCTIC ZONE',
    image: 'https://api-prod-minimal-v700.pages.dev/assets/images/m-product/product-2.webp',
    currentAltText: 'Cold like ice...',
    suggestedAltText: 'Arctic Explorer Board',
    suggestedDescription: 'Master the chill with Arctic gear...',
    action: 'None',
  },
];



// ----------------------------------------------------------------------

const STATUS_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'High', label: 'High' },
  {
    value: 'Medium',
    label: 'Medium',
  },
  { value: 'Low', label: 'Low' },
];

const TABLE_HEAD = [
  { id: 'orderNumber', label: 'ID' },
  { id: 'name', label: 'ProductName' },
  { id: 'img', label: 'Image' },
  { id: 'status', label: 'CurrentAltText' },
  { id: 'type', label: 'SuggestedAltText' },
  { id: 'category', label: 'SuggestedDescription' },
  { id: 'variants', label: 'ChangeRationale' },
  { id: 'action', label: 'Action' },
];

const defaultFilters = {
  name: '',
  priority: 'all',
};

// ----------------------------------------------------------------------

export default function MediasSeoListView() {
  const { enqueueSnackbar } = useSnackbar();

  const table = useTable({ defaultOrderBy: 'orderNumber' });

  const settings = useSettingsContext();

  const router = useRouter();

  const confirm = useBoolean();

  const [tableData, setTableData] = useState(mediaSeoRows);

  const [filters, setFilters] = useState(defaultFilters);

  const dateError = isAfter(filters.startDate, filters.endDate);

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(table.order, table.orderBy),
    filters,
    dateError,
  });

  const dataInPage = dataFiltered.slice(
    table.page * table.rowsPerPage,
    table.page * table.rowsPerPage + table.rowsPerPage
  );

  const denseHeight = table.dense ? 56 : 56 + 20;

  const canReset = !!filters.name || filters.priority !== 'all';

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const handleFilters = useCallback(
    (name, value) => {
      table.onResetPage();
      setFilters((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [table]
  );

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const handleDeleteRow = useCallback(
    (id) => {
      const deleteRow = tableData.filter((row) => row.id !== id);

      enqueueSnackbar('Delete success!');

      setTableData(deleteRow);

      table.onUpdatePageDeleteRow(dataInPage.length);
    },
    [dataInPage.length, enqueueSnackbar, table, tableData]
  );

  const handleDeleteRows = useCallback(() => {
    const deleteRows = tableData.filter((row) => !table.selected.includes(row.id));

    enqueueSnackbar('Delete success!');

    setTableData(deleteRows);

    table.onUpdatePageDeleteRows({
      totalRowsInPage: dataInPage.length,
      totalRowsFiltered: dataFiltered.length,
    });
  }, [dataFiltered.length, dataInPage.length, enqueueSnackbar, table, tableData]);

  const handleViewRow = useCallback(
    (id) => {
      router.push(paths.dashboard.order.details(id));
    },
    [router]
  );

  const handleFilterStatus = useCallback(
    (event, newValue) => {
      handleFilters('priority', newValue);
    },
    [handleFilters]
  );

  return (
    <>
      <Container maxWidth={settings.themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Product SEO"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            { name: 'User', href: paths.dashboard.user.root },
            { name: 'Product SEO' },
          ]}
          sx={{ mb: { xs: 3, md: 5 } }}
        />

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

        <Card sx={{ mt: 4 }}>
          <MediasSeoTableToolbar
            filters={filters}
            onFilters={handleFilters}
            //
            dateError={dateError}
          />

          {canReset && (
            <MediasSeoTableFiltersResult
              filters={filters}
              onFilters={handleFilters}
              //
              onResetFilters={handleResetFilters}
              //
              results={dataFiltered.length}
              sx={{ p: 2.5, pt: 0 }}
            />
          )}

          <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
            <TableSelectedAction
              dense={table.dense}
              numSelected={table.selected.length}
              rowCount={dataFiltered.length}
              onSelectAllRows={(checked) =>
                table.onSelectAllRows(
                  checked,
                  dataFiltered.map((row) => row.id)
                )
              }
              action={
                <Tooltip title="Delete">
                  <IconButton color="primary" onClick={confirm.onTrue}>
                    <Iconify icon="solar:trash-bin-trash-bold" />
                  </IconButton>
                </Tooltip>
              }
            />

            <Scrollbar>
              <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
                <TableHeadCustom
                  order={table.order}
                  orderBy={table.orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={dataFiltered.length}
                  numSelected={table.selected.length}
                  onSort={table.onSort}
                />

                <TableBody>
                  {dataFiltered
                    .slice(
                      table.page * table.rowsPerPage,
                      table.page * table.rowsPerPage + table.rowsPerPage
                    )
                    .map((row) => (
                      <MediasSeoTableRow
                        key={row.id}
                        row={row}
                        selected={table.selected.includes(row.id)}
                        onSelectRow={() => table.onSelectRow(row.id)}
                        onDeleteRow={() => handleDeleteRow(row.id)}
                        onViewRow={() => handleViewRow(row.id)}
                      />
                    ))}

                  <TableEmptyRows
                    height={denseHeight}
                    emptyRows={emptyRows(table.page, table.rowsPerPage, dataFiltered.length)}
                  />

                  <TableNoData notFound={notFound} />
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>

          <TablePaginationCustom
            count={dataFiltered.length}
            page={table.page}
            rowsPerPage={table.rowsPerPage}
            onPageChange={table.onChangePage}
            onRowsPerPageChange={table.onChangeRowsPerPage}
            //
            dense={table.dense}
            onChangeDense={table.onChangeDense}
          />
        </Card>
      </Container>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content={
          <>
            Are you sure want to delete <strong> {table.selected.length} </strong> items?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteRows();
              confirm.onFalse();
            }}
          >
            Delete
          </Button>
        }
      />
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter({ inputData, comparator, filters, dateError }) {
  const { priority, name } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const item = comparator(a[0], b[0]);
    if (item !== 0) return item;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (name) {
    inputData = inputData.filter(
      (item) => item.productName.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }

  if (priority !== 'all') {
    inputData = inputData.filter((item) => item.priority === priority);
  }

  return inputData;
}
