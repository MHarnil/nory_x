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

import InventorysTableRow from '../inventorys-table-row.jsx';
import InventorysTableToolbar from '../inventorys-table-toolbar.jsx';
import InventorysTableFiltersResult from '../inventorys-table-filters-result.jsx';
import { Grid } from '@mui/material';
import AnalyticsWidgetSummary from '../../overview/analytics/analytics-widget-summary.jsx';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const inventoryData = [
  {
    id: 113,
    product: 'GREEN SNOWBOARD',
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
    id: 112,
    product: 'RED SNOWBOARD',
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
    id: 116,
    product: 'THE 3P FULFILLED SNOWBOARD',
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
    id: 119,
    product: 'THE COLLECTION SNOWBOARD: HYDROGEN',
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
    id: 118,
    product: 'THE MULTI-LOCATION SNOWBOARD',
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
    id: 114,
    product: 'THE COLLECTION SNOWBOARD: LIQUID',
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
    product: 'THE MULTI-MANAGED SNOWBOARD',
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
    id: 117,
    product: 'THE COLLECTION SNOWBOARD: OXYGEN',
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
    id: 120,
    product: 'THE COMPARE AT PRICE SNOWBOARD',
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
    product: 'THE COMPLETE SNOWBOARD - ICE',
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
  { id: 'product', label: 'Product' },
  { id: 'date', label: 'Date' },
  { id: 'available', label: 'Available' },
  { id: 'incoming', label: 'Incoming' },
  { id: 'committed', label: 'Committed' },
  { id: 'onHand', label: 'OnHand' },
  { id: 'damaged', label: 'Damaged' },
  { id: 'unit', label: 'Unit' },
  { id: 'sites', label: 'Sites' },
];

const defaultFilters = {
  name: '',
  priority: 'all',
};

// ----------------------------------------------------------------------

export default function InventorysListView() {
  const { enqueueSnackbar } = useSnackbar();

  const table = useTable({ defaultOrderBy: 'orderNumber' });

  const [tab, setTab] = useState(0);

  const settings = useSettingsContext();

  const router = useRouter();

  const confirm = useBoolean();

  const [tableData, setTableData] = useState(inventoryData);

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
          heading="Inventory"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            { name: 'User', href: paths.dashboard.user.root },
            { name: 'Inventory' },
          ]}
          sx={{ mb: { xs: 3, md: 5 } }}
        />

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

        <Card sx={{ mt: 4 }}>
          <Tabs value={tab} onChange={(e, newVal) => setTab(newVal)} sx={{ mb: 2,pl:3, pt:1 }}>
            <Tab label="Inventory" />
            <Tab label="Inventory Forecast" />
          </Tabs>

          {tab === 0 && (
            <>
              <InventorysTableToolbar
                filters={filters}
                onFilters={handleFilters}
                //
                dateError={dateError}
              />

              {canReset && (
                <InventorysTableFiltersResult
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
                          <InventorysTableRow
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

          {tab === 1 && (
            <>
              <InventorysTableToolbar
                filters={filters}
                onFilters={handleFilters}
                //
                dateError={dateError}
              />

              {canReset && (
                <InventorysTableFiltersResult
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
                          <InventorysTableRow
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
      (item) => item.product.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }

  if (priority !== 'all') {
    inputData = inputData.filter((item) => item.priority === priority);
  }

  return inputData;
}
