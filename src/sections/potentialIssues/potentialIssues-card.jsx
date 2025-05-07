import {
  Card,
  Typography,
  Box,
  Grid,
  Stack,
  Tabs,
  Tab,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
} from '@mui/material';
import { useState } from 'react';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Chip from '@mui/material/Chip';
import AnalyticsWidgetSummary from '../overview/analytics/analytics-widget-summary.jsx';
import Label from 'src/components/label';
import { alpha } from '@mui/material/styles';

const issues = [
  {
    id: 1,
    issue: 'Seasonal Demand Fluctuations Ignored',
    description:
      'The consistent monitoring of snowboard inventory in May suggests an anticipation of sales, yet the lack of inventory for items like "THE 3P FULFILLED SNOWBOARD" and low levels for others could mean lost sales. Failing to prepare for seasonal demand spikes (especially winter) could lead to recurring stockouts and lost revenue.',
    priority: 'High',
    recommendation:
      'Implement a seasonal demand forecasting model to predict peak sales periods and proactively adjust inventory levels. Review historical sales data to identify trends and patterns. Communicate with suppliers well in advance of peak seasons to ensure timely deliveries.',
  },
  {
    id: 2,
    issue: 'Zero incoming shipments across all products',
    description:
      'All products listed in the provided data have 0 units of incoming shipments. This could indicate a pause in ordering new stock or a potential disruption in the supply chain. This can be particularly damaging as many of the items have low stock.',
    priority: 'High',
    recommendation:
      'Confirm orders with suppliers to clarify the expected delivery dates. Communicate with suppliers to understand any delays or disruptions to the supply chain. Implement a system to forecast and order products appropriately.',
  },
  {
    id: 3,
    issue: 'Seasonality of Snowboard Sales',
    description:
      'The data includes inventory levels in May 2025 and November 2024. Snowboard sales are likely highly seasonal, with peak demand during winter months. Holding high inventory levels of snowboards in May (off-season) could lead to increased storage costs and potential obsolescence. This needs monitoring to optimize stock.',
    priority: 'High',
    recommendation:
      'Develop a seasonal inventory management strategy to reduce stock levels during the off-season and increase them proactively before the peak season. Leverage historical sales data to forecast demand and adjust production/procurement plans accordingly. Implement promotional campaigns to increase turnover during off-season.',
  },
];
const STATUS_OPTIONS = [{ value: 'all', label: 'All' },{ value: 'High', label: 'High' },{ value: 'Medium', label: 'Medium' },{ value: 'Low', label: 'Low' },];

export default function PotentialIssuesCard() {
  const [tab, setTab] = useState(0);
  const [filter, setFilter] = useState('');

  const filteredIssues = issues.filter(
    (item) =>
      item.issue.toLowerCase().includes(filter.toLowerCase()) ||
      item.description.toLowerCase().includes(filter.toLowerCase()) ||
      item.recommendation.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Grid container spacing={3}>
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
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Medium Priority"
            total={8}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Low Priority"
            total={3}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>
      </Grid>

      <Card sx={{ p: 2, mt:6 }}>
        <Typography variant="h6" gutterBottom>
          Issues & Recommendations
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Let&apos;s take a look at these issues! Upon selecting the &apos;Track&apos; button, a
          list of monitored issues will be displayed under the &apos;Tracked Issues&apos; tab.
        </Typography>

        <Box my={2}>
          <TextField fullWidth size="small" placeholder="Filter table..." />
          <Tabs
            // value={filters.status}
            // onChange={handleFilterStatus}
            sx={{
              px: 2.5,
              boxShadow: (theme) => `inset 0 -2px 0 0 ${alpha(theme.palette.grey[500], 0.08)}`,
            }}
          >
            {STATUS_OPTIONS?.map((tab) => (
              <Tab
                key={tab.value}
                iconPosition="end"
                value={tab.value}
                label={tab.label}
                icon={
                  <Label
                    variant={
                      ((tab.value === 'all') && 'filled') || 'soft'
                    }
                    color={
                      (tab.value === 'High' && 'error') ||
                      (tab.value === 'Medium' && 'warning') ||
                      (tab.value === 'Low' && 'info') ||
                      'default'
                    }
                  >
                    {/*{['active', 'pending', 'banned', 'rejected'].includes(tab.value)*/}
                    {/*  ? tableData.filter((user) => user.status === tab.value).length*/}
                    {/*  : tableData.length}*/}10
                  </Label>
                }
              />
            ))}
          </Tabs>
        </Box>

        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Issue</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Recommendation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {issues?.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell sx={{ maxWidth: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{row.id}</TableCell>
                  <TableCell sx={{ maxWidth: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{row.issue}</TableCell>
                  <TableCell sx={{ maxWidth: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{row.description}</TableCell>
                  <TableCell sx={{ maxWidth: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    <Chip
                      icon={<ReportProblemIcon fontSize="small" />}
                      label="High"
                      color="error"
                      size="small"
                    />
                  </TableCell>
                  <TableCell sx={{ maxWidth: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{row.recommendation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
}
