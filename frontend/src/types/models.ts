export interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface TimelineItem {
  id: string;
  title: string;
  org: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}
