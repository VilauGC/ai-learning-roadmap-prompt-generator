import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GlossaryChecklistComponent } from './components/glossary-checklist/glossary-checklist.component';
import { PromptDisplayComponent } from './components/prompt-display/prompt-display.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AssessmentPageComponent } from './components/assessment-page/assessment-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GlossaryChecklistComponent,
    PromptDisplayComponent,
    LandingPageComponent,
    AssessmentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
