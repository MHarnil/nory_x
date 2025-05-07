import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';

export default function DstrategyCard() {
  return (
    <>
      <Box
        sx={{
          padding: 4,
          margin: 'auto',
          backgroundColor: '#f5f5f5',
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Box
          sx={{
            mb: 2,
            pb: 2,
            borderBottom: '1px solid black',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1">
            Business Environment
          </Typography>
          <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Select Snapshot
          </Button>
        </Box>

        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Sustern-Development: Competitive Analysis of the Canadian Ski & Snowboard Industry
        </Typography>
        <Paper elevation={1} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6">Competitive Intensity</Typography>
          <ul>
            <li>
              The ski and snowboard industry in Canada faces{' '}
              <strong>high and steady competition</strong>.
            </li>
            <li>
              Many resorts and brands compete for visitors, making{' '}
              <strong>differentiation crucial</strong>.
            </li>
            <li>
              Digital marketing is vital with fierce competition in ski resorts to attract
              customers.
            </li>
          </ul>
        </Paper>

        <Paper elevation={1} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6">Bargaining Power of Suppliers</Typography>
          <ul>
            <li>
              The bargaining power of suppliers in the winter sports equipment market is generally{' '}
              <strong>low</strong>.
            </li>
            <li>
              The industry is highly competitive, giving suppliers little leverage in negotiations.
            </li>
            <li>
              However, a limited number of specialized ski equipment and snowmaking manufacturers
              exist, creating some level of influence.
            </li>
          </ul>
        </Paper>
        <Paper elevation={1} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6">Threat of New Entrants</Typography>
          <ul>
            <li>
              The winter sports equipment market is competitive with many established players,
              suggesting <strong>moderate to high barriers to entry</strong>.
            </li>
            <li>
              High costs of resort development, limited suitable sites, and government regulations
              contribute to these barriers.
            </li>
            <li>
              New entrants should identify specific market niches, especially in emerging markets or
              specialized product categories.
            </li>
          </ul>
        </Paper>

        <Paper elevation={1} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6">Threat of Substitute Products</Typography>
          <ul>
            <li>The threat of substitute products is low in the winter sports equipment market.</li>
            <li>
              However, alternative winter activities and other extreme sports like mountain biking
              and skateboarding can draw potential customers away.
            </li>
            <li>
              Diversifying winter offerings and catering to year-round activities can help mitigate
              this threat.
            </li>
          </ul>
        </Paper>
        <Paper elevation={1} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6">Bargaining Power of Customers</Typography>
          <ul>
            <li>
              The bargaining power of buyers is high in the winter sports equipment market due to
              many choices.
            </li>
            <li>
              Customers are sensitive to pricing and seek the best deals, necessitating competitive
              pricing strategies.
            </li>
          </ul>
        </Paper>

        <Paper elevation={1} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6">Impact of Trends and Changes</Typography>
          <ul>
            <li>
              <strong>Climate Change:</strong> Warmer winters and inconsistent snowfall shorten ski
              seasons, impacting operations and visitor satisfaction.
            </li>
            <li>
              <strong>Economic Factors:</strong> The industry is affected by economic conditions
              such as consumer confidence, unemployment, and exchange rates.
            </li>
            <li>
              <strong>Demand:</strong> Shifting demographics and changing consumer preferences
              influence the demand for ski and snowboard products.
            </li>
          </ul>
        </Paper>
        <Paper elevation={1} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6">Generic Strategies</Typography>
          <ul>
            <li>
              <strong>Niche Market:</strong> Targeting specific segments like backcountry skiers,
              eco-conscious consumers, or freestyle riders can create a competitive edge.
            </li>
            <li>
              <strong>Low Cost:</strong> Offering affordable gear and budget-friendly packages can
              attract cost-conscious customers.
            </li>
            <li>
              <strong>Product Differentiation:</strong> Providing innovative, high-quality products
              with unique designs can justify premium pricing.
            </li>
          </ul>
        </Paper>

        <Paper elevation={1} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6">Gaining and Sustaining Competitive Advantage</Typography>
          <ul>
            <li>
              <strong>Focus on Innovation:</strong> Invest in research and development to introduce
              new technologies, materials, and designs that enhance performance, safety, and
              comfort.
            </li>
            <li>
              <strong>Trust Building:</strong> Foster personal care, provide guarantees, and robust
              warranty policies to foster customer trust and loyalty.
            </li>
            <li>
              <strong>Embrace Sustainability:</strong> Promote eco-friendly apparel and gear to
              attract environmentally conscious customers.
            </li>
          </ul>
        </Paper>
      </Box>

      <Box
        sx={{
          padding: 4,
          margin: 'auto',
          backgroundColor: '#f5f5f5',
          borderRadius: 2,
          boxShadow: 2,
          mt: 4,
        }}
      >
        <Box
          sx={{
            mb: 2,
            pb: 2,
            borderBottom: '1px solid black',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1">
            Market Segment
          </Typography>
          <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Select Snapshot
          </Button>
        </Box>

        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Market Segments and Purchasing Criteria for sustern-development
        </Typography>

        <Paper elevation={1} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6">Market Segments</Typography>
          <ul>
            <li>
              <strong>Snowboarders:</strong> This segment includes individuals of varying skill
              levels, from beginners to advanced riders, who seek snowboards for different riding
              styles such as all-mountain, freestyle, and powder. For example, products like "THE
              COMPLETE SNOWBOARD" cater to all skill levels.
            </li>
            <li>
              <strong>Skiers and Snowboarders seeking Wax:</strong> This segment focuses on
              customers who need ski and snowboard wax for base preparation and glide enhancement.
              The "SELLING PLANS SKI WAX" product line targets this market.
            </li>
            <li>
              <strong>Canadian Market:</strong> The business primarily targets the Canadian market,
              as evidenced by the repeated emphasis on "Canada" in SEO suggestions for titles,
              descriptions, and tags.
            </li>
            <li>
              <strong>Videographers and Mountain Filming Enthusiasts:</strong> Products like "THE
              VIDEOGRAPHER SNOWBOARD" target a niche market of snowboarders interested in capturing
              mountain footage.
            </li>
          </ul>
        </Paper>
        <Paper elevation={1} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6">Key Purchasing Criteria</Typography>
          <ul>
            <li>
              <strong>Performance:</strong> Customers look for high-quality snowboards and waxes
              that enhance their riding experience. For snowboards, this includes factors like
              stability, durability, and suitability for different terrains.
            </li>
            <li>
              <strong>Price:</strong> The "COMPARE AT PRICE SNOWBOARD" indicates that price
              sensitivity is a significant factor for some customers. The prices for "Ski &
              Snowboard Wax" range from CAD 9.95 to CAD 49.95.
            </li>
            <li>
              <strong>Design and Style:</strong> Unique designs, such as the "Pixel Art Design" on
              "THE MULTI-LOCATION SNOWBOARD" and the "Geometric" design on "THE 3P FULFILLED
              SNOWBOARD," are key purchasing criteria.
            </li>
            <li>
              <strong>All-Temperature Wax:</strong> Customers purchasing ski and snowboard wax need
              wax solutions that are effective in all snow conditions.
            </li>
            <li>
              <strong>Market Focus:</strong> Specifically mentions "Canada" to target the primary
              market, since that is the primary market.
            </li>
          </ul>
        </Paper>
      </Box>

      <Box
        sx={{
          padding: 4,
          margin: 'auto',
          backgroundColor: '#f5f5f5',
          borderRadius: 2,
          boxShadow: 2,
          mt: 4,
        }}
      >
        <Box
          sx={{
            mb: 2,
            pb: 2,
            borderBottom: '1px solid black',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1">
            Competitor Insights
          </Typography>
          <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Select Snapshot
          </Button>
        </Box>

        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Sustern-Development's Competitive Landscape: Strategies and Influences
        </Typography>

        <Paper elevation={1} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Industry Overview
          </Typography>
          <Typography>
            Sustern-development.myshopify.com operates in the ski and snowboard industry,
            specifically focusing on ski & snowboard wax and snowboards. As of May 2, 2025, the
            business is based in Canada and primarily targets the Canadian market.
          </Typography>
        </Paper>

        <Paper elevation={1} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Winning and Losing Strategies
          </Typography>
          <Typography>Based on the available data, a winning strategy involves:</Typography>
          <ul>
            <li>
              <strong>SEO Optimization:</strong>Employing relevant keywords, clear titles and
              descriptions, and optimized alt text for media to improve search visibility. For
              example, suggested SEO changes for "THE 3P FULFILLED SNOWBOARD" included keywords like
              "3P Fulfilled Snowboard," "Performance Snowboard," and "Canada."
            </li>
            <li>
              <strong>Inventory Management:</strong> While some products like "RED SNOWBOARD" are
              out of stock, efficient inventory tracking, such as for "SELLING PLANS SKI WAX," is
              critical.
            </li>
            <li>
              <strong>Market Focus:</strong> Targeting the Canadian market explicitly, as seen in
              the proposed SEO titles like "Ski & Snowboard Wax - All Temp | Canada."
            </li>
          </ul>

          <Typography>Losing strategies include:</Typography>
          <ul>
            <li>
              <strong>Neglecting SEO:</strong>Failing to optimize product titles, descriptions, and
              media alt text can reduce online visibility. Notably, suggested SEO changes were not
              applied to any products.
            </li>
            <li>
              <strong>Poor Inventory Management:</strong> Listing products like "RED SNOWBOARD" and
              "GREEN SNOWBOARD" as out of stock without clear restock plans.
            </li>
          </ul>
        </Paper>

        <Paper elevation={1} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Competitor Behavior and Influence
          </Typography>
          <Typography>
            Competitors likely behave based on market trends, customer preferences, and SEO
            strategies. Sustern-development can influence them by:
          </Typography>
          <ul>
            <li>
              <strong>Setting SEO Standards:</strong> By implementing robust SEO strategies,
              Sustern-development can set a benchmark, influencing competitors to follow suit.
            </li>
            <li>
              <strong>Offering Competitive Pricing:</strong> Pricing the wax and snowboards
              competitively can influence competitor pricing strategies.
            </li>
          </ul>

          <Typography>Losing strategies include:</Typography>
          <ul>
            <li>
              <strong>Neglecting SEO:</strong>Failing to optimize product titles, descriptions, and
              media alt text can reduce online visibility. Notably, suggested SEO changes were not
              applied to any products.
            </li>
            <li>
              <strong>Poor Inventory Management:</strong> Listing products like "RED SNOWBOARD" and
              "GREEN SNOWBOARD" as out of stock without clear restock plans.
            </li>
          </ul>
        </Paper>

        <Paper elevation={1} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Evolving Strategy
          </Typography>
          <Typography>
            The provided data shows a strategic focus on optimizing SEO and media content, as seen
            through numerous suggestions for improvements on May 2, 2025. However, none of these
            changes have been implemented yet, suggesting a potential gap between strategy and
            execution. The strategy seems to be evolving towards a more targeted, keyword-rich
            approach focusing on the Canadian market, with a strong emphasis on leveraging existing
            media alt text.
          </Typography>
        </Paper>
      </Box>

      <Box
        sx={{
          padding: 4,
          margin: 'auto',
          backgroundColor: '#f5f5f5',
          borderRadius: 2,
          boxShadow: 2,
          mt: 4,
        }}
      >
        <Box
          sx={{
            mb: 2,
            pb: 2,
            borderBottom: '1px solid black',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1">
            Position
          </Typography>
          <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Select Snapshot
          </Button>
        </Box>

        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          SUSTERN-DEVELOPMENT Product Analysis
        </Typography>

        <Paper elevation={1} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Customer Perceptions: Strengths and Weaknesses
          </Typography>
          <Typography>
            SUSTERN-DEVELOPMENT, a Canadian business specializing in ski & snowboard wax and
            snowboards, faces specific challenges and opportunities based on customer perception.
            Analyzing the available data, here's a summary:
          </Typography>
          <Typography variant="h6">Strengths:</Typography>
          <Box component="ul" style={{ paddingLeft: '20px' }}>
            <li>
              <Typography variant="body1">
                <strong>Design Variety:</strong> Many products emphasize unique and modern designs,
                such as "THE MULTI-MANAGED SNOWBOARD," described as having a "modern abstract
                design." Products like "THE COLLECTION SNOWBOARD: LIQUID" feature a "Blue Mountain
                Snowboard with 'Liquid' Graphic," which are visually appealing.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Performance Focus:</strong> Some descriptions highlight high-quality
                performance, particularly for specific riding styles like freestyle or all-mountain.
              </Typography>
            </li>
          </Box>
          <Typography variant="h6" style={{ marginTop: '16px' }}>
            Weaknesses:
          </Typography>
          <Box component="ul" style={{ paddingLeft: '20px' }}>
            <li>
              <Typography variant="body1">
                <strong>SEO Issues:</strong> Despite suggestions to improve SEO titles and
                descriptions for products like "THE 3P FULFILLED SNOWBOARD" and "THE VIDEOGRAPHER
                SNOWBOARD," these changes were not implemented. For example, the proposed SEO title
                for "THE 3P FULFILLED SNOWBOARD" was "3P Fulfilled Snowboard - Performance |
                Canada," aimed at better targeting the Canadian market.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Inventory Concerns:</strong> Some products, like "RED SNOWBOARD" and "GREEN
                SNOWBOARD," are listed as out of stock without inventory tracking, which can lead to
                customer dissatisfaction.
              </Typography>
            </li>
          </Box>
        </Paper>

        <Paper elevation={1} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Profitability Indicators
          </Typography>
          <Typography>
            While specific profitability figures are not directly provided, some insights can be
            gleaned from the available data:
          </Typography>
          <ul>
            <li>
              <strong>Inventory Management:</strong> Inventory tracking is enabled for most
              products, allowing for better stock management and reduced losses.
            </li>
            <li>
              <strong>Pricing Strategy:</strong> The price range for "SELLING PLANS SKI WAX" varies
              from CAD 9.95 to CAD 49.95, indicating a tiered pricing approach. High-end products
              like "THE VIDEOGRAPHER SNOWBOARD" priced at CAD 884.99 show a potential for higher
              profit margins.
            </li>
            <li>
              <strong>Unit Cost:</strong> The unit costs for the items are listed as 0.00 currency
              code.
            </li>
          </ul>
        </Paper>
      </Box>
    </>
  );
}
