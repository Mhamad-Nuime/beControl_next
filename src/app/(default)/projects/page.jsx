// @next
import dynamic from 'next/dynamic';

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const Projects = dynamic(() => import('@/views/sections/projects'));
// const GalleryPage = dynamic(() => import('@/views/sections/landings/Gallery'));
// import GalleryPage from '@/views/sections/Gallery';
// import About from '';

/***************************  PAGE - ROOT  ***************************/

export default function ProjectsPage() {
  return (
    <>
      <Projects />
      {/* <GalleryPage /> */}

      {/* scroll to top section */}
      <ScrollFab />
    </>
  );
}
