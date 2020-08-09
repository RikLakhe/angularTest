import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {CampingService} from '../services/camping.service';

@Component({
  selector: 'app-system-camping-info',
  template: `
    <p>
      INFORMATION
    </p>
    <strong>{{info}}</strong>
  `,
  styles: [
  ]
})
export class SystemCampingInfoComponent implements OnInit {
  id: string;
  info: string;

  constructor(private route : ActivatedRoute, private systemService : CampingService) { }

  ngOnInit(): void {
    this.route.parent.paramMap.subscribe((params: ParamMap)=>{
      this.id = params.get('id')

      this.systemService.getCampingInfo(parseInt(this.id)-1).subscribe(data=>{
        this.doSomething(data)
      })
    })
  }

  private doSomething(data):void{
    this.info = data
  }
}
