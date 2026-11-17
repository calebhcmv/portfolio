/**
 * Dados pessoais exibidos no site.
 * Textos marcados como PROVISÓRIO são placeholders editoriais e precisam
 * de revisão/aprovação do proprietário antes da publicação.
 */

import type { ProjectCategory } from './projects';

export type Discipline = {
  id: ProjectCategory;
  title: string;
  href: string;
  summary: string;
  /** PROVISÓRIO — introdução da página da área. */
  intro: string;
};

export type ContactLink = {
  label: string;
  /** Texto exibido (ex.: endereço de e-mail ou URL curta). */
  display: string;
  href: string;
};

export type Profile = {
  name: string;
  /** Linhas do nome no hero (quebra controlada). */
  nameLines: string[];
  positioning: string;
  about: string;
  /** Parágrafos da página /about. Apenas informações confirmadas. */
  bio: string[];
  disciplines: Discipline[];
  /** Apenas links confirmados pelo proprietário. Vazio até confirmação. */
  contact: ContactLink[];
};

export const profile: Profile = {
  name: 'Caleb Lopes',
  nameLines: ['Caleb', 'Lopes'],
  // PROVISÓRIO — placeholder editorial do README; revisar antes de publicar.
  positioning:
    'Building at the intersection of technology, artificial intelligence and business.',
  // PROVISÓRIO — descrição genérica derivada do briefing; sem cargos, empresas ou métricas.
  about:
    'A personal portfolio connecting three areas of work: artificial intelligence, software development and business growth. Projects will be added here as they are documented with real context, process and evidence.',
  // Preencher com trajetória, formação e abordagem confirmadas.
  bio: [],
  disciplines: [
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      href: '/ai',
      summary: 'Projects and experiments with artificial intelligence.',
      intro:
        'Projects and experiments that apply artificial intelligence to real problems — documented with what was built, how, and what it showed.',
    },
    {
      id: 'development',
      title: 'Development',
      href: '/development',
      summary: 'Software and development work.',
      intro:
        'Software and development work — from first decisions to working code, with the trade-offs made along the way.',
    },
    {
      id: 'business',
      title: 'Business & Growth',
      href: '/business',
      summary: 'Marketing, sales and growth.',
      intro:
        'Marketing, sales and growth work — the context, the approach and the evidence behind each result.',
    },
  ],
  contact: [],
};

export function getDiscipline(id: ProjectCategory): Discipline {
  const d = profile.disciplines.find((x) => x.id === id);
  if (!d) throw new Error(`Unknown discipline: ${id}`);
  return d;
}
