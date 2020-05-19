import { Component, OnInit } from '@angular/core';
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
  constructor(private formBuilder: FormBuilder, private formdataService :ShareFormDataService) { }

  ngOnInit(): void {
    this.createSnippetForm();
  }

  shareFormData(event){
    const snippetFormData : Snippet ={
      description:`${this.snippetForm.value.description}`,
      prefix:`${this.snippetForm.value.prefix}`,
      body:`${this.snippetForm.value.snippet}`,
    }
    console.log(snippetFormData);
    this.formdataService.updatedSnippetData(snippetFormData);


  }


  createSnippetForm() {
    this.snippetForm = this.formBuilder.group({
      description: ['', Validators.required],
      prefix: ['', Validators.required],
      snippet: ['', Validators.required]
    });
  }
}
