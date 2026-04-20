// @next
import dynamic from 'next/dynamic';

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const Blog = dynamic(() => import('@/views/sections/Blog'));
// const GalleryPage = dynamic(() => import('@/views/sections/landings/Gallery'));
// import GalleryPage from '@/views/sections/Gallery';
// import About from '';

/***************************  PAGE - ROOT  ***************************/

export default function BlogPage() {
  return (
    <>
      <Blog />
      {/* <GalleryPage /> */}

      {/* scroll to top section */}
      <ScrollFab />
    </>
  );
}
