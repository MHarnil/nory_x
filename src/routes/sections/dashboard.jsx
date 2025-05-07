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
const BusinessInsightsPage = lazy(() => import('src/pages/dashboard/businessInsights'));
// PotentialIssuesPage
const PotentialIssuesPage = lazy(() => import('src/pages/dashboard/potentialIssues'));
// BlogContentPage
const BlogContentPage = lazy(() => import('src/pages/dashboard/blogContent'));
// CampaignsPage
const CampaignsPage = lazy(() => import('src/pages/dashboard/campaigns'));
// ProductSeoPage
const ProductSeoPage = lazy(() => import('src/pages/dashboard/productSeo'));
// MediaSeoPage
const MediaSeoPage = lazy(() => import('src/pages/dashboard/mediaSeo'));
// ShopSeoPage
const ShopSeoPage = lazy(() => import('src/pages/dashboard/shopSeo'));
// ProductsPage
const ProductsPage = lazy(() => import('src/pages/dashboard/products'));
// VariantsPage
const VariantsPage = lazy(() => import('src/pages/dashboard/variants'));
// InventoryPage
const InventoryPage = lazy(() => import('src/pages/dashboard/inventory'));
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
      { path: 'potential-issues', element: <PotentialIssuesPage /> },
      { path: 'blog-content', element: <BlogContentPage /> },
      { path: 'campaigns', element: <CampaignsPage /> },
      { path: 'product-seo', element: <ProductSeoPage /> },
      { path: 'media-seo', element: <MediaSeoPage /> },
      { path: 'shop-seo', element: <ShopSeoPage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'variants', element: <VariantsPage /> },
      { path: 'inventory', element: <InventoryPage /> },
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
