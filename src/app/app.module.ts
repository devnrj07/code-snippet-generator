import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SnippetFormComponent } from './components/snippet-form/snippet-form.component';
import { SnippetDisplayComponent } from './components/snippet-display/snippet-display.component';
import { VscodeComponent } from './components/snippet-views/vscode/vscode.component';
import { SublimeComponent } from './components/snippet-views/sublime/sublime.component';
import { AtomComponent } from './components/snippet-views/atom/atom.component';
import { SnippetPipe } from './common/pipe/snippet.pipe';
import { CopyToClipboardDirective } from './common/directive/copy-to-clipboard.directive';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SnippetFormComponent,
    SnippetDisplayComponent,
    VscodeComponent,
    SublimeComponent,
    AtomComponent,
    SnippetPipe,
    CopyToClipboardDirective,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
