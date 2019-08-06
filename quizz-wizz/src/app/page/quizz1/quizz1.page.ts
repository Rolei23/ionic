import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quizz1',
  templateUrl: './quizz1.page.html',
  styleUrls: ['./quizz1.page.scss'],
})
export class Quizz1Page implements OnInit {
  // Q1
  // Q2
  // Q3
  // Q4
  // Q5
  Q6
  Q7
  Q8
  Q9
  Q10
  result1=true;
  result2=false;
  result3=false;
  result4=false;
  result5=false;
  
  
  // submit(){
  //   console.log(this.Q1)
  //   console.log(this.Q2)
  //   console.log(this.Q3)
  //   console.log(this.Q4)
  //   console.log(this.Q5)
  // }
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  next(){
    this.result1=false;
    this.result2=true;
    
    console.log(this.Q6)
  }
  next1(){
    this.result2=false;
    this.result3=true;
    
    console.log(this.Q7)
  }
  next2(){
    this.result3=false;
    this.result4=true;
    
    console.log(this.Q8)
  }
  next3(){
    this.result4=false;
    this.result5=true;
    
    console.log(this.Q9)
  }
  next4(){
    this.result5=false;
  
    
    console.log(this.Q10)
  }
pass() {
  this.router.navigateByUrl("quizz2")
}
}
