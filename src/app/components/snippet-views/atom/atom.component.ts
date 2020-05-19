import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Snippet } from 'src/app/common/model/snippet';
import { ShareFormDataService } from 'src/app/services/share-form-data.service';
@Component({
  selector: 'app-atom',
  templateUrl: './atom.component.html',
  styleUrls: ['./atom.component.css']
})
export class AtomComponent implements OnInit {

  $snippetData: Observable<Snippet>;
  constructor(private snippetDataService: ShareFormDataService) { }

  ngOnInit(): void {
    this.$snippetData = this.snippetDataService.getSnippet();
    //this.snippetDataService.snippetDataObservable.subscribe(data => this.snippetData = data);
    console.log('atom', this.$snippetData)
  }

  logSuccess(value: string): void {
    console.group("Clipboard Success");
    console.log(value);
    console.groupEnd();
  }
  logError(error: Error): void {
    console.group("Clipboard Error");
    console.error(error);
    console.groupEnd();
  }



}
