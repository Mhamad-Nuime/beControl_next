// @next
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

// @project
import { blogs } from '@/views/landings/default/data';

const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const BlogDetails = dynamic(() => import('@/components/BlogDetails'));

/***************************  PAGE - BLOG DETAIL  ***************************/

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  const index = Number(id);
  const blog = blogs.find(b => b.index);

  if (!blog || Number.isNaN(index)) {
    notFound();
  }

  return (
    <>
      <BlogDetails blog={blog} />
      <ScrollFab />
    </>
  );
}

export function generateStaticParams() {
  const blogIds = blogs.map((p) => `${p.index}`);
  // App Router: segment name must be a top-level key (not `params` like Pages Router).
  return blogIds.map((id) => ({ id }));
}