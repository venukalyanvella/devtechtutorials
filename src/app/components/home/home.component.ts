import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  courses:any=[];

  constructor() { }

  ngOnInit(): void {

    this.courses =[
      {
        name:'Angular',
        image:'assets/images/courses/angular.png',
        content:'A Step by step tutorial for beginners to learn all the features of the Angular.',
        status:true      },
      {
        name:'JavaScript',
        image:'assets/images/courses/javaScript.png',
        content:'This is a simple tutorial for beginners to professionals to learn all the features of the JavaScript',
        status:true
      },
      {
        name:'TypeScript',
        image:'assets/images/courses/typescript.png',
        content:'This Simple and step by step tutorial for beginners Covers covers the Typescript language',
        status:true
      }
      ,
      {
        name:'Mysql',
        image:'assets/images/courses/mysql.jpg',
        content:'This Simple and step by step tutorial for beginners Covers covers the Typescript language',
        status:true
      }
      ,
      {
        name:'Visual Studio',
        image:'assets/images/courses/vs.jpeg',
        content:'This Simple and step by step tutorial for beginners Covers covers the Typescript language',
        status:true
      }

      ,

      {
        name:'Jquery',
        image:'assets/images/courses/jquery.png',
        content:'This Simple and step by step tutorial for beginners Covers covers the Typescript language',
        status:false
      },

      {
        name:'Php',
        image:'assets/images/courses/php.png',
        content:'This Simple and step by step tutorial for beginners Covers covers the Typescript language',
        status:false
      },

      {
        name:'Bootstrap',
        image:'assets/images/courses/bootstrap.png',
        content:'This Simple and step by step tutorial for beginners Covers covers the Typescript language',
        status:false
      }

    ]
  }

}
