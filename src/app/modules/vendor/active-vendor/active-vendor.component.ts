import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Vend } from '../vend';
@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit, OnChanges {

  @Input() vend: Vend[] = [];
  @Input() ok: string = '';
  @Output() selectedVendor = new EventEmitter<Vend>();
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['ok']) {
      this.ok = changes['ok'].currentValue.toUpperCase();
    }
  }
  ngOnInit(): void {
  }
  onClick(vend: Vend) {
    console.log("i have been clicked");
    this.selectedVendor.emit(vend);
  }
}
