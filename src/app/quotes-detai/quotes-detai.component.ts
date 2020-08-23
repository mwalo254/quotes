import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quotes-detai',
  templateUrl: './quotes-detai.component.html',
  styleUrls: ['./quotes-detai.component.css']
})
export class QuotesDetaiComponent implements OnInit {
  @Input() quotes: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  quotesDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}