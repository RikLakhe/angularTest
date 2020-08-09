import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-aboutdetail',
  templateUrl: './aboutdetail.component.html',
  styleUrls: ['./aboutdetail.component.css']
})
export class AboutdetailComponent implements OnInit {
  id: string;
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap)=>{
            this.id= params.get("id")
    })
  }

}
