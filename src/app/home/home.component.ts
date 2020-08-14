import {Component, OnInit} from '@angular/core';
import {LessonsService} from '../services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  themeColor = 'magenta';
  welcomeText = 'hello master class';
  selectedLesson = undefined;
  courseLessons = [];

  constructor(private lessonsService : LessonsService) {
  }

  ngOnInit(): void {
    this.courseLessons = this.lessonsService.lessons
  }

  updateColor(){
    this.themeColor='salmon'
  }

  lessonSelector(lesson){
    this.selectedLesson = lesson
  }

}
