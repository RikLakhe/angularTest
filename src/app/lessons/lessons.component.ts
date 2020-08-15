import {Component, Input, OnInit, Output} from '@angular/core';
import {LessonsService} from '../services/lessons.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  themeColor = 'magenta';
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
