import { Helmet } from 'react-helmet-async';

import { BlogContentListView } from '../../sections/blogContent/view/index.js';

// ----------------------------------------------------------------------

export default function BlogContentPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Blog Content</title>
      </Helmet>

      <BlogContentListView />
    </>
  );
}
