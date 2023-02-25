import { Injectable } from '@angular/core';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TelegramService{

  telegram: any
  constructor() {
    // @ts-ignore
    if (window.Telegram) {
      // @ts-ignore
      this.telegram = window.Telegram.WebApp
    }
    console.log(this.telegram)
  }

  close() {
    if (this.telegram) {
      this.telegram.close()
    }
  }
}
