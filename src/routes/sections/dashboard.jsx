import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// import { AuthGuard } from 'src/auth/guard';
import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

// OVERVIEW
const IndexPage = lazy(() => import('src/pages/dashboard/home'));
// USER
const UserProfilePage = lazy(() => import('src/pages/dashboard/user/profile'));
const UserCardsPage = lazy(() => import('src/pages/dashboard/user/cards'));
const UserListPage = lazy(() => import('src/pages/dashboard/user/list'));
const UserAccountPage = lazy(() => import('src/pages/dashboard/user/account'));
const UserCreatePage = lazy(() => import('src/pages/dashboard/user/new'));
const UserEditPage = lazy(() => import('src/pages/dashboard/user/edit'));
// BusinessInfo
const BusinessInfoCardPage = lazy(() => import('src/pages/dashboard/user/BusinessInfo'));
// BusinessInfo
const BusinessInsightsPage = lazy(() => import('src/pages/dashboard/businessInsight.jsx'));
// PotentialIssuesPage
const PotentialIssuePage = lazy(() => import('src/pages/dashboard/potentialIssue.jsx'));
// BlogContentPage
const BlogContentPage = lazy(() => import('src/pages/dashboard/blogContent'));
// CampaignPage
const CampaignPage = lazy(() => import('src/pages/dashboard/campaign.jsx'));
// ProductsSeoPage
const ProductsSeoPage = lazy(() => import('src/pages/dashboard/productsSeo'));
// MediasSeoPage
const MediasSeoPage = lazy(() => import('src/pages/dashboard/mediasSeo'));
// ShopsSeoPage
const ShopsSeoPage = lazy(() => import('src/pages/dashboard/shopsSeo'));
// ProductsPage
const ProductPage = lazy(() => import('src/pages/dashboard/product.jsx'));
// VariantPage
const VariantPage = lazy(() => import('src/pages/dashboard/variant'));
// InventorysPage
const InventorysPage = lazy(() => import('src/pages/dashboard/inventorys'));
// DstrategyPage
const DstrategyPage = lazy(() => import('src/pages/dashboard/dstrategy'));
// OrdersPage
const OrdersPage = lazy(() => import('src/pages/dashboard/orders'));
// HomePage
const HomePage = lazy(() => import('src/pages/dashboard/home'));

// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: (
      // <AuthGuard>
      <DashboardLayout>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
      // </AuthGuard>
    ),
    children: [
      { element: <IndexPage />, index: true },
      { path: 'business-insights', element: <BusinessInsightsPage /> },
      { path: 'potential-issues', element: <PotentialIssuePage /> },
      { path: 'blog-content', element: <BlogContentPage /> },
      { path: 'campaigns', element: <CampaignPage /> },
      { path: 'product-seo', element: <ProductsSeoPage /> },
      { path: 'media-seo', element: <MediasSeoPage /> },
      { path: 'shop-seo', element: <ShopsSeoPage /> },
      { path: 'products', element: <ProductPage /> },
      { path: 'variants', element: <VariantPage /> },
      { path: 'inventory', element: <InventorysPage /> },
      { path: 'dstrategy', element: <DstrategyPage /> },
      { path: 'orders', element: <OrdersPage /> },
      { path: 'home', element: <HomePage /> },
      {
        path: 'user',
        children: [
          { element: <UserProfilePage />, index: true },
          { path: 'business-info', element: <BusinessInfoCardPage /> },
          { path: 'profile', element: <UserProfilePage /> },
          { path: 'cards', element: <UserCardsPage /> },
          { path: 'list', element: <UserListPage /> },
          { path: 'new', element: <UserCreatePage /> },
          { path: ':id/edit', element: <UserEditPage /> },
          { path: 'account', element: <UserAccountPage /> },
        ],
      },
    ],
  },
];
