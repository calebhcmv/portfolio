/**
 * Dados pessoais exibidos no site.
 * Textos marcados como PROVISÓRIO são placeholders editoriais e precisam
 * de revisão/aprovação do proprietário antes da publicação.
 */

export type Discipline = {
  id: 'ai' | 'development' | 'business';
  title: string;
  /** Rota futura. Só vira link quando a página existir (Fase 2). */
  href?: string;
  summary: string;
};

export type ContactLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  /** Linhas do nome no hero (quebra controlada). */
  nameLines: string[];
  shortName: string;
  positioning: string;
  about: string;
  disciplines: Discipline[];
  /** Apenas links confirmados pelo proprietário. Vazio até confirmação. */
  contact: ContactLink[];
};

export const profile: Profile = {
  name: 'Caleb Lopes',
  nameLines: ['Caleb', 'Lopes'],
  shortName: 'CL',
  // PROVISÓRIO — placeholder editorial do README; revisar antes de publicar.
  positioning:
    'Building at the intersection of technology, artificial intelligence and business.',
  // PROVISÓRIO — descrição genérica derivada do briefing; sem cargos, empresas ou métricas.
  about:
    'A personal portfolio connecting three areas of work: artificial intelligence, software development and business growth. Projects will be added here as they are documented with real context, process and evidence.',
  disciplines: [
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      summary: 'Projects and experiments with artificial intelligence.',
    },
    {
      id: 'development',
      title: 'Development',
      summary: 'Software and development work.',
    },
    {
      id: 'business',
      title: 'Business & Growth',
      summary: 'Marketing, sales and growth.',
    },
  ],
  contact: [],
};
