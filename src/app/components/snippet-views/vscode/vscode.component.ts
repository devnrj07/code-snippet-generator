import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Snippet } from 'src/app/common/model/snippet';
import { ShareFormDataService } from 'src/app/services/share-form-data.service';

@Component({
  selector: 'app-vscode',
  templateUrl: './vscode.component.html',
  styleUrls: ['./vscode.component.css']
})
export class VscodeComponent implements OnInit {

  $snippetData: Observable<Snippet>;
  constructor(private snippetDataService: ShareFormDataService) { }

  ngOnInit(): void {
    this.$snippetData = this.snippetDataService.getSnippet();
    //this.snippetDataService.snippetDataObservable.subscribe(data => this.snippetData = data);
    console.log('atom', this.$snippetData)
  }

  logError(error: Error): void {
    console.group("Clipboard Error");
    console.error(error);
    console.groupEnd();
  }

  logSuccess(value: string): void {
    console.group("Clipboard Success");
    console.log(value);
    console.groupEnd();
  }

}
