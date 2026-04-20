import { projectsMock } from '@/mocks/projects';
import { skillsMock } from '@/mocks/skills';
import { timelineMock } from '@/mocks/timeline';
import type { Project, Skill, TimelineItem } from '@/types/models';

const delay = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// TODO: Replace mocked implementations with real API calls.
export const apiClient = {
  async getProjects(): Promise<Project[]> {
    await delay(150);
    return projectsMock;
  },
  async getProjectBySlug(slug: string): Promise<Project | undefined> {
    await delay(150);
    return projectsMock.find((project) => project.slug === slug);
  },
  async getSkills(): Promise<Skill[]> {
    await delay(150);
    return skillsMock;
  },
  async getTimeline(): Promise<TimelineItem[]> {
    await delay(150);
    return timelineMock;
  },
};
