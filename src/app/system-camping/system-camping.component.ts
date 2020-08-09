import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Camp} from '../camp';
import {CampingService} from '../services/camping.service';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-system-camping',
  templateUrl: './system-camping.component.html',
  styleUrls: ['./system-camping.component.css']
})
export class SystemCampingComponent implements OnInit {
  campingDetails: Camp[];

  id: string;
  title: string;
  desc: string;

  constructor(private campingService: CampingService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.campingService.getCampingDetails().subscribe(data => {
      this.doSomething(data);
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');

      this.title = this.campingDetails ? this.campingDetails[parseInt(this.id)-1].title : undefined
      this.desc = this.campingDetails ? this.campingDetails[parseInt(this.id)-1].description : undefined

    });
  }

  private doSomething(data): void {
    this.campingDetails = data;

    this.title = data[parseInt(this.id)-1].title
    this.desc = data[parseInt(this.id)-1].description
  }

}
