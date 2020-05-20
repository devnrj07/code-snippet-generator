import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ShareFormDataService } from 'src/app/services/share-form-data.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Snippet } from 'src/app/common/model/snippet';

@Component({
  selector: 'app-snippet-form',
  templateUrl: './snippet-form.component.html',
  styleUrls: ['./snippet-form.component.css']
})
export class SnippetFormComponent implements OnInit {
  snippetForm: FormGroup;
  snippetFormData: Snippet;
  @ViewChild('textareaRef') textareaRef: ElementRef
  constructor(private formBuilder: FormBuilder,
    private formdataService: ShareFormDataService) { }

  ngOnInit(): void {
    this.createSnippetForm();
  }

  shareFormData(event) {
    this.formdataService.updatedSnippetData(this.getSinppet());
    this.addPlaceHolder(event);
  }

  addPlaceHolder(event) {

    if (
      event.keyCode === 73 &&
      (event.ctrlKey || event.metaKey) &&
      document.activeElement === this.textareaRef.nativeElement
    ) {
      event.preventDefault();
      const initialSelectionStart = this.textareaRef.nativeElement.selectionStart;
      const initialSelectionEnd = this.textareaRef.nativeElement.selectionEnd;
      const stringBeforeCaret = this.textareaRef.nativeElement.value.substr(
        0,
        initialSelectionStart
      );
      const stringAfterCaret = this.textareaRef.nativeElement.value.substr(
        initialSelectionEnd,
        this.textareaRef.nativeElement.textLength
      );

      const newValue = `${stringBeforeCaret}\${1:example}${stringAfterCaret}`;

      this.textareaRef.nativeElement.value = newValue;
      this.setSnippet(newValue);
      this.textareaRef.nativeElement.selectionStart = initialSelectionStart + 4;
      this.textareaRef.nativeElement.selectionEnd = initialSelectionStart + 11;

    }

  }

  createSnippetForm() {
    this.snippetForm = this.formBuilder.group({
      description: ['', Validators.required],
      prefix: ['', Validators.required],
      snippet: ['', Validators.required]
    });
  }

  getSinppet(): Snippet {
    this.snippetFormData = {
      description: `${this.snippetForm.value.description}`,
      prefix: `${this.snippetForm.value.prefix}`,
      body: `${this.snippetForm.value.snippet}`,
    }
    return this.snippetFormData;
  }

  setSnippet(body: string) {
    this.snippetFormData = {
      description: `${this.snippetForm.value.description}`,
      prefix: `${this.snippetForm.value.prefix}`,
      body,
    }
  }
}
