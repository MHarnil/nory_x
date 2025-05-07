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
import AnalyticsWidgetSummary from '../overview/analytics/analytics-widget-summary.jsx';


const insights = [
  {
    id: 1,
    category: 'Revenue Maximization',
    insight:
      'Available data from week 18 of May 2025 shows several snowboard products with significant on-hand inventory at the Shop location. There is an opportunity to increase AOV by bundling products or offering discounts for larger purchases.',
    strategy:
      'Implement a \\"Complete the Set\\" promotion: Bundle snowboards with ski wax (SELLING PLANS SKI WAX variants) or other accessories at a discounted price. For example, offer 10% off a SELLING PLANS SKI WAX - SAMPLE SELLING PLANS SKI WAX when purchased with THE COMPLETE SNOWBOARD - ICE. Promote these bundles prominently on product pages and during checkout.',
  },
  {
    id: 2,
    category: 'Revenue Maximization',
    insight:
      'The product "THE 3P FULFILLED SNOWBOARD" has 0 inventory. This could significantly impact conversion rate if it is a popular item.',
    strategy:
      'Immediately investigate and restock \\"THE 3P FULFILLED SNOWBOARD\\" if demand exists. If discontinued, replace it with a similar product and actively promote the alternative. Use email marketing and on-site banners to communicate the restock or alternative availability.',
  },
  {
    id: 3,
    category: 'Revenue Maximization',
    insight:
      'Many snowboards have high inventory levels. Targeted promotions can help increase conversion rate.',
    strategy:
      'Run targeted advertising campaigns focusing on specific snowboard types and customer segments. For example, promote \\"THE VIDEOGRAPHER SNOWBOARD\\" to customers interested in action sports filming. Offer free shipping or a small discount to incentivize purchase, A/B test different promotional offers to optimize conversion.',
  },
  {
    id: 4,
    category: 'Cost Minimization',
    insight:
      'Several snowboards have high on-hand inventory (e.g., \\"THE COMPARE AT PRICE SNOWBOARD\\" with 1732 units), which increases holding costs.',
    strategy:
      'Implement a tiered discount strategy to reduce overstock of high-inventory items. Offer larger discounts for purchasing multiple units of snowboards like \\"THE COMPARE AT PRICE SNOWBOARD\\" or \\"THE HIDDEN SNOWBOARD\\", especially near the end of the season. Consider flash sales or limited-time promotions to create urgency.',
  },
];

export default function BusinessInsightsCard() {
  const [tab, setTab] = useState(0);
  const [filter, setFilter] = useState('');

  const filteredData = insights.filter(
    (item) =>
      item.category.toLowerCase().includes(filter.toLowerCase()) ||
      item.insight.toLowerCase().includes(filter.toLowerCase()) ||
      item.strategy.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Insights"
            total={18}
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Revenue Maximization"
            total={6}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Cost Minimization"
            total={6}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Inventory Optimization"
            total={6}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>
      </Grid>

      <Card sx={{ p: 2, mt: 6 }}>
        <Typography variant="h6" gutterBottom>
          Insights & Strategy
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Here are some ways to enhance your business operations!
        </Typography>

        <Box my={2}>
          <TextField fullWidth size="small" placeholder="Filter table..." />
        </Box>

        <TableContainer component={Paper} variant="outlined">
          <Table size="small">
            <TableHead sx={{ bgcolor: '#f5f5f5' }}>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Insight</TableCell>
                <TableCell>Strategy</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell   sx={{
                    maxWidth: 200,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                    {row.category}
                  </TableCell>
                  <TableCell sx={{ maxWidth: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {row.insight}
                  </TableCell>
                  <TableCell sx={{ maxWidth: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {row.strategy}
                  </TableCell>
                </TableRow>
              ))}
              {filteredData.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    No results found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>

          </Table>
        </TableContainer>
      </Card>
    </>
  );
}
