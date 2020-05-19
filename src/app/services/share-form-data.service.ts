import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Snippet } from '../common/model/snippet';

const defaultSnippet: Snippet = {
  description: "",
  prefix: "",
  body: ""
}

@Injectable({
  providedIn: 'root'
})
export class ShareFormDataService {

  private snippetDataSource = new BehaviorSubject<Snippet>(defaultSnippet);
  private snippetData = this.snippetDataSource.asObservable();
  constructor() { }

  updatedSnippetData(data: Snippet) {
    this.snippetDataSource.next(data);
  }

  public getSnippet(): Observable<Snippet> {
    return this.snippetData;
  }
}
