import { useMemo } from 'react';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useTranslate();

  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: t('overview'),
        items: [
          {
            title: t('Home'),
            path: paths.dashboard.general.home,
            icon: ICONS.dashboard,
          },
          {
            title: t('Dynamic Strategy'),
            path: paths.dashboard.general.dstrategy,
            icon: ICONS.ecommerce,
          },
          {
            title: t('Orders '),
            path: paths.dashboard.general.orders,
            icon: ICONS.order,
          },
        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: t('Dynamic StatsBoard'),
        items: [
          {
            title: t('Business Insights'),
            path: paths.dashboard.general.businessInsights,
            icon: ICONS.booking,
          },
          {
            title: t('Potential Issues'),
            path: paths.dashboard.general.potentialIssues,
            icon: ICONS.file,
          },
        ],
      },

      {
        subheader: t('Dynamic Experiences'),
        items: [
          {
            title: t('SEO Optimization'),
            path: paths.dashboard.product.root,
            icon: ICONS.mail,
            children: [
              { title: t('Product SEO'), path: paths.dashboard.general.productSeo },
              { title: t('Media SEO'), path: paths.dashboard.general.mediaSeo },
              { title: t('Shop SEO'), path: paths.dashboard.general.shopSeo },
            ],
          },
          {
            title: t('Blog Content'),
            path: paths.dashboard.general.blogContent,
            icon: ICONS.blog,
          },
          {
            title: t('Campaigns'),
            path: paths.dashboard.general.campaigns,
            icon: ICONS.file,
          },
        ],
      },
      {
        subheader: t('Products'),
        items: [
          {
            title: t('Products'),
            path: paths.dashboard.general.products,
            icon: ICONS.product,
          },
          {
            title: t('Variants'),
            path: paths.dashboard.general.variants,
            icon: ICONS.job,
          },
          {
            title: t('Inventory'),
            path: paths.dashboard.general.inventory,
            icon: ICONS.invoice,
          },
        ],
      },
    ],
    [t]
  );

  return data;
}
