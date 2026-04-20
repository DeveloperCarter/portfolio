import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProjectDetailPage } from '@/pages/ProjectDetailPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { SkillsPage } from '@/pages/SkillsPage';
import { TimelinePage } from '@/pages/TimelinePage';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route index element={<HomePage />} />
        <Route element={<ProjectsPage />} path="projects" />
        <Route element={<ProjectDetailPage />} path="projects/:slug" />
        <Route element={<AboutPage />} path="about" />
        <Route element={<SkillsPage />} path="skills" />
        <Route element={<TimelinePage />} path="timeline" />
        <Route element={<ContactPage />} path="contact" />
        <Route element={<Navigate replace to="/" />} path="home" />
        <Route element={<NotFoundPage />} path="*" />
      </Route>
    </Routes>
  );
}
