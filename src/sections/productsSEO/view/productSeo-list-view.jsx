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

import ProductSeoTableRow from '../productSeo-table-row.jsx';
import ProductSeoTableToolbar from '../productSeo-table-toolbar.jsx';
import ProductSeoTableFiltersResult from '../productSeo-table-filters-result.jsx';
import { Grid } from '@mui/material';
import AnalyticsWidgetSummary from '../../overview/analytics/analytics-widget-summary.jsx';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VariantListView from '../../variant/view/variant-list-view.jsx';
import InventorysListView from '../../inventorys/view/inventorys-list-view.jsx';

const seoRows = [
  {
    id: 61,
    productName: 'RED SNOWBOARD',
    CurrentTitle: '-',
    CurrentDescription: '-',
    SuggestedFocus: 'RED SNOWBOARD Canada',
    SuggestedTitle: 'RED SNOWBOARD -Canada',
    SuggestedDescription: 'Get your RED SNOWBOARD today...',
    SuggestedTags: '"RED SNOWBOARD", "snowboard"',
    SEOHealth: 'average',
  },
  {
    id: 62,
    productName: 'GREEN SNOWBOARD',
    CurrentTitle: '-',
    CurrentDescription: '-',
    SuggestedFocus: 'None',
    SuggestedTitle: 'GREEN SNOWBOARD -Canada',
    SuggestedDescription: 'Get your GREEN SNOWBOARD today...',
    SuggestedTags: '"GREEN SNOWBOARD", "snowboard"',
    SEOHealth: 'average',
  },
  {
    id: 63,
    productName: 'THE COLLECTION SNOWBOARD',
    CurrentTitle: 'THE COLLECTION SNOWBOARD...',
    CurrentDescription: 'Shop THE COLLECTION SNOWBOARD...',
    SuggestedFocus: 'THE COLLECTION SNOWBOARD...',
    SuggestedTitle: 'Liquid Snowboard - The Collection',
    SuggestedDescription: 'Shop The Collection...',
    SuggestedTags: '"Liquid Snowboard", "The..."',
    SEOHealth: 'average',
  },
  {
    id: 64,
    productName: 'BLUE SNOWBOARD',
    CurrentTitle: '-',
    CurrentDescription: '-',
    SuggestedFocus: 'BLUE SNOWBOARD Canada',
    SuggestedTitle: 'BLUE SNOWBOARD -Canada',
    SuggestedDescription: 'Find your perfect BLUE SNOWBOARD today...',
    SuggestedTags: '"BLUE SNOWBOARD", "snowboard"',
    SEOHealth: 'good',
  },
  {
    id: 65,
    productName: 'YELLOW SNOWBOARD',
    CurrentTitle: '-',
    CurrentDescription: '-',
    SuggestedFocus: 'None',
    SuggestedTitle: 'YELLOW SNOWBOARD -Canada',
    SuggestedDescription: 'Get your YELLOW SNOWBOARD today...',
    SuggestedTags: '"YELLOW SNOWBOARD", "snowboard"',
    SEOHealth: 'average',
  },
  {
    id: 66,
    productName: 'BLACK SNOWBOARD',
    CurrentTitle: '-',
    CurrentDescription: '-',
    SuggestedFocus: 'BLACK SNOWBOARD Gear',
    SuggestedTitle: 'BLACK SNOWBOARD - Canada',
    SuggestedDescription: 'Black snowboards for performance...',
    SuggestedTags: '"BLACK SNOWBOARD", "gear"',
    SEOHealth: 'average',
  },
  {
    id: 67,
    productName: 'WHITE SNOWBOARD',
    CurrentTitle: '-',
    CurrentDescription: '-',
    SuggestedFocus: 'WHITE SNOWBOARD Deals',
    SuggestedTitle: 'WHITE SNOWBOARD - Best Offers',
    SuggestedDescription: 'Buy WHITE SNOWBOARD with great deals...',
    SuggestedTags: '"WHITE SNOWBOARD", "offers"',
    SEOHealth: 'average',
  },
  {
    id: 68,
    productName: 'SNOWBOARD PRO',
    CurrentTitle: '-',
    CurrentDescription: '-',
    SuggestedFocus: 'SNOWBOARD PRO Canada',
    SuggestedTitle: 'SNOWBOARD PRO - Canada Edition',
    SuggestedDescription: 'Pro level snowboards in Canada...',
    SuggestedTags: '"SNOWBOARD PRO", "pro gear"',
    SEOHealth: 'average',
  },
  {
    id: 69,
    productName: 'SNOWBOARD BEGINNER',
    CurrentTitle: '-',
    CurrentDescription: '-',
    SuggestedFocus: 'Beginner Snowboards',
    SuggestedTitle: 'SNOWBOARD for Beginners - Start Here',
    SuggestedDescription: 'Perfect beginner boards...',
    SuggestedTags: '"beginner snowboard", "snowboard"',
    SEOHealth: 'average',
  },
  {
    id: 70,
    productName: 'SNOWBOARD BUNDLE',
    CurrentTitle: '-',
    CurrentDescription: '-',
    SuggestedFocus: 'SNOWBOARD BUNDLE Sale',
    SuggestedTitle: 'SNOWBOARD BUNDLE - Save More',
    SuggestedDescription: 'Bundles of gear at a discount...',
    SuggestedTags: '"snowboard bundle", "gear"',
    SEOHealth: 'average',
  },
  {
    id: 71,
    productName: 'URBAN SNOWBOARD',
    CurrentTitle: '-',
    CurrentDescription: '-',
    SuggestedFocus: 'Urban SNOWBOARD Style',
    SuggestedTitle: 'Urban SNOWBOARD - Street Ready',
    SuggestedDescription: 'Ride urban slopes in style...',
    SuggestedTags: '"urban snowboard", "style"',
    SEOHealth: 'average',
  },
  {
    id: 72,
    productName: 'MOUNTAIN SNOWBOARD',
    CurrentTitle: '-',
    CurrentDescription: '-',
    SuggestedFocus: 'Mountain Gear',
    SuggestedTitle: 'MOUNTAIN SNOWBOARD - Rugged Gear',
    SuggestedDescription: 'Tough boards for mountain slopes...',
    SuggestedTags: '"mountain snowboard", "gear"',
    SEOHealth: 'average',
  },
  {
    id: 73,
    productName: 'CUSTOM SNOWBOARD',
    CurrentTitle: '-',
    CurrentDescription: '-',
    SuggestedFocus: 'Custom Made Snowboards',
    SuggestedTitle: 'Custom SNOWBOARD - Your Style',
    SuggestedDescription: 'Design your own snowboard...',
    SuggestedTags: '"custom snowboard", "design"',
    SEOHealth: 'average',
  },
  {
    id: 74,
    productName: 'WOMEN SNOWBOARD',
    CurrentTitle: '-',
    CurrentDescription: '-',
    SuggestedFocus: 'WOMEN SNOWBOARD Gear',
    SuggestedTitle: 'Women’s SNOWBOARD - Fit & Flex',
    SuggestedDescription: 'Boards for female riders...',
    SuggestedTags: '"women snowboard", "gear"',
    SEOHealth: 'average',
  },
  {
    id: 75,
    productName: 'KIDS SNOWBOARD',
    CurrentTitle: '-',
    CurrentDescription: '-',
    SuggestedFocus: 'Kids Snowboards',
    SuggestedTitle: 'KIDS SNOWBOARD - Safe & Fun',
    SuggestedDescription: 'Snowboards designed for kids...',
    SuggestedTags: '"kids snowboard", "safety"',
    SEOHealth: 'average',
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
  { id: 'status', label: 'CurrentTitle' },
  { id: 'type', label: 'CurrentDescription' },
  { id: 'category', label: 'SuggestedFocus' },
  { id: 'category', label: 'SuggestedTitle' },
  { id: 'category', label: 'SuggestedDescription' },
  { id: 'category', label: 'SuggestedTags' },
  { id: 'variants', label: 'SEOHealth' },
  { id: 'variants', label: 'ChangeRationale' },
  { id: 'variants', label: 'Action' },
];

const defaultFilters = {
  name: '',
  priority: 'all',
};

// ----------------------------------------------------------------------

export default function ProductSeoListView() {
  const { enqueueSnackbar } = useSnackbar();

  const table = useTable({ defaultOrderBy: 'orderNumber' });

  const settings = useSettingsContext();

  const router = useRouter();

  const confirm = useBoolean();

  const [tableData, setTableData] = useState(seoRows);

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
          <ProductSeoTableToolbar
            filters={filters}
            onFilters={handleFilters}
            //
            dateError={dateError}
          />

          {canReset && (
            <ProductSeoTableFiltersResult
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
                      <ProductSeoTableRow
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
