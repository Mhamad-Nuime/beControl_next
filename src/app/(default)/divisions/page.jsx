// @next
import dynamic from 'next/dynamic';

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const Divisions = dynamic(() => import('@/views/sections/divisions'));
// const GalleryPage = dynamic(() => import('@/views/sections/landings/Gallery'));
// import GalleryPage from '@/views/sections/Gallery';
// import About from '';

/***************************  PAGE - ROOT  ***************************/

export default function DivisionsPage() {
  return (
    <>
      <Divisions />
      {/* <GalleryPage /> */}

      {/* scroll to top section */}
      <ScrollFab />
    </>
  );
}
