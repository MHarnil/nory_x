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

import ShopsSeoTableRow from '../shopsSeo-table-row.jsx';
import ShopsSeoTableToolbar from '../shopsSeo-table-toolbar.jsx';
import ShopsSeoTableFiltersResult from '../shopsSeo-table-filters-result.jsx';
import { Grid } from '@mui/material';
import AnalyticsWidgetSummary from '../../overview/analytics/analytics-widget-summary.jsx';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VariantListView from '../../variant/view/variant-list-view.jsx';
import InventorysListView from '../../inventorys/view/inventorys-list-view.jsx';

const seoRows = [
  {
    id: 61,
    currentTitle: '-',
    currentDescription: '-',
    suggestedFocus: 'RED SNOWBOARD Canada',
    suggestedTitle: 'RED SNOWBOARD -Canada',
    suggestedDescription: 'Get your RED SNOWBOARD today...',
    suggestedTags: '"RED SNOWBOARD", "snowboard"',
  },
  {
    id: 62,
    currentTitle: '-',
    currentDescription: '-',
    suggestedFocus: 'None',
    suggestedTitle: 'GREEN SNOWBOARD -Canada',
    suggestedDescription: 'Get your GREEN SNOWBOARD today...',
    suggestedTags: '"GREEN SNOWBOARD", "snowboard"',
  },
  {
    id: 63,
    currentTitle: 'THE COLLECTION SNOWBOARD...',
    currentDescription: 'Shop THE COLLECTION SNOWBOARD...',
    suggestedFocus: 'THE COLLECTION SNOWBOARD...',
    suggestedTitle: 'Liquid Snowboard - The Collection',
    suggestedDescription: 'Shop The Collection...',
    suggestedTags: '"Liquid Snowboard", "The..."',
  },
  {
    id: 64,
    currentTitle: '-',
    currentDescription: '-',
    suggestedFocus: 'BLUE SNOWBOARD Canada',
    suggestedTitle: 'BLUE SNOWBOARD -Canada',
    suggestedDescription: 'Find your perfect BLUE SNOWBOARD today...',
    suggestedTags: '"BLUE SNOWBOARD", "snowboard"',
  },
  {
    id: 65,
    currentTitle: '-',
    currentDescription: '-',
    suggestedFocus: 'None',
    suggestedTitle: 'YELLOW SNOWBOARD -Canada',
    suggestedDescription: 'Get your YELLOW SNOWBOARD today...',
    suggestedTags: '"YELLOW SNOWBOARD", "snowboard"',
  },
  {
    id: 66,
    currentTitle: '-',
    currentDescription: '-',
    suggestedFocus: 'BLACK SNOWBOARD Gear',
    suggestedTitle: 'BLACK SNOWBOARD - Canada',
    suggestedDescription: 'Black snowboards for performance...',
    suggestedTags: '"BLACK SNOWBOARD", "gear"',
  },
  {
    id: 67,
    currentTitle: '-',
    currentDescription: '-',
    suggestedFocus: 'WHITE SNOWBOARD Deals',
    suggestedTitle: 'WHITE SNOWBOARD - Best Offers',
    suggestedDescription: 'Buy WHITE SNOWBOARD with great deals...',
    suggestedTags: '"WHITE SNOWBOARD", "offers"',
  },
  {
    id: 68,
    currentTitle: '-',
    currentDescription: '-',
    suggestedFocus: 'SNOWBOARD PRO Canada',
    suggestedTitle: 'SNOWBOARD PRO - Canada Edition',
    suggestedDescription: 'Pro level snowboards in Canada...',
    suggestedTags: '"SNOWBOARD PRO", "pro gear"',
  },
  {
    id: 69,
    currentTitle: '-',
    currentDescription: '-',
    suggestedFocus: 'Beginner Snowboards',
    suggestedTitle: 'SNOWBOARD for Beginners - Start Here',
    suggestedDescription: 'Perfect beginner boards...',
    suggestedTags: '"beginner snowboard", "snowboard"',
  },
  {
    id: 70,
    currentTitle: '-',
    currentDescription: '-',
    suggestedFocus: 'SNOWBOARD BUNDLE Sale',
    suggestedTitle: 'SNOWBOARD BUNDLE - Save More',
    suggestedDescription: 'Bundles of gear at a discount...',
    suggestedTags: '"snowboard bundle", "gear"',
  },
  {
    id: 71,
    currentTitle: '-',
    currentDescription: '-',
    suggestedFocus: 'Urban SNOWBOARD Style',
    suggestedTitle: 'Urban SNOWBOARD - Street Ready',
    suggestedDescription: 'Ride urban slopes in style...',
    suggestedTags: '"urban snowboard", "style"',
  },
  {
    id: 72,
    currentTitle: '-',
    currentDescription: '-',
    suggestedFocus: 'Mountain Gear',
    suggestedTitle: 'MOUNTAIN SNOWBOARD - Rugged Gear',
    suggestedDescription: 'Tough boards for mountain slopes...',
    suggestedTags: '"mountain snowboard", "gear"',
  },
  {
    id: 73,
    currentTitle: '-',
    currentDescription: '-',
    suggestedFocus: 'Custom Made Snowboards',
    suggestedTitle: 'Custom SNOWBOARD - Your Style',
    suggestedDescription: 'Design your own snowboard...',
    suggestedTags: '"custom snowboard", "design"',
  },
  {
    id: 74,
    currentTitle: '-',
    currentDescription: '-',
    suggestedFocus: 'WOMEN SNOWBOARD Gear',
    suggestedTitle: 'Women’s SNOWBOARD - Fit & Flex',
    suggestedDescription: 'Boards for female riders...',
    suggestedTags: '"women snowboard", "gear"',
  },
  {
    id: 75,
    currentTitle: '-',
    currentDescription: '-',
    suggestedFocus: 'Kids Snowboards',
    suggestedTitle: 'KIDS SNOWBOARD - Safe & Fun',
    suggestedDescription: 'Snowboards designed for kids...',
    suggestedTags: '"kids snowboard", "safety"',
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
  { id: 'status', label: 'CurrentTitle' },
  { id: 'type', label: 'CurrentDescription' },
  { id: 'category', label: 'SuggestedFocus' },
  { id: 'category', label: 'SuggestedTitle' },
  { id: 'category', label: 'SuggestedDescription' },
  { id: 'category', label: 'SuggestedTags' },
  { id: 'variants', label: 'ChangeRationale' },
];

const defaultFilters = {
  name: '',
  priority: 'all',
};

// ----------------------------------------------------------------------

export default function ShopsSeoListView() {
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
          heading="Shop SEO"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            { name: 'User', href: paths.dashboard.user.root },
            { name: 'Shop SEO' },
          ]}
          sx={{ mb: { xs: 3, md: 5 } }}
        />

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <AnalyticsWidgetSummary
              title="SEO applied to Shop"
              total={1}
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AnalyticsWidgetSummary
              title="SEO suggestions for Shop"
              total={13}
              color="info"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AnalyticsWidgetSummary
              title="SEO action required for Shop"
              total={16}
              color="error"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
            />
          </Grid>
        </Grid>

        <Card sx={{ mt: 4 }}>
          <ShopsSeoTableToolbar
            filters={filters}
            onFilters={handleFilters}
            //
            dateError={dateError}
          />

          {canReset && (
            <ShopsSeoTableFiltersResult
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
                      <ShopsSeoTableRow
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
