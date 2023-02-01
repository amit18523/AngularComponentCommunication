import { Component, OnInit, EventEmitter , Input, Output, OnChanges} from '@angular/core';
import { Vend } from '../vend';
@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit, OnChanges {
  @Input() vendOne : Vend[] = [];
  @Output() deselectVend = new EventEmitter<Vend>();
  constructor() { 
    console.log("here");
  }
  ngOnInit(): void {
  }
  ngOnChanges(){

  }

 
  onClick(vendone : Vend){
    console.log("i have been clicked");
    this.deselectVend.emit(vendone);
  }

}
