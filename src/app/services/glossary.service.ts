import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Provider, GlossaryTerm } from '../models/glossary.model';

@Injectable({
  providedIn: 'root'
})
export class GlossaryService {
  private providersSubject = new BehaviorSubject<Provider[]>(this.initializeProviders());
  private selectedProviderIdsSubject = new BehaviorSubject<string[]>([]);

  public providers$: Observable<Provider[]> = this.providersSubject.asObservable();
  public selectedProviderIds$: Observable<string[]> = this.selectedProviderIdsSubject.asObservable();

  constructor() {}

  private initializeProviders(): Provider[] {
    return [
      {
        id: 'chatgpt',
        name: 'ChatGPT (OpenAI)',
        expanded: true,
        terms: [
          { id: 'chatgpt-1', term: 'GPT-4', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-2', term: 'GPT-4 Turbo', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-3', term: 'GPT-4o', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-4', term: 'GPT-4.1', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-5', term: 'GPT-4.5', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-6', term: 'Multimodal capabilities (text, voice, vision)', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-7', term: 'Function calling', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-8', term: 'GPTs (Custom GPTs)', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-9', term: 'Code Interpreter', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-10', term: 'Advanced Data Analysis', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-11', term: 'Web browsing', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-12', term: 'Voice mode', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-13', term: 'Canvas', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-14', term: 'Memory feature', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-15', term: 'DALL-E integration', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-16', term: 'Plugins', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-17', term: 'OpenAI API access', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-18', term: 'Fine-tuning', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-19', term: 'Context window (128K tokens)', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-20', term: 'ChatGPT Record', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-21', term: 'Image Library', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-22', term: 'Enhanced Search', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-23', term: 'Google Drive integration', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-24', term: 'OneDrive integration', provider: 'chatgpt', selected: false },
          { id: 'chatgpt-25', term: 'GitHub integration', provider: 'chatgpt', selected: false }
        ]
      },
      {
        id: 'claude',
        name: 'Claude (Anthropic)',
        expanded: true,
        terms: [
          { id: 'claude-1', term: 'Context window', provider: 'claude', selected: false },
          { id: 'claude-2', term: 'Fine-tuning', provider: 'claude', selected: false },
          { id: 'claude-3', term: 'HHH (Helpful, Honest, Harmless)', provider: 'claude', selected: false },
          { id: 'claude-4', term: 'Latency', provider: 'claude', selected: false },
          { id: 'claude-5', term: 'LLM (Large Language Models)', provider: 'claude', selected: false },
          { id: 'claude-6', term: 'MCP (Model Context Protocol)', provider: 'claude', selected: false },
          { id: 'claude-7', term: 'MCP connector', provider: 'claude', selected: false },
          { id: 'claude-8', term: 'Pretraining', provider: 'claude', selected: false },
          { id: 'claude-9', term: 'RAG (Retrieval Augmented Generation)', provider: 'claude', selected: false },
          { id: 'claude-10', term: 'RLHF', provider: 'claude', selected: false },
          { id: 'claude-11', term: 'Temperature', provider: 'claude', selected: false },
          { id: 'claude-12', term: 'TTFT (Time to First Token)', provider: 'claude', selected: false },
          { id: 'claude-13', term: 'Tokens', provider: 'claude', selected: false },
          { id: 'claude-14', term: 'Constitutional AI', provider: 'claude', selected: false },
          { id: 'claude-15', term: 'Claude 3.5 Sonnet', provider: 'claude', selected: false },
          { id: 'claude-16', term: 'Claude 3 Opus', provider: 'claude', selected: false },
          { id: 'claude-17', term: 'Claude 3 Haiku', provider: 'claude', selected: false },
          { id: 'claude-18', term: 'Extended context window (200K tokens)', provider: 'claude', selected: false },
          { id: 'claude-19', term: 'Tool use', provider: 'claude', selected: false },
          { id: 'claude-20', term: 'Vision capabilities', provider: 'claude', selected: false },
          { id: 'claude-21', term: 'Artifacts', provider: 'claude', selected: false },
          { id: 'claude-22', term: 'Projects', provider: 'claude', selected: false },
          { id: 'claude-23', term: 'Prompt caching', provider: 'claude', selected: false },
          { id: 'claude-24', term: 'System prompts', provider: 'claude', selected: false },
          { id: 'claude-25', term: 'Claude API', provider: 'claude', selected: false }
        ]
      },
      {
        id: 'gemini',
        name: 'Gemini (Google)',
        expanded: true,
        terms: [
          { id: 'gemini-1', term: 'Gemini Pro', provider: 'gemini', selected: false },
          { id: 'gemini-2', term: 'Gemini Ultra', provider: 'gemini', selected: false },
          { id: 'gemini-3', term: 'Gemini Advanced', provider: 'gemini', selected: false },
          { id: 'gemini-4', term: 'Gemini 1.5 Pro', provider: 'gemini', selected: false },
          { id: 'gemini-5', term: 'Multimodal capabilities (text, audio, visual)', provider: 'gemini', selected: false },
          { id: 'gemini-6', term: 'Context window', provider: 'gemini', selected: false },
          { id: 'gemini-7', term: 'Long context understanding (1M tokens)', provider: 'gemini', selected: false },
          { id: 'gemini-8', term: 'Context Cache', provider: 'gemini', selected: false },
          { id: 'gemini-9', term: 'Grounding', provider: 'gemini', selected: false },
          { id: 'gemini-10', term: 'Embedding', provider: 'gemini', selected: false },
          { id: 'gemini-11', term: 'Foundation Model', provider: 'gemini', selected: false },
          { id: 'gemini-12', term: 'AI Agent', provider: 'gemini', selected: false },
          { id: 'gemini-13', term: 'Hallucination', provider: 'gemini', selected: false },
          { id: 'gemini-14', term: 'Prompt Engineering', provider: 'gemini', selected: false },
          { id: 'gemini-15', term: 'Token', provider: 'gemini', selected: false },
          { id: 'gemini-16', term: 'Transformer', provider: 'gemini', selected: false },
          { id: 'gemini-17', term: 'Google AI Studio', provider: 'gemini', selected: false },
          { id: 'gemini-18', term: 'Vertex AI', provider: 'gemini', selected: false },
          { id: 'gemini-19', term: 'Gemini in Google Workspace', provider: 'gemini', selected: false },
          { id: 'gemini-20', term: 'Code execution', provider: 'gemini', selected: false },
          { id: 'gemini-21', term: 'Extensions', provider: 'gemini', selected: false },
          { id: 'gemini-22', term: 'Grounding with Google Search', provider: 'gemini', selected: false },
          { id: 'gemini-23', term: 'JSON mode', provider: 'gemini', selected: false },
          { id: 'gemini-24', term: 'Function calling', provider: 'gemini', selected: false },
          { id: 'gemini-25', term: 'Checkpoint', provider: 'gemini', selected: false }
        ]
      },
      {
        id: 'perplexity',
        name: 'Perplexity AI',
        expanded: true,
        terms: [
          { id: 'perplexity-1', term: 'Perplexity Pro', provider: 'perplexity', selected: false },
          { id: 'perplexity-2', term: 'Pro Search', provider: 'perplexity', selected: false },
          { id: 'perplexity-3', term: 'Focus modes (All, Academic, Writing, Wolfram Alpha, YouTube, Reddit)', provider: 'perplexity', selected: false },
          { id: 'perplexity-4', term: 'Collections', provider: 'perplexity', selected: false },
          { id: 'perplexity-5', term: 'Copilot mode', provider: 'perplexity', selected: false },
          { id: 'perplexity-6', term: 'File upload & analysis', provider: 'perplexity', selected: false },
          { id: 'perplexity-7', term: 'Source citations', provider: 'perplexity', selected: false },
          { id: 'perplexity-8', term: 'Follow-up suggestions', provider: 'perplexity', selected: false },
          { id: 'perplexity-9', term: 'Search-augmented generation', provider: 'perplexity', selected: false },
          { id: 'perplexity-10', term: 'Thread management', provider: 'perplexity', selected: false },
          { id: 'perplexity-11', term: 'Perplexity API', provider: 'perplexity', selected: false },
          { id: 'perplexity-12', term: 'Perplexity Pages', provider: 'perplexity', selected: false },
          { id: 'perplexity-13', term: 'Spaces (team workspaces)', provider: 'perplexity', selected: false },
          { id: 'perplexity-14', term: 'Voice search', provider: 'perplexity', selected: false },
          { id: 'perplexity-15', term: 'Image generation', provider: 'perplexity', selected: false },
          { id: 'perplexity-16', term: 'Advanced AI models (GPT-4, Claude, etc.)', provider: 'perplexity', selected: false },
          { id: 'perplexity-17', term: 'Unlimited file uploads', provider: 'perplexity', selected: false },
          { id: 'perplexity-18', term: 'Library (saved searches)', provider: 'perplexity', selected: false },
          { id: 'perplexity-19', term: 'Real-time web search', provider: 'perplexity', selected: false },
          { id: 'perplexity-20', term: 'Sonar API models', provider: 'perplexity', selected: false }
        ]
      }
    ];
  }

  getProviders(): Provider[] {
    return this.providersSubject.value;
  }

  toggleTerm(termId: string): void {
    const providers = this.providersSubject.value;
    providers.forEach(provider => {
      const term = provider.terms.find(t => t.id === termId);
      if (term) {
        term.selected = !term.selected;
      }
    });
    this.providersSubject.next([...providers]);
  }

  toggleAllInProvider(providerId: string, selected: boolean): void {
    const providers = this.providersSubject.value;
    const provider = providers.find(p => p.id === providerId);
    if (provider) {
      provider.terms.forEach(term => term.selected = selected);
    }
    this.providersSubject.next([...providers]);
  }

  toggleProviderExpanded(providerId: string): void {
    const providers = this.providersSubject.value;
    const provider = providers.find(p => p.id === providerId);
    if (provider) {
      provider.expanded = !provider.expanded;
    }
    this.providersSubject.next([...providers]);
  }

  getKnownTerms(): { provider: Provider, terms: GlossaryTerm[] }[] {
    const providers = this.providersSubject.value;
    const selectedProviderIds = this.selectedProviderIdsSubject.value;
    return providers
      .filter(p => selectedProviderIds.includes(p.id))
      .map(provider => ({
        provider,
        terms: provider.terms.filter(t => t.selected)
      }))
      .filter(group => group.terms.length > 0);
  }

  getUnknownTerms(): { provider: Provider, terms: GlossaryTerm[] }[] {
    const providers = this.providersSubject.value;
    const selectedProviderIds = this.selectedProviderIdsSubject.value;
    return providers
      .filter(p => selectedProviderIds.includes(p.id))
      .map(provider => ({
        provider,
        terms: provider.terms.filter(t => !t.selected)
      }))
      .filter(group => group.terms.length > 0);
  }

  generatePrompt(): string {
    const unknownGroups = this.getUnknownTerms();
    const knownCount = this.getKnownCount();
    const totalCount = this.getTotalCount();
    const percentage = this.getKnowledgePercentage();
    const selectedProviders = this.getSelectedProviders();
    const providerNames = selectedProviders.map(p => p.name).join(', ');

    if (selectedProviders.length === 0) {
      return 'Please select at least one AI provider to assess your knowledge and generate a learning roadmap.';
    }

    if (unknownGroups.length === 0) {
      return `Congratulations! You've indicated knowledge of all concepts for ${providerNames}. You're truly an expert in ${selectedProviders.length === 1 ? 'this platform' : 'these platforms'}!`;
    }

    let prompt = `I'm focusing on learning about: ${providerNames}\n\n`;
    prompt += `Based on my AI knowledge assessment, here are the concepts and features I'd like to learn:\n\n`;
    prompt += `**What I Already Know:**\n`;
    prompt += `I'm familiar with ${knownCount} out of ${totalCount} concepts across ${selectedProviders.length === 1 ? 'this platform' : 'these platforms'} (${percentage}% knowledge level)\n\n`;

    unknownGroups.forEach(group => {
      prompt += `**${group.provider.name} - Knowledge Gaps:**\n`;
      group.terms.forEach(term => {
        prompt += `- ${term.term}\n`;
      });
      prompt += '\n';
    });

    prompt += `Please create a comprehensive learning roadmap for these topics, including:
1. Recommended learning order (from foundational to advanced)
2. Key resources and official documentation for each topic
3. Practical exercises or projects to solidify understanding
4. Estimated time investment for each topic
5. How these concepts interconnect
6. Which concepts build upon the knowledge I already have

Tailor the roadmap specifically for ${providerNames} and help me understand which topics are prerequisites for others.`;

    return prompt;
  }

  getKnownCount(): number {
    const selectedProviderIds = this.selectedProviderIdsSubject.value;
    return this.providersSubject.value
      .filter(p => selectedProviderIds.includes(p.id))
      .reduce((total, provider) => total + provider.terms.filter(t => t.selected).length, 0);
  }

  getTotalCount(): number {
    const selectedProviderIds = this.selectedProviderIdsSubject.value;
    return this.providersSubject.value
      .filter(p => selectedProviderIds.includes(p.id))
      .reduce((total, provider) => total + provider.terms.length, 0);
  }

  getKnowledgePercentage(): number {
    const total = this.getTotalCount();
    if (total === 0) return 0;
    const known = this.getKnownCount();
    return Math.round((known / total) * 100);
  }

  getEncouragingMessage(): string {
    const percentage = this.getKnowledgePercentage();
    if (percentage >= 70) {
      return 'Great job! You\'re well-versed in AI tools!';
    } else if (percentage >= 40) {
      return 'Good foundation! Let\'s fill in the gaps.';
    } else {
      return 'Exciting learning journey ahead!';
    }
  }

  toggleProviderSelection(providerId: string): void {
    const currentSelection = this.selectedProviderIdsSubject.value;
    const index = currentSelection.indexOf(providerId);

    if (index > -1) {
      // Remove if already selected
      this.selectedProviderIdsSubject.next(currentSelection.filter(id => id !== providerId));
    } else {
      // Add if not selected
      this.selectedProviderIdsSubject.next([...currentSelection, providerId]);
    }
  }

  isProviderSelected(providerId: string): boolean {
    return this.selectedProviderIdsSubject.value.includes(providerId);
  }

  getSelectedProviderIds(): string[] {
    return this.selectedProviderIdsSubject.value;
  }

  getAllProviders(): Provider[] {
    return this.providersSubject.value;
  }

  getSelectedProviders(): Provider[] {
    const selectedIds = this.selectedProviderIdsSubject.value;
    return this.providersSubject.value.filter(p => selectedIds.includes(p.id));
  }
}
