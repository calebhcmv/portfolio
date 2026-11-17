/**
 * Projetos exibidos em "Selected Work".
 * Preencher APENAS com projetos reais e verificáveis. Não criar exemplos fictícios.
 */

export type ProjectCategory = 'ai' | 'development' | 'business';

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  role?: string;
  year?: number;
  status?: 'concept' | 'experiment' | 'completed' | 'ongoing';
  featured?: boolean;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [];

export const categoryLabels: Record<ProjectCategory, string> = {
  ai: 'Artificial Intelligence',
  development: 'Development',
  business: 'Business & Growth',
};
