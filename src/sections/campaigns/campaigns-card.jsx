// MediaSeoCard.jsx
import {
  Card,
  Typography,
  Box,
  Grid,
  Stack,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Avatar,
  FormControl,
  MenuItem,
  Button,
  Select,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArticleIcon from '@mui/icons-material/Article';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CampaignIcon from '@mui/icons-material/Campaign';
import AnalyticsWidgetSummary from '../overview/analytics/analytics-widget-summary.jsx';

const sampleBlogs = [
  {
    id: 22,
    title: 'Best Ski Resorts in Canada for Every Skill Level: Your 2025/2026 Guide',
    category: 'Resort & Travel Guides',
    date: '2025-05-02',
  },
  {
    id: 23,
    title: 'Gear Up: The Ultimate Beginner’s Guide to Buying Ski and Snowboard Gear in Canada',
    category: 'Gear & Equipment',
    date: '2025-05-02',
  },
  {
    id: 24,
    title:
      'Avalanche Safety in the Canadian Backcountry: A Beginner’s Guide to Responsible Exploration',
    category: 'Skills & Techniques',
    date: '2025-05-02',
  },
  {
    id: 28,
    title: 'Essential Gear Guide for Backcountry Skiing & Snowboarding in Canada',
    category: 'Backcountry Safety & Education',
    date: '2025-05-03',
  },
  {
    id: 32,
    title: 'Top Ski & Snowboard Resort Reviews: Whistler Blackcomb vs. [Another Canadian Resort]',
    category: 'Resort Reviews & Updates',
    date: '2025-05-03',
  },
  {
    id: 35,
    title: 'DIY Ski & Snowboard Waxing: A Step-by-Step Guide for Canadian Winters',
    category: 'DIY Ski/Snowboard Maintenance',
    date: '2025-05-03',
  },
];

const StatCard = ({ icon, label, value }) => (
  <Stack alignItems="center" spacing={1}>
    <Avatar sx={{ bgcolor: '#FFF6DA', color: '#FFC107', width: 40, height: 40 }}>{icon}</Avatar>
    <Typography variant="body2">{label}</Typography>
    <Box
      sx={{
        bgcolor: '#FFC107',
        px: 1.5,
        py: 0.5,
        borderRadius: 1,
        color: 'white',
        fontWeight: 600,
        fontSize: 14,
      }}
    >
      {value}
    </Box>
  </Stack>
);

export default function CampaignsCard({ title = 'Campaigns' }) {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const [blogIdea, setBlogIdea] = useState('');
  const [uploadStatus, setUploadStatus] = useState({});

  const handleUploadChange = (id, value) => {
    setUploadStatus((prev) => ({ ...prev, [id]: value }));
  };

  const filteredBlogs = sampleBlogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsWidgetSummary
            title="Generated"
            total={6}
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsWidgetSummary
            title="Uploaded"
            total={1}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsWidgetSummary
            title="Time Saved (hrs)"
            total={25.7}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>
      </Grid>

      <Card sx={{ p: 2, mb: 6 }}>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 3 }}>
          <Typography variant="h6">Growth Campaigns</Typography>
        </Stack>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
          <FormControl size="small">
            <Select value={itemsPerPage} onChange={(e) => setItemsPerPage(e.target.value)}>
              {[10, 25, 50].map((num) => (
                <MenuItem key={num} value={num}>
                  {num}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ flexGrow: 1 }}
          />
        </Box>

        <Typography variant="body2" sx={{ mb: 1 }}>
          Items per page
        </Typography>

        <TextField
          fullWidth
          multiline
          minRows={2}
          placeholder="Describe the blog post you want to generate..."
          value={blogIdea}
          onChange={(e) => setBlogIdea(e.target.value)}
          sx={{ mb: 1 }}
        />

        <Box sx={{ textAlign: 'right', mb: 2 }}>
          <Button variant="contained" color="primary">
            Create Blog Post
          </Button>
        </Box>

        <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Content Date</TableCell>
                <TableCell>Preview</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredBlogs.map((blog) => (
                <TableRow key={blog.id}>
                  <TableCell>{blog.id}</TableCell>
                  <TableCell>{blog.title}</TableCell>
                  <TableCell>{blog.category}</TableCell>
                  <TableCell>{blog.date}</TableCell>
                  <TableCell>
                    <IconButton color="#000">
                      <VisibilityIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <RadioGroup
                      row
                      value={uploadStatus[blog.id] || 'none'}
                      onChange={(e) => handleUploadChange(blog.id, e.target.value)}
                    >
                      <FormControlLabel
                        value="upload"
                        control={<Radio size="small" />}
                        label="Upload"
                      />
                      <FormControlLabel
                        value="none"
                        control={<Radio size="small" />}
                        label="None"
                      />
                    </RadioGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
}
