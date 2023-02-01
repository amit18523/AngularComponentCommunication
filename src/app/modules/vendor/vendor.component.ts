import { Component, OnInit , EventEmitter} from '@angular/core';
import { Vend } from './vend';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  titleHere = 'this title';
  constructor() { }

  vend: Vend[] = [];
  vendOne: Vend[] = [];
  ngOnInit() {
    this.vend = [
      {
        name: "Abc",
        age: 21,
        city: "banglore",

      },
      {
        name: "Xyz",
        age: 22,
        city: "Pune",

      },
      {
        name: "Efg",
        age: 23,
        city: "Delhi",

      },
      {
        name: "MNOP",
        age: 23,
        city: "Delhi",

      },
      {
        name: "Qrst",
        age: 23,
        city: "Delhi",

      }
    ]
    this.vendOne =[
      {
        name: "Amit",
        age: 23,
        city: "Delhi",

      }
    ]
  }
  otherVend(vendor: Vend) {
    console.log(vendor);
    this.vendOne.push(vendor);
    let index : string = vendor.name;
    for(let i = 0; i < this.vend.length; i++){
      if(vendor.name == this.vend[i].name){
        this.vend.splice(i, 1);
        break;
      }
    }
  }
  deselectVend(vendor : Vend){
    console.log(vendor.age + "" + vendor.name + " " + vendor.city);
    this.vend.push(vendor);
    let index : string = vendor.name;
    for(let i = 0; i < this.vendOne.length; i++){
      if(vendor.name == this.vendOne[i].name){
        this.vendOne.splice(i, 1);
        break;
      }
    }
  }
}
