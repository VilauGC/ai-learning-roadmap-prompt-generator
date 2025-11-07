import { Component, OnInit } from '@angular/core';
import { GlossaryService } from '../../services/glossary.service';

@Component({
  selector: 'app-prompt-display',
  templateUrl: './prompt-display.component.html',
  styleUrls: ['./prompt-display.component.scss']
})
export class PromptDisplayComponent implements OnInit {
  prompt: string = '';
  knownCount: number = 0;
  totalCount: number = 0;
  knowledgePercentage: number = 0;
  encouragingMessage: string = '';
  focusedProviders: string = '';
  copied: boolean = false;
  showModal: boolean = false;

  constructor(private glossaryService: GlossaryService) {}

  ngOnInit(): void {
    this.glossaryService.providers$.subscribe(() => {
      this.updateKnowledgeStats();
      this.prompt = this.glossaryService.generatePrompt();
    });

    this.glossaryService.selectedProviderIds$.subscribe(() => {
      this.updateKnowledgeStats();
      this.prompt = this.glossaryService.generatePrompt();
    });
  }

  updateKnowledgeStats(): void {
    this.knownCount = this.glossaryService.getKnownCount();
    this.totalCount = this.glossaryService.getTotalCount();
    this.knowledgePercentage = this.glossaryService.getKnowledgePercentage();
    this.encouragingMessage = this.glossaryService.getEncouragingMessage();

    const selectedProviders = this.glossaryService.getSelectedProviders();
    this.focusedProviders = selectedProviders.map(p => p.name).join(', ');
  }

  copyToClipboard(): void {
    if (!this.prompt) return;

    navigator.clipboard.writeText(this.prompt).then(() => {
      this.copied = true;
      this.showModal = true;
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }

  redirectToStripe(): void {
    window.location.href = "https://donate.stripe.com/test_6oUcN72Ly2gX7wX5EUgMw00";
  }

  closeModal(): void {
    this.showModal = false;
  }

  get hasKnowledgeGaps(): boolean {
    return this.knownCount < this.totalCount;
  }

  get isFullKnowledge(): boolean {
    return this.knownCount === this.totalCount && this.totalCount > 0;
  }

  get wordCount(): number {
    return this.prompt.split(/\s+/).filter(word => word.length > 0).length;
  }

  get characterCount(): number {
    return this.prompt.length;
  }
}
