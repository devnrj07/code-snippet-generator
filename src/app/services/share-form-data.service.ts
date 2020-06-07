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
  private appThemeSource = new BehaviorSubject<String>('vscodeTheme');
  private appThemeData = this.appThemeSource.asObservable();
  constructor() { }

  updatedSnippetData(data: Snippet) {
    this.snippetDataSource.next(data);
  }

  public getSnippet(): Observable<Snippet> {
    return this.snippetData;
  }

  updateAppTheme(theme: String){
    this.appThemeSource.next(theme);
    //document.documentElement.style.setProperty()
  }

  public getTheme():Observable<String> {
    return this.appThemeData;
  }
}
