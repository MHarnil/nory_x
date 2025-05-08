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

import BlogContentTableRow from '../blogContent-table-row.jsx';
import BlogContentTableToolbar from '../blogContent-table-toolbar.jsx';
import BlogContentTableFiltersResult from '../blogContent-table-filters-result.jsx';
import { Grid } from '@mui/material';
import AnalyticsWidgetSummary from '../../overview/analytics/analytics-widget-summary.jsx';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const campaigns = [
  {
    id: 27,
    title: 'What to Pack for a Canadian Ski Adventure: Essentials & Extras',
    category: 'Gear & Equipment',
    contentDate: '2025-05-04',
    action: 'Upload',
  },
  {
    id: 28,
    title: 'Essential Gear Guide for Backcountry Skiing & Snowboarding in Canada',
    category: 'Backcountry Safety & Education',
    contentDate: '2025-05-03',
    action: 'None',
  },
  {
    id: 29,
    title: 'Top Winter Destinations in Canada for Snowboarders',
    category: 'Travel Guides',
    contentDate: '2025-05-04',
    action: 'Upload',
  },
  {
    id: 30,
    title: 'Snowboarding Gear: What You Need and Why It Matters',
    category: 'Gear & Equipment',
    contentDate: '2025-05-05',
    action: 'Upload',
  },
  {
    id: 31,
    title: 'Navigating Backcountry: Tips from Canadian Pros',
    category: 'Backcountry Safety & Education',
    contentDate: '2025-05-06',
    action: 'Upload',
  },
  {
    id: 32,
    title: 'Skiing for Beginners: A Step-by-Step Guide',
    category: 'Skills & Techniques',
    contentDate: '2025-05-07',
    action: 'None',
  },
  {
    id: 33,
    title: 'Exploring Winter Trails: Best Routes in Alberta',
    category: 'Travel & Adventure',
    contentDate: '2025-05-08',
    action: 'Upload',
  },
  {
    id: 34,
    title: 'How to Maintain Your Ski Equipment Through the Season',
    category: 'Gear Maintenance',
    contentDate: '2025-05-09',
    action: 'None',
  },
  {
    id: 35,
    title: 'Choosing the Right Snowboard: A Guide for Intermediate Riders',
    category: 'Gear & Equipment',
    contentDate: '2025-05-10',
    action: 'None',
  },
  {
    id: 36,
    title: 'The Science Behind Avalanche Transceivers',
    category: 'Safety Tech',
    contentDate: '2025-05-11',
    action: 'Upload',
  },
  {
    id: 37,
    title: 'Off-the-Grid Winter Adventures in the Yukon',
    category: 'Travel & Adventure',
    contentDate: '2025-05-12',
    action: 'None',
  },
  {
    id: 38,
    title: 'Understanding Snowpack: Reading Nature’s Avalanche Warning Signs',
    category: 'Backcountry Safety',
    contentDate: '2025-05-13',
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
  { id: 'title', label: 'Title' },
  { id: 'createdAt', label: 'Category' },
  { id: 'totalQuantity', label: 'ContentDate' },
  { id: 'preview', label: 'Preview' },
  { id: 'action', label: 'Action' },
];

const defaultFilters = {
  name: '',
  priority: 'all',
};

// ----------------------------------------------------------------------

export default function BlogContentListView() {
  const { enqueueSnackbar } = useSnackbar();

  const table = useTable({ defaultOrderBy: 'orderNumber' });

  const settings = useSettingsContext();

  const router = useRouter();

  const confirm = useBoolean();

  const [tableData, setTableData] = useState(campaigns);

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
          heading="Blog Content"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            { name: 'User', href: paths.dashboard.user.root },
            { name: 'Blog Content' },
          ]}
          sx={{ mb: { xs: 3, md: 5 } }}
        />

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <AnalyticsWidgetSummary
              title="Generated"
              total={15}
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AnalyticsWidgetSummary
              title="Uploaded"
              total={7}
              color="info"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AnalyticsWidgetSummary
              title="Time Saved (hrs)"
              total={15.7}
              color="warning"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
            />
          </Grid>
        </Grid>

        <Box sx={{ p: 2, mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Contextual Blogs
          </Typography>
        </Box>

        <Card>
          <BlogContentTableToolbar
            filters={filters}
            onFilters={handleFilters}
            //
            dateError={dateError}
          />

          {canReset && (
            <BlogContentTableFiltersResult
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
                      <BlogContentTableRow
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
      (item) => item.title.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }

  if (priority !== 'all') {
    inputData = inputData.filter((item) => item.priority === priority);
  }

  return inputData;
}
