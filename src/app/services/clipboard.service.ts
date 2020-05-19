import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {
  private dom: Document;
  //loose coupling with DOM 
  constructor(@Inject(DOCUMENT) dom: Document) {
    this.dom = dom;
  }

  copy(data: string) {
    let promise = new Promise(
      (resolve, reject): void => {
        let textArea = null;
        try {
          textArea = this.dom.createElement('textarea');
          textArea.style.height = "0px";
          textArea.style.left = "-100px";
          textArea.style.opacity = "0";
          textArea.style.position = "fixed";
          textArea.style.top = "-100px";
          textArea.style.width = "0px";
          this.dom.body.appendChild(textArea);

          textArea.value = data;
          textArea.select();

          this.dom.execCommand('copy');

          resolve(data);
        } finally {
          if (textArea && textArea.parentNode) {

            textArea.parentNode.removeChild(textArea);

          }
        }
      });
    return (promise);
  }
}
