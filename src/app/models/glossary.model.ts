export interface GlossaryTerm {
  id: string;
  term: string;
  provider: string;
  category?: string;
  selected?: boolean;
}

export interface Provider {
  name: string;
  id: string;
  icon?: string;
  terms: GlossaryTerm[];
  expanded?: boolean;
}
