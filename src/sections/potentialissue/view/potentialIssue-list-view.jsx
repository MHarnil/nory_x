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

import PotentialIssueTableRow from '../potentialIssue-table-row.jsx';
import PotentialIssueTableToolbar from '../potentialIssue-table-toolbar.jsx';
import PotentialIssueTableFiltersResult from '../potentialIssue-table-filters-result.jsx';
import { Grid } from '@mui/material';
import AnalyticsWidgetSummary from '../../overview/analytics/analytics-widget-summary.jsx';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const issuesData = [
  {
    id: 1,
    issue: 'Seasonal Demand Fluctuations Ignored',
    description: 'The consistent monitoring of snowboard sales demand was not implemented.',
    priority: 'High',
    recommendation:
      'Implement a seasonal demand forecasting model to better predict Implement Implement a seasonal demand forecasting model to better predict Implem Implement a seasonal demand forecasting model to better predict Implem a seasonal demand forecasting model to better predict  inventory needs.',
  },
  {
    id: 2,
    issue: 'Zero incoming shipments across all products',
    description: 'All products listed in the provided data show no incoming shipment records.',
    priority: 'High',
    recommendation:
      'Confirm orders with suppliers to clarify shipment timelines and avoid stockouts.',
  },
  {
    id: 3,
    issue: 'Seasonality of Snowboard Sales',
    description:
      'The data includes inventory levels in March despite snowboards selling primarily in winter.',
    priority: 'High',
    recommendation:
      'Develop a seasonal inventory management strategy to reduce off-season surplus.',
  },
  {
    id: 4,
    issue: 'Inaccurate Supplier Lead Times',
    description: 'Lead times from suppliers are not matching the actual delivery records.',
    priority: 'Medium',
    recommendation: 'Audit supplier performance and update lead time assumptions accordingly.',
  },
  {
    id: 5,
    issue: 'Overstock of Winter Gear',
    description:
      'Current stock levels of winter gear exceed forecasted demand for the next season.',
    priority: 'Medium',
    recommendation: 'Run clearance promotions or redirect inventory to outlets.',
  },
  {
    id: 6,
    issue: 'Missing Inventory Data',
    description: 'Several products have incomplete or missing inventory records in the system.',
    priority: 'High',
    recommendation: 'Conduct a full inventory audit and reconcile missing data.',
  },
  {
    id: 7,
    issue: 'Low Visibility into Supplier Capacity',
    description: 'Limited insight into supplier production capacity may delay order fulfillment.',
    priority: 'Low',
    recommendation: 'Establish regular supplier reporting on production capabilities.',
  },
  {
    id: 8,
    issue: 'Slow-moving SKUs Identified',
    description: 'Certain SKUs have not moved in over three months.',
    priority: 'Low',
    recommendation: 'Consider bundling or discounting slow-moving items.',
  },
  {
    id: 9,
    issue: 'Unbalanced Inventory Distribution',
    description:
      'Inventory is unevenly distributed across locations, causing stockouts in some and excess in others.',
    priority: 'Medium',
    recommendation: 'Optimize stock transfers to balance distribution across the network.',
  },
  {
    id: 10,
    issue: 'Inconsistent Product Categorization',
    description: 'Products are inconsistently categorized, impacting sales analytics accuracy.',
    priority: 'Low',
    recommendation: 'Standardize product taxonomy across all departments.',
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
  { id: 'name', label: 'Issue' },
  { id: 'createdAt', label: 'Description' },
  { id: 'totalQuantity', label: 'Priority' },
  { id: 'totalAmount', label: 'Recommendation' },
];

const defaultFilters = {
  name: '',
  priority: 'all',
};

// ----------------------------------------------------------------------

export default function PotentialIssueListView() {
  const { enqueueSnackbar } = useSnackbar();

  const table = useTable({ defaultOrderBy: 'orderNumber' });

  const settings = useSettingsContext();

  const router = useRouter();

  const confirm = useBoolean();

  const [tableData, setTableData] = useState(issuesData);

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
  const handleFilterPriority = (category) => {
    handleFilters('priority', category)
  };

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
          heading="Potential Issues"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            { name: 'User', href: paths.dashboard.user.root },
            { name: 'Potential Issues' },
          ]}
          sx={{ mb: { xs: 3, md: 5 } }}
        />

        <Grid container spacing={3} sx={{ mb: 8 }}>
          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary
              title="Recommendations"
              total={14}
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary
              title="High Priority"
              total={3}
              color="info"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
              onClick={()=>handleFilters('priority','High')}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary
              title="Medium Priority"
              total={8}
              color="warning"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
              onClick={()=>handleFilters('priority','Medium')}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary
              title="Low Priority"
              total={3}
              color="error"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
              onClick={()=>handleFilters('priority','Low')}
            />
          </Grid>
        </Grid>

        <Box sx={{ p: 2, mt:4 }}>
           <Typography variant="h6" gutterBottom>
             Issues & Recommendations
           </Typography>
           <Typography variant="body2" color="text.secondary" gutterBottom>
             Let&apos;s take a look at these issues! Upon selecting the &apos;Track&apos; button, a
             list of monitored issues will be displayed under the &apos;Tracked Issues&apos; tab.
           </Typography>
        </Box>

        <Card>
          <Tabs
            value={filters.priority}
            onChange={handleFilterStatus}
            sx={{
              px: 2.5,
              boxShadow: (theme) => `inset 0 -2px 0 0 ${alpha(theme.palette.grey[500], 0.08)}`,
            }}
          >
            {STATUS_OPTIONS.map((tab) => (
              <Tab
                key={tab.value}
                iconPosition="end"
                value={tab.value}
                label={tab.label}
                icon={
                  <Label
                    variant={
                      ((tab.value === 'all' || tab.value === filters.priority) && 'filled') ||
                      'soft'
                    }
                    color={
                      (tab.value === 'Medium' && 'success') ||
                      (tab.value === 'Low' && 'warning') ||
                      (tab.value === 'High' && 'error') ||
                      'default'
                    }
                  >
                    {['High', 'Medium', 'Low'].includes(tab.value)
                      ? tableData.filter((item) => item.priority === tab.value).length
                      : tableData.length}
                  </Label>
                }
              />
            ))}
          </Tabs>

          <PotentialIssueTableToolbar
            filters={filters}
            onFilters={handleFilters}
            //
            dateError={dateError}
          />

          {canReset && (
            <PotentialIssueTableFiltersResult
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
                      <PotentialIssueTableRow
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
      (item) => item.issue.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }

  if (priority !== 'all') {
    inputData = inputData.filter((item) => item.priority === priority);
  }

  return inputData;
}
