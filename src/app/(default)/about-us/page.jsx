// @next
import dynamic from 'next/dynamic';

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const About = dynamic(() => import('@/views/sections/About'));
// const GalleryPage = dynamic(() => import('@/views/sections/landings/Gallery'));
// import GalleryPage from '@/views/sections/Gallery';
// import About from '';

/***************************  PAGE - ROOT  ***************************/

export default function AboutUsPage() {
  return (
    <>
      <About />
      {/* <GalleryPage /> */}

      {/* scroll to top section */}
      <ScrollFab />
    </>
  );
}
