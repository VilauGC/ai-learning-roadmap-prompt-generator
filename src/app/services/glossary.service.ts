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
          // BEGINNER (1-33)
          { id: 'chatgpt-1', term: 'ChatGPT', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-2', term: 'OpenAI', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-3', term: 'Prompt', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-4', term: 'Response', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-5', term: 'Conversation', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-6', term: 'Message', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-7', term: 'AI chatbot', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-8', term: 'Text generation', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-9', term: 'Query', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-10', term: 'User interface', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-11', term: 'Chat history', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-12', term: 'New chat', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-13', term: 'Regenerate response', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-14', term: 'Copy response', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-15', term: 'Free tier', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-16', term: 'GPT-5', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-17', term: 'GPT-4o', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-18', term: 'GPT-4.1', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-19', term: 'Model selection', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-20', term: 'Plus subscription', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-21', term: 'Pro plan', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-22', term: 'Team plan', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-23', term: 'Enterprise plan', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-24', term: 'Auto mode', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-25', term: 'Fast mode', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-26', term: 'Thinking mode', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-27', term: 'Token', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-28', term: 'Context window', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-29', term: 'Temperature setting', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-30', term: 'System message', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-31', term: 'Role-based prompting', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-32', term: 'Prompt engineering', provider: 'chatgpt', level: 'beginner', selected: false },
          { id: 'chatgpt-33', term: 'Few-shot learning', provider: 'chatgpt', level: 'beginner', selected: false },
          // INTERMEDIATE (34-67)
          { id: 'chatgpt-34', term: 'Zero-shot learning', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-35', term: 'Instruction following', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-36', term: 'Multi-turn conversation', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-37', term: 'Context retention', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-38', term: 'Hallucination', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-39', term: 'Factual accuracy', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-40', term: 'Study Mode', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-41', term: 'Study Together', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-42', term: 'Custom GPTs', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-43', term: 'GPT Builder', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-44', term: 'GPT Store', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-45', term: 'Memory feature', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-46', term: 'Personalization', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-47', term: 'User preferences', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-48', term: 'DALL-E integration', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-49', term: 'Image generation', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-50', term: 'Image upload', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-51', term: 'Vision capabilities', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-52', term: 'Image analysis', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-53', term: 'Code generation', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-54', term: 'Python code', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-55', term: 'JavaScript code', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-56', term: 'Debugging assistance', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-57', term: 'Code explanation', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-58', term: 'Web browsing', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-59', term: 'Real-time information', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-60', term: 'Search integration', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-61', term: 'ChatGPT Atlas', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-62', term: 'Browser integration', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-63', term: 'Operator', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-64', term: 'Autonomous agents', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-65', term: 'Deep Research', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-66', term: 'Multi-step research', provider: 'chatgpt', level: 'intermediate', selected: false },
          { id: 'chatgpt-67', term: 'ChatGPT Go', provider: 'chatgpt', level: 'intermediate', selected: false },
          // ADVANCED (68-100)
          { id: 'chatgpt-68', term: 'API access', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-69', term: 'API key', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-70', term: 'Endpoint', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-71', term: 'Rate limiting', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-72', term: 'Usage quotas', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-73', term: 'Streaming responses', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-74', term: 'Function calling', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-75', term: 'Tool use', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-76', term: 'JSON mode', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-77', term: 'Structured outputs', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-78', term: 'Embeddings', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-79', term: 'Vector databases', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-80', term: 'Fine-tuning', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-81', term: 'Custom models', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-82', term: 'Training data', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-83', term: 'Chain-of-thought', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-84', term: 'Reasoning steps', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-85', term: 'Self-consistency', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-86', term: 'Safety filters', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-87', term: 'Content moderation', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-88', term: 'Ethical AI use', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-89', term: 'Privacy settings', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-90', term: 'Data retention', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-91', term: 'Shared conversations', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-92', term: 'Markdown formatting', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-93', term: 'LaTeX support', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-94', term: 'Code execution', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-95', term: 'File uploads', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-96', term: 'Document analysis', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-97', term: 'Summarization', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-98', term: 'Translation', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-99', term: 'Sentiment analysis', provider: 'chatgpt', level: 'advanced', selected: false },
          { id: 'chatgpt-100', term: 'Advanced prompting strategies', provider: 'chatgpt', level: 'advanced', selected: false }
        ]
      },
      {
        id: 'claude',
        name: 'Claude (Anthropic)',
        expanded: true,
        terms: [
          // BEGINNER (1-33)
          { id: 'claude-1', term: 'Claude', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-2', term: 'Anthropic', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-3', term: 'Claude.ai', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-4', term: 'Conversation', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-5', term: 'Prompt', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-6', term: 'Response', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-7', term: 'AI assistant', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-8', term: 'Chat interface', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-9', term: 'Message', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-10', term: 'Query', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-11', term: 'Projects', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-12', term: 'Project knowledge', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-13', term: 'Document upload', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-14', term: 'Context window', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-15', term: '200K context', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-16', term: 'Claude Sonnet 4.5', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-17', term: 'Claude Sonnet 4', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-18', term: 'Claude Opus 4.1', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-19', term: 'Claude Opus 4', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-20', term: 'Claude Haiku 4.5', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-21', term: 'Model family', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-22', term: 'Free tier', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-23', term: 'Pro subscription', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-24', term: 'Team plan', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-25', term: 'Max plan', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-26', term: 'Enterprise plan', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-27', term: 'Extended thinking', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-28', term: 'Hybrid reasoning', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-29', term: 'Standard responses', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-30', term: 'Thinking mode', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-31', term: 'Artifacts', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-32', term: 'Code artifacts', provider: 'claude', level: 'beginner', selected: false },
          { id: 'claude-33', term: 'React components', provider: 'claude', level: 'beginner', selected: false },
          // INTERMEDIATE (34-67)
          { id: 'claude-34', term: 'HTML generation', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-35', term: 'Interactive visualizations', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-36', term: 'Markdown rendering', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-37', term: 'SVG creation', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-38', term: 'Skills', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-39', term: 'Skill files', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-40', term: 'SKILL.md', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-41', term: 'Document creation skills', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-42', term: 'PPTX creation', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-43', term: 'DOCX creation', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-44', term: 'XLSX creation', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-45', term: 'PDF creation', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-46', term: 'Claude Code', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-47', term: 'Coding agent', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-48', term: 'Terminal integration', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-49', term: 'VS Code extension', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-50', term: 'JetBrains integration', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-51', term: 'GitHub Actions', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-52', term: 'Background tasks', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-53', term: 'Code execution tool', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-54', term: 'Files API', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-55', term: 'Local file access', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-56', term: 'Memory capabilities', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-57', term: 'Computer use', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-58', term: 'Browser control', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-59', term: 'Claude for Chrome', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-60', term: 'Screen interpretation', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-61', term: 'Constitutional AI', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-62', term: 'Harmlessness', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-63', term: 'Honesty', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-64', term: 'Helpfulness', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-65', term: 'Safety guidelines', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-66', term: 'Prompt engineering', provider: 'claude', level: 'intermediate', selected: false },
          { id: 'claude-67', term: 'Clear instructions', provider: 'claude', level: 'intermediate', selected: false },
          // ADVANCED (68-100)
          { id: 'claude-68', term: 'Step-by-step thinking', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-69', term: 'Chain-of-thought', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-70', term: 'Self-reflection', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-71', term: 'Code generation', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-72', term: 'Python programming', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-73', term: 'Debugging assistance', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-74', term: 'Algorithm explanation', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-75', term: 'Software architecture', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-76', term: 'Analysis capabilities', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-77', term: 'Document summarization', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-78', term: 'Research assistance', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-79', term: 'Writing support', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-80', term: 'Technical documentation', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-81', term: 'Vision capabilities', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-82', term: 'Image understanding', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-83', term: 'Multi-modal inputs', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-84', term: 'API access', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-85', term: 'Anthropic API', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-86', term: 'Anthropic SDK', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-87', term: 'MCP (Model Context Protocol)', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-88', term: 'MCP connector', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-89', term: 'Tool use', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-90', term: 'Parallel tool execution', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-91', term: 'Function calling', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-92', term: 'Streaming responses', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-93', term: 'Rate limits', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-94', term: 'Usage tracking', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-95', term: 'Workspaces', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-96', term: 'Shared conversations', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-97', term: 'Custom instructions', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-98', term: 'Temperature control', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-99', term: 'Max tokens', provider: 'claude', level: 'advanced', selected: false },
          { id: 'claude-100', term: 'Stop sequences', provider: 'claude', level: 'advanced', selected: false }
        ]
      },
      {
        id: 'gemini',
        name: 'Gemini (Google)',
        expanded: true,
        terms: [
          // BEGINNER (1-33)
          { id: 'gemini-1', term: 'Gemini', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-2', term: 'Google AI', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-3', term: 'Google DeepMind', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-4', term: 'Bard (previous name)', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-5', term: 'Prompt', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-6', term: 'Response', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-7', term: 'Conversation', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-8', term: 'AI chatbot', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-9', term: 'Chat interface', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-10', term: 'Query', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-11', term: 'Message', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-12', term: 'Gemini app', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-13', term: 'New chat', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-14', term: 'Chat history', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-15', term: 'Temporary Chat', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-16', term: 'Gemini 2.5 Pro', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-17', term: 'Gemini 2.5 Flash', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-18', term: 'Gemini 2.5 Pro Deep Think', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-19', term: 'Deep Think reasoning', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-20', term: 'Thinking budget', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-21', term: 'Thought summaries', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-22', term: 'Free access', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-23', term: 'Google AI Pro', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-24', term: 'Google AI Ultra', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-25', term: 'Model versions', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-26', term: 'Context window', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-27', term: 'Multi-million token context', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-28', term: 'Temperature', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-29', term: 'Top-k sampling', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-30', term: 'Top-p sampling', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-31', term: 'System instructions', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-32', term: 'Prompt engineering', provider: 'gemini', level: 'beginner', selected: false },
          { id: 'gemini-33', term: 'Multi-turn dialogue', provider: 'gemini', level: 'beginner', selected: false },
          // INTERMEDIATE (34-67)
          { id: 'gemini-34', term: 'Grounding', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-35', term: 'Google Search integration', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-36', term: 'Real-time information', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-37', term: 'Web search', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-38', term: 'Source citations', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-39', term: 'Extensions', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-40', term: 'Gmail integration', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-41', term: 'Google Docs integration', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-42', term: 'Google Drive access', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-43', term: 'Google Maps integration', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-44', term: 'Google Calendar integration', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-45', term: 'YouTube integration', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-46', term: 'Workspace integration', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-47', term: 'Agent Mode', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-48', term: 'Autonomous task completion', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-49', term: 'Gemini Live', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-50', term: 'Voice conversation', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-51', term: 'Affective Dialogue', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-52', term: 'Proactive Audio', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-53', term: 'Native audio', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-54', term: 'Text-to-speech', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-55', term: 'Multi-speaker support', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-56', term: 'Gemini in Chrome', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-57', term: 'Gemini in navigation', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-58', term: 'Landmark navigation', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-59', term: 'Computer Use model', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-60', term: 'Browser automation', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-61', term: 'UI automation', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-62', term: 'Code generation', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-63', term: 'Python coding', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-64', term: 'JavaScript programming', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-65', term: 'Code execution', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-66', term: 'Algorithm design', provider: 'gemini', level: 'intermediate', selected: false },
          { id: 'gemini-67', term: 'Imagen 4', provider: 'gemini', level: 'intermediate', selected: false },
          // ADVANCED (68-100)
          { id: 'gemini-68', term: 'Image generation', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-69', term: 'Gemini 2.5 Flash Image', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-70', term: 'Image upload', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-71', term: 'Image editing', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-72', term: 'Image understanding', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-73', term: 'Multi-modal inputs', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-74', term: 'Vision capabilities', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-75', term: 'Veo 3', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-76', term: 'Video generation', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-77', term: 'Canvas', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-78', term: 'Create menu', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-79', term: 'Vibe coding', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-80', term: 'Interactive prototypes', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-81', term: 'Guided Learning', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-82', term: 'Practice quizzes', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-83', term: 'Quiz generation', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-84', term: 'Homework help', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-85', term: 'API access', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-86', term: 'Gemini API', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-87', term: 'Google AI Studio', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-88', term: 'Vertex AI', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-89', term: 'API key', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-90', term: 'Rate limiting', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-91', term: 'Batch API', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-92', term: 'Function calling', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-93', term: 'Tool use', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-94', term: 'JSON mode', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-95', term: 'Structured outputs', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-96', term: 'Safety settings', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-97', term: 'Content filtering', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-98', term: 'Responsible AI', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-99', term: 'Embeddings API', provider: 'gemini', level: 'advanced', selected: false },
          { id: 'gemini-100', term: 'Live API', provider: 'gemini', level: 'advanced', selected: false }
        ]
      },
      {
        id: 'perplexity',
        name: 'Perplexity AI',
        expanded: true,
        terms: [
          // BEGINNER (1-33)
          { id: 'perplexity-1', term: 'Perplexity', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-2', term: 'Perplexity AI', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-3', term: 'Answer engine', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-4', term: 'AI search', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-5', term: 'Search interface', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-6', term: 'Query', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-7', term: 'Prompt', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-8', term: 'Response', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-9', term: 'Conversation', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-10', term: 'Thread', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-11', term: 'Follow-up question', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-12', term: 'Web search', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-13', term: 'Real-time search', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-14', term: 'Source citations', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-15', term: 'Inline citations', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-16', term: 'Referenced sources', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-17', term: 'Source links', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-18', term: 'Credible sources', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-19', term: 'Up-to-date information', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-20', term: 'Current events', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-21', term: 'Free tier', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-22', term: 'Pro subscription', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-23', term: 'Enterprise Pro', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-24', term: 'Enterprise Max', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-25', term: 'Sonar', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-26', term: 'Sonar model', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-27', term: 'R1-1776', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-28', term: 'Model selection', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-29', term: 'Focus modes', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-30', term: 'All sources', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-31', term: 'Academic focus', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-32', term: 'Writing focus', provider: 'perplexity', level: 'beginner', selected: false },
          { id: 'perplexity-33', term: 'Reddit focus', provider: 'perplexity', level: 'beginner', selected: false },
          // INTERMEDIATE (34-67)
          { id: 'perplexity-34', term: 'YouTube focus', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-35', term: 'Academic papers', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-36', term: 'Scholar search', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-37', term: 'ArXiv integration', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-38', term: 'Deep Research', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-39', term: 'Multi-step analysis', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-40', term: 'Research mode', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-41', term: 'Extended research', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-42', term: 'Perplexity Labs', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-43', term: 'Experimental features', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-44', term: 'Collections', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-45', term: 'Spaces', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-46', term: 'Saved searches', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-47', term: 'Organized research', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-48', term: 'Shared threads', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-49', term: 'Public sharing', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-50', term: 'Thread management', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-51', term: 'Search history', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-52', term: 'Query refinement', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-53', term: 'Related questions', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-54', term: 'Suggested follow-ups', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-55', term: 'Answer format', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-56', term: 'Summary generation', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-57', term: 'Key points extraction', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-58', term: 'Fact verification', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-59', term: 'Multi-source validation', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-60', term: 'Cross-referencing', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-61', term: 'Perplexity Assistant', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-62', term: 'Multi-app integration', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-63', term: 'Context maintenance', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-64', term: 'Voice assistant', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-65', term: 'Comet browser', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-66', term: 'Comet Assistant', provider: 'perplexity', level: 'intermediate', selected: false },
          { id: 'perplexity-67', term: 'Background Assistants', provider: 'perplexity', level: 'intermediate', selected: false },
          // ADVANCED (68-100)
          { id: 'perplexity-68', term: 'Browser integration', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-69', term: 'Email Assistant', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-70', term: 'Gmail connector', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-71', term: 'Calendar connector', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-72', term: 'Notion connector', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-73', term: 'Linear connector', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-74', term: 'GitHub connector', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-75', term: 'Slack connector', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-76', term: 'App connectors', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-77', term: 'File upload', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-78', term: 'Document analysis', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-79', term: 'PDF reading', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-80', term: 'Image upload', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-81', term: 'Image understanding', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-82', term: 'Vision search', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-83', term: 'Shopping Hub', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-84', term: 'Product recommendations', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-85', term: 'Finance features', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-86', term: 'Stock prices', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-87', term: 'Company earnings', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-88', term: 'Patent search', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-89', term: 'Flight status', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-90', term: 'Sports coverage', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-91', term: 'Politician finance tracking', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-92', term: 'API access', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-93', term: 'Perplexity API', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-94', term: 'Search API', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-95', term: 'Citation API', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-96', term: 'Integration options', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-97', term: 'Mobile app', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-98', term: 'Desktop application', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-99', term: 'Image generation', provider: 'perplexity', level: 'advanced', selected: false },
          { id: 'perplexity-100', term: 'Video generation', provider: 'perplexity', level: 'advanced', selected: false }
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

**Time-Based Learning Schedule:**
- Break down the roadmap into daily, weekly, and monthly milestones
- Specify recommended practice time per day/week for each concept
- Include realistic timelines (e.g., "Week 1-2: Learn X, practice 30 min/day")
- Suggest optimal pacing based on difficulty level (beginner/intermediate/advanced)
- Provide checkpoints to assess progress and mastery

**IMPORTANT - Required Deliverable:**
Create an actual Word document (.docx file) with the complete learning roadmap. The document should include:
- Professional formatting with clear section headings for each learning phase
- Bullet points for action items and practice exercises
- Tables for weekly/monthly schedules
- Space for notes and progress tracking
- Milestone celebrations and achievement markers
- Page numbers and a table of contents

**Generate the .docx file directly** so I can download it immediately. Do not just provide text to copy - I need a ready-to-use document file.

Tailor the roadmap specifically for ${providerNames} and help me understand which topics are prerequisites for others. Make the schedule actionable and realistic for someone balancing learning with other commitments.`;

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
