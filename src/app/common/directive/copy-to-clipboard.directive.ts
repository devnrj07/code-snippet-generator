import { Directive, EventEmitter } from '@angular/core';
import { ClipboardService } from 'src/app/services/clipboard.service';

@Directive({
  selector: '[clipboard]',
  inputs: ['value: clipboard'],
  outputs: [
    "copyEvent: clipboardCopy",
    "errorEvent: clipboardError"
  ],
  host: {
    "(click)": "copyToClipboard()"
  }
})
export class CopyToClipboardDirective {

  private copyEvent: EventEmitter<string>;
  private errorEvent: EventEmitter<Error>;
  private value: string;

  constructor(private clipBoardService: ClipboardService) {
    this.copyEvent = new EventEmitter();
    this.errorEvent = new EventEmitter();
    this.value = "";
  }

  copyToClipboard(): void {
    this.clipBoardService.copy(this.value)
      .then((value: string): void => {
        this.copyEvent.emit(value);
      }).catch((error: Error): void => {
        this.errorEvent.emit(error);
      });

  }

}
