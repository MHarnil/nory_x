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

import BusinessInsightTableRow from '../businessInsight-table-row.jsx';
import BusinessInsightTableToolbar from '../businessInsight-table-toolbar.jsx';
import BusinessInsightTableFiltersResult from '../businessInsight-table-filters-result.jsx';
import { Grid } from '@mui/material';
import AnalyticsWidgetSummary from '../../overview/analytics/analytics-widget-summary.jsx';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const data = [
  {
    id: 1,
    category: 'Revenue Maximization',
    insight: 'Available data from week 18 of May 2025 shows a decline in accessory bundle sales.',
    strategy: 'Implement a "Complete the Set" promotion: Bundle accessories with main products.',
  },
  {
    id: 2,
    category: 'Revenue Maximization',
    insight: 'The product "THE 3P FULFILLED SNOWBOARD" is frequently out of stock.',
    strategy: 'Immediately investigate and restock "THE 3P FULFILLED SNOWBOARD" to meet demand.',
  },
  {
    id: 3,
    category: 'Revenue Maximization',
    insight: 'Many snowboards have high inventory levels. Targeted marketing is underutilized.',
    strategy: 'Run targeted advertising campaigns focusing on products with high inventory.',
  },
  {
    id: 4,
    category: 'Cost Minimization',
    insight: 'Several snowboards have high on-hand inventory, risking overstock costs.',
    strategy: 'Implement a tiered discount strategy to reduce on-hand inventory gradually.',
  },
  {
    id: 5,
    category: 'Operational Efficiency',
    insight: 'Warehouse pick time increased by 12% in the last quarter.',
    strategy: 'Optimize warehouse layout and retrain staff for improved picking efficiency.',
  },
  {
    id: 6,
    category: 'Revenue Maximization',
    insight: 'Customer reviews indicate a mismatch between product sizing and expectations.',
    strategy: 'Update product sizing charts and include more visual size guides on product pages.',
  },
  {
    id: 7,
    category: 'Customer Satisfaction',
    insight: 'Return rates for snow boots increased by 18% over the last two months.',
    strategy: 'Analyze reasons for returns and improve product description accuracy.',
  },
  {
    id: 8,
    category: 'Cost Minimization',
    insight: 'Shipping costs spiked due to inefficient carrier allocation.',
    strategy: 'Negotiate better contracts with carriers and optimize regional distribution.',
  },
  {
    id: 9,
    category: 'Inventory Optimization',
    insight: 'Multiple SKUs show zero sales in the last 6 months.',
    strategy: 'Consider phasing out low-performing SKUs to free up inventory space.',
  },
  {
    id: 10,
    category: 'Revenue Maximization',
    insight: 'Email campaigns have low open rates despite high subscriber counts.',
    strategy: 'Revise subject lines and segment the audience for personalized content.',
  },
  {
    id: 11,
    category: 'Revenue Maximization',
    insight: 'Upsell opportunities are not shown on product pages.',
    strategy: 'Add a “Frequently Bought Together” section to increase average order value.',
  },
  {
    id: 12,
    category: 'Customer Satisfaction',
    insight: 'Chat support response time exceeds industry average.',
    strategy: 'Implement chatbot support during peak hours to reduce wait time.',
  },
  {
    id: 13,
    category: 'Inventory Optimization',
    insight: 'Weekly stock audits reveal inconsistencies in reported vs. actual inventory.',
    strategy: 'Upgrade inventory management software and increase audit frequency.',
  },
  {
    id: 14,
    category: 'Cost Minimization',
    insight: 'Packaging waste contributes to rising disposal costs.',
    strategy: 'Switch to recyclable materials and reduce unnecessary packaging layers.',
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
  { id: 'name', label: 'Category' },
  { id: 'createdAt', label: 'Insight' },
  { id: 'totalQuantity', label: 'Strategy' },
];

const defaultFilters = {
  name: '',
  priority: 'all',
  category: '',
};

// ----------------------------------------------------------------------

export default function BusinessInsightListView() {
  const { enqueueSnackbar } = useSnackbar();

  const table = useTable({ defaultOrderBy: 'orderNumber' });

  const settings = useSettingsContext();

  const router = useRouter();

  const confirm = useBoolean();

  const [tableData, setTableData] = useState(data);

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

  const canReset = !!filters.name || filters.priority !== 'all' || filters.category !== '';

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
  const handleFilterCategory = (category) => {
    handleFilters('category', category)
  };
  console.log(filters,"hiy");
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

  // const handleFilterStatus = useCallback(
  //   (event, newValue) => {
  //     handleFilters('priority', newValue);
  //   },
  //   [handleFilters]
  // );

  return (
    <>
      <Container maxWidth={settings.themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Business Insights"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            { name: 'User', href: paths.dashboard.user.root },
            { name: 'Business Insights' },
          ]}
          sx={{ mb: { xs: 3, md: 5 } }}
        />

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary
              title="Insights"
              total={18}
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
              onClick={() => {
                handleFilterCategory('Insights');
              }}
              sx={{ cursor: 'pointer' }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary
              title="Revenue Maximization"
              total={6}
              color="info"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
              onClick={() => {
                handleFilterCategory('Revenue Maximization');
              }}
              sx={{ cursor: 'pointer' }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary
              title="Cost Minimization"
              total={6}
              color="warning"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
              onClick={() => {
                handleFilterCategory('Cost Minimization');
              }}
              sx={{ cursor: 'pointer' }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary
              title="Inventory Optimization"
              total={6}
              color="error"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
              onClick={() => {
                handleFilterCategory('Inventory Optimization');
              }}
              sx={{ cursor: 'pointer' }}
            />
          </Grid>
        </Grid>

        <Box sx={{ p: 2, mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Insights & Strategy
          </Typography>
          <Typography variant="body2" color="text-.secondary" gutterBottom>
            Here are some ways to enhance your business operations!
          </Typography>
        </Box>

        <Card>
          <BusinessInsightTableToolbar
            filters={filters}
            onFilters={handleFilters}
            //
            dateError={dateError}
          />

          {canReset && (
            <BusinessInsightTableFiltersResult
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
                      <BusinessInsightTableRow
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
  const { priority, name,category } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const item = comparator(a[0], b[0]);
    if (item !== 0) return item;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (name) {
    inputData = inputData.filter(
      (item) => item.category.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }

  if (priority !== 'all') {
    inputData = inputData.filter((item) => item.priority === priority);
  } if (category) {
    inputData = inputData.filter((item) => item.category === category);
  }

  return inputData;
}
