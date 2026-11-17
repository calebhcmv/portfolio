/**
 * Projetos e estudos de caso.
 * Preencher APENAS com projetos reais e verificáveis. Não criar exemplos fictícios.
 * Cada projeto cadastrado gera automaticamente a rota /projects/[slug].
 */

export type ProjectCategory = 'ai' | 'development' | 'business';

/** Natureza do trabalho — deve ser sempre explícita. */
export type ProjectKind = 'professional' | 'personal' | 'experiment' | 'study';

export type ProjectStatus = 'concept' | 'experiment' | 'completed' | 'ongoing';

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  kind: ProjectKind;
  summary: string;
  role?: string;
  year?: number;
  status?: ProjectStatus;
  featured?: boolean;
  /** Estrutura do case: contexto → papel → processo → evidência/resultado → links. */
  context?: string[];
  process?: string[];
  /** Somente evidências verificáveis; nunca números estimados apresentados como fatos. */
  evidence?: string[];
  links?: ProjectLink[];
};

export const projects: Project[] = [];

export const categoryLabels: Record<ProjectCategory, string> = {
  ai: 'Artificial Intelligence',
  development: 'Development',
  business: 'Business & Growth',
};

export const kindLabels: Record<ProjectKind, string> = {
  professional: 'Professional work',
  personal: 'Personal project',
  experiment: 'Experiment',
  study: 'Study',
};

export const statusLabels: Record<ProjectStatus, string> = {
  concept: 'Concept',
  experiment: 'Experiment',
  completed: 'Completed',
  ongoing: 'Ongoing',
};

export const projectsByCategory = (category: ProjectCategory) =>
  projects.filter((p) => p.category === category);
