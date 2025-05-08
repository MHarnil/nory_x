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

import ProductsTableRow from '../products-table-row.jsx';
import ProductsTableToolbar from '../products-table-toolbar.jsx';
import ProductsTableFiltersResult from '../products-table-filters-result.jsx';
import { Grid } from '@mui/material';
import AnalyticsWidgetSummary from '../../overview/analytics/analytics-widget-summary.jsx';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VariantListView from '../../variant/view/variant-list-view.jsx';
import InventorysListView from '../../inventorys/view/inventorys-list-view.jsx';

const products = [
  {
    id: 76,
    productName: 'GREEN SNOWBOARD',
    status: 'ACTIVE',
    type: 'NEW',
    category: '-',
    variants: 1,
  },
  {
    id: 75,
    productName: 'RED SNOWBOARD',
    status: 'ACTIVE',
    type: 'NEW',
    category: '-',
    variants: 1,
  },
  {
    id: 82,
    productName: 'THE COLLECTION SNOWBOARD: HYDROGEN',
    status: 'ACTIVE',
    type: 'NEW',
    category: '-',
    variants: 1,
  },
  {
    id: 77,
    productName: 'THE COLLECTION SNOWBOARD: LIQUID',
    status: 'ACTIVE',
    type: 'NEW',
    category: '-',
    variants: 1,
  },
  {
    id: 80,
    productName: 'THE COLLECTION SNOWBOARD: OXYGEN',
    status: 'ACTIVE',
    type: 'NEW',
    category: '-',
    variants: 1,
  },
  {
    id: 83,
    productName: 'THE COMPARE AT PRICE SNOWBOARD',
    status: 'ACTIVE',
    type: 'NEW',
    category: '-',
    variants: 1,
  },
  {
    id: 81,
    productName: 'THE MULTI-LOCATION SNOWBOARD',
    status: 'ACTIVE',
    type: 'NEW',
    category: '-',
    variants: 1,
  },
  {
    id: 78,
    productName: 'THE MULTI-MANAGED SNOWBOARD',
    status: 'ACTIVE',
    type: 'NEW',
    category: '-',
    variants: 1,
  },
  {
    id: 79,
    productName: 'THE 3P FULFILLED SNOWBOARD',
    status: 'ACTIVE',
    type: 'NEW',
    category: 'Snowboards',
    variants: 1,
  },
  {
    id: 84,
    productName: 'THE COMPLETE SNOWBOARD',
    status: 'ACTIVE',
    type: 'NEW',
    category: '-',
    variants: 5,
  },
  {
    id: 85,
    productName: 'BLACK SNOWBOARD',
    status: 'ACTIVE',
    type: 'NEW',
    category: '-',
    variants: 1,
  },
  {
    id: 86,
    productName: 'WHITE SNOWBOARD',
    status: 'ACTIVE',
    type: 'NEW',
    category: '-',
    variants: 2,
  },
  {
    id: 87,
    productName: 'SNOWBOARD PRO: ALPHA',
    status: 'ACTIVE',
    type: 'NEW',
    category: 'Snowboards',
    variants: 3,
  },
  {
    id: 88,
    productName: 'SNOWBOARD PRO: BETA',
    status: 'ACTIVE',
    type: 'NEW',
    category: '-',
    variants: 1,
  },
  {
    id: 89,
    productName: 'SNOWBOARD PRO: GAMMA',
    status: 'ACTIVE',
    type: 'NEW',
    category: '-',
    variants: 1,
  },
  {
    id: 90,
    productName: 'SNOWBOARD PRO: DELTA',
    status: 'ACTIVE',
    type: 'NEW',
    category: '-',
    variants: 1,
  },
  {
    id: 91,
    productName: 'LIMITED EDITION SNOWBOARD',
    status: 'ACTIVE',
    type: 'NEW',
    category: 'Snowboards',
    variants: 2,
  },
  {
    id: 92,
    productName: 'BASIC SNOWBOARD',
    status: 'ACTIVE',
    type: 'NEW',
    category: '-',
    variants: 1,
  },
  {
    id: 93,
    productName: 'URBAN SNOWBOARD',
    status: 'ACTIVE',
    type: 'NEW',
    category: '-',
    variants: 4,
  },
  {
    id: 94,
    productName: 'FREESTYLE SNOWBOARD',
    status: 'ACTIVE',
    type: 'NEW',
    category: '-',
    variants: 2,
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
  { id: 'status', label: 'Status' },
  { id: 'type', label: 'Type' },
  { id: 'category', label: 'Category' },
  { id: 'variants', label: 'Variants' },
];

const defaultFilters = {
  name: '',
  priority: 'all',
};

// ----------------------------------------------------------------------

export default function ProductsListView() {
  const { enqueueSnackbar } = useSnackbar();

  const table = useTable({ defaultOrderBy: 'orderNumber' });

  const settings = useSettingsContext();

  const router = useRouter();

  const confirm = useBoolean();

  const [tab, setTab] = useState(0);

  const [tableData, setTableData] = useState(products);

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
          heading="Products & Inventory"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            { name: 'User', href: paths.dashboard.user.root },
            { name: 'Products & Inventory' },
          ]}
          sx={{ mb: { xs: 3, md: 5 } }}
        />

        <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid item xs={12} sm={6} md={4}>
            <AnalyticsWidgetSummary
              title="18 products"
              total={16} // active
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AnalyticsWidgetSummary
              title="10 Variants"
              total={9} // for sale
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AnalyticsWidgetSummary
              title="10 items"
              total={3} // out of stoke
              color="warning"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
            />
          </Grid>
        </Grid>

        <Card sx={{ mt: 4 }}>
          <Tabs value={tab} onChange={(e, newVal) => setTab(newVal)} sx={{ mb: 2, pl: 3, pt: 1 }}>
            <Tab label="Products" />
            <Tab label="Variants" />
            <Tab label="Inventory" />
            <Tab label="Inventory Forecast" />
          </Tabs>

          {tab === 0 && (
            <>
              <ProductsTableToolbar
                filters={filters}
                onFilters={handleFilters}
                //
                dateError={dateError}
              />

              {canReset && (
                <ProductsTableFiltersResult
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
                          <ProductsTableRow
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
            </>
          )}

          {tab === 1 &&(
            <>
              <VariantListView/>
          </>
          )}
          {tab === 2 &&(
            <>
              <InventorysListView/>
            </>
          )}
          {tab === 3 &&(
            <>
              <InventorysListView/>
            </>
          )}
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
