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
  // isConclued: string = true

  ngOnInit(): void {

    this.courses = [
      {
        courseNumber: 8,
        courseName: "Wordpress na Prática", 
        courseInstitution: "Rock University",
        courseHours: '-',
        courseDate: 'february, 06, 2023',
        courseConclued: 'In progress'
      },
      {
        courseNumber: 7,
        courseName: "Node.js", 
        courseInstitution: "Jornada do Dev",
        courseHours: '-',
        courseDate: 'january, 31, 2023',
        courseConclued: 'In progress'
      },
      {
        courseNumber: 6,
        courseName: "Banco de Dados", 
        courseInstitution: "IF Sul-Rio-Grandense",
        courseHours: '40',
        courseDate: 'january, 23, 2023',
        courseConclued: 'Concluded'
      },
      {
        courseNumber: 5,
        courseName: "Linguagem Javascript", 
        courseInstitution: "IF Sul-Rio-Grandense",
        courseHours: '20',
        courseDate: 'january, 18, 2023',
        courseConclued: 'Concluded'
      },
      {
        courseNumber: 4,
        courseName: "Full Stack", 
        courseInstitution: "Entra21", 
        courseHours: '480',
        courseDate: 'october, 21, 2022',
        courseConclued: 'Concluded'
      },
      {
        courseNumber: 3,
        courseName: "Santander Bootcamp Fullstack Developer", 
        courseInstitution: "Digital Innovation One", 
        courseHours: '120',
        courseDate: 'august, 3, 2022',
        courseConclued: 'Concluded'
      },
      {
        courseNumber: 2,
        courseName: "Introdução ao HTML + CSS", 
        courseInstitution: "Escola DNC", 
        courseHours: '5',
        courseDate: 'july, 22, 2022',
        courseConclued: 'Concluded'
      },
      {
        courseNumber: 1,
        courseName: "ProgramAção com App Inventor", 
        courseInstitution: "Recode", 
        courseHours: '40',
        courseDate: 'march, 25, 2022',
        courseConclued: 'Concluded'
      }
    ]

    // this.concluded()

  }


  // concluded() {


  //   for (let i = 0; i < this.courses.length; i++) {

      
  //     if (this.courses[i].courseConclued === true) {
  //       console.log(this.courses[i].courseConclued)
  //       this.isConclued = true
  //       console.log(this.isConclued)
  //     } else {
  //       this.isConclued = false
  //       console.log(this.isConclued)
  //     }

  //   }

  //   }
    
  
}
