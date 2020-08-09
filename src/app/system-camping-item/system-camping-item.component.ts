import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {CampingService} from '../services/camping.service';

@Component({
  selector: 'app-system-camping-item',
  template: `
    <p>
      ITEMS
    </p>
    <ul>
      <li *ngFor="let item of items">{{item}}</li>
    </ul>
  `,
  styles: [
  ]
})
export class SystemCampingItemComponent implements OnInit {
  id: string;
  items: [];

  constructor(private route : ActivatedRoute, private systemService : CampingService) { }

  ngOnInit(): void {
    this.route.parent.paramMap.subscribe((params: ParamMap)=>{
      this.id = params.get('id')

      this.systemService.getCampingItem(parseInt(this.id)-1).subscribe(data=>{
        this.doSomething(data)
      })
    })
  }

  private doSomething(data):void{
    this.items = data
  }

}
