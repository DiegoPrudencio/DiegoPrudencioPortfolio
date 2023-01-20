import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/interface/course';

@Component({
  selector: 'app-techstack',
  templateUrl: './techstack.component.html',
  styleUrls: ['./techstack.component.css']
})
export class TechstackComponent implements OnInit {

  constructor(private router: Router) { }

  courses: Course[] = [];
  isConclued: boolean = true

  ngOnInit(): void {

    this.courses = [
      {
        courseNumber: 1,
        courseName: "Linguagem Javascript", 
        courseInstitution: "IF Sul-Rio-Grandense",
        courseHours: '20',
        courseDate: 'january, 18, 2023',
        courseConclued: true
      },
      {
        courseNumber: 2,
        courseName: "Full Stack", 
        courseInstitution: "Entra21", 
        courseHours: '480',
        courseDate: 'october, 21, 2022',
        courseConclued: true
      },
      {
        courseNumber: 4,
        courseName: "ProgramAção com App Inventor", 
        courseInstitution: "Recode", 
        courseHours: '40',
        courseDate: 'march, 25, 2022',
        courseConclued: true
      },
      {
        courseNumber: 5,
        courseName: "Santander Bootcamp Fullstack Developer", 
        courseInstitution: "Digital Innovation One", 
        courseHours: '120',
        courseDate: 'august, 3, 2022',
        courseConclued: false
      },
      {
        courseNumber: 6,
        courseName: "ProgramAção com App Inventor", 
        courseInstitution: "Recode", 
        courseHours: '40',
        courseDate: 'march, 25, 2022',
        courseConclued: true
      }
    ]

    this.concluded()

  }


  concluded() {


    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].courseConclued === true) {
        console.log(this.courses[i].courseConclued)
        this.isConclued = true
        console.log(this.isConclued)
      } else {
        this.isConclued = false
        console.log(this.isConclued)
      }

    }

    }
    
  
}
