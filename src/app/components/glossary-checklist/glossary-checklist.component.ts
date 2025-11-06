import { Component, OnInit } from '@angular/core';
import { GlossaryService } from '../../services/glossary.service';
import { Provider, GlossaryTerm } from '../../models/glossary.model';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-glossary-checklist',
  templateUrl: './glossary-checklist.component.html',
  styleUrls: ['./glossary-checklist.component.scss']
})
export class GlossaryChecklistComponent implements OnInit {
  providers$: Observable<Provider[]>;
  allProviders: Provider[] = [];
  filteredProviders: Provider[] = [];
  selectedProviderIds: string[] = [];
  overallKnownCount: number = 0;
  overallTotalCount: number = 0;
  overallPercentage: number = 0;

  constructor(private glossaryService: GlossaryService) {
    this.providers$ = this.glossaryService.providers$;
  }

  ngOnInit(): void {
    this.allProviders = this.glossaryService.getAllProviders();

    combineLatest([
      this.glossaryService.providers$,
      this.glossaryService.selectedProviderIds$
    ]).subscribe(([providers, selectedIds]) => {
      this.selectedProviderIds = selectedIds;
      this.filteredProviders = providers.filter(p => selectedIds.includes(p.id));
      this.updateOverallProgress();
    });
  }

  updateOverallProgress(): void {
    // Calculate only for selected providers
    const selectedProviders = this.filteredProviders;
    this.overallTotalCount = selectedProviders.reduce((total, provider) => total + provider.terms.length, 0);
    this.overallKnownCount = selectedProviders.reduce((total, provider) =>
      total + provider.terms.filter(t => t.selected).length, 0);
    this.overallPercentage = this.overallTotalCount > 0
      ? Math.round((this.overallKnownCount / this.overallTotalCount) * 100)
      : 0;
  }

  toggleProviderFocus(providerId: string): void {
    this.glossaryService.toggleProviderSelection(providerId);
  }

  isProviderInFocus(providerId: string): boolean {
    return this.selectedProviderIds.includes(providerId);
  }

  toggleTerm(termId: string): void {
    this.glossaryService.toggleTerm(termId);
  }

  toggleAllInProvider(providerId: string, event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.glossaryService.toggleAllInProvider(providerId, checkbox.checked);
  }

  toggleProviderExpanded(providerId: string): void {
    this.glossaryService.toggleProviderExpanded(providerId);
  }

  isAllSelected(provider: Provider): boolean {
    return provider.terms.length > 0 && provider.terms.every(t => t.selected);
  }

  isSomeSelected(provider: Provider): boolean {
    return provider.terms.some(t => t.selected) && !this.isAllSelected(provider);
  }

  getKnownCount(provider: Provider): number {
    return provider.terms.filter(t => t.selected).length;
  }

  getKnowledgePercentage(provider: Provider): number {
    if (provider.terms.length === 0) return 0;
    const known = this.getKnownCount(provider);
    return Math.round((known / provider.terms.length) * 100);
  }
}
