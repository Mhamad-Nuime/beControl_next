// @next
import dynamic from 'next/dynamic';

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const ProjectDetails = dynamic(() => import('@/components/ProjectDetails'));

import { projects } from '@/views/landings/default/data';
/***************************  PAGE - ROOT  ***************************/

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.index == id);
  return (
    <>
      <ProjectDetails {...project} />
      <ScrollFab />
    </>
  );
}

export function generateStaticParams() {
  const projectIds = projects.map((p) => `${p.index}`);
  // App Router: segment name must be a top-level key (not `params` like Pages Router).
  return projectIds.map((id) => ({ id }));
}
