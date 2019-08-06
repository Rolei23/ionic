import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quizz3',
  templateUrl: './quizz3.page.html',
  styleUrls: ['./quizz3.page.scss'],
})
export class Quizz3Page implements OnInit {
  // Q1
  // Q2
  // Q3
  // Q4
  // Q5
  Q16
  Q17
  Q18
  Q19
  Q20
  result1=true;
  result2=false;
  result3=false;
  result4=false;
  result5=false;
  
  
  submit(){
    console.log(this.Q16)
    console.log(this.Q17)
    console.log(this.Q18)
    console.log(this.Q19)
    console.log(this.Q20)
    this.router.navigateByUrl("results")
  }
  constructor(private router: Router, private route: ActivatedRoute) { }
  next(){
    this.result1=false;
    this.result2=true;
    
    console.log(this.Q16)
  }
  next1(){
    this.result2=false;
    this.result3=true;
    
    console.log(this.Q17)
  }
  next2(){
    this.result3=false;
    this.result4=true;
    
    console.log(this.Q18)
  }
  next3(){
    this.result4=false;
    this.result5=true;
    
    console.log(this.Q19)
  }
  next4(){
    this.result5=false;
    this.result2=true;
    
    console.log(this.Q20)
  }
// pass() {
//   this.router.navigateByUrl("results")
// }
  ngOnInit() {
  }

}
