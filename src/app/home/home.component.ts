import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  themeColor = 'magenta';
  welcomeText = 'hello master class';
  selectedLesson = undefined;
  courseLessons = [
    {title: 'course book number 1'},
    {title: 'course book number 2'},
    {title: 'course book number 3'},
    {title: 'course book number 4'},
    {title: 'course book number 5'},
    {title: 'course book number 6'},
    {title: 'course book number 7'},
    {title: 'course book number 8'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  updateColor(){
    this.themeColor='salmon'
  }

  lessonSelector(lesson){
    this.selectedLesson = lesson
  }

}
