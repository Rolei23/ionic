import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
Q1
Q2
Q3
Q4
Q5
result1=true;
result2=false;
result3=false;
result4=false;
result5=false;


submit(){
  console.log(this.Q1)
  console.log(this.Q2)
  console.log(this.Q3)
  console.log(this.Q4)
  console.log(this.Q5)
}
  constructor(private router: Router, private route: ActivatedRoute) {}
  next(){
    this.result1=false;
    this.result2=true;
    
    console.log(this.Q1)
  }
  next1(){
    this.result2=false;
    this.result3=true;
    
    console.log(this.Q2)
  }
  next2(){
    this.result3=false;
    this.result4=true;
    
    console.log(this.Q3)
  }
  next3(){
    this.result4=false;
    this.result5=true;
    
    console.log(this.Q4)
  }
  next4(){
    this.result5=false;
    // this.result2=true;
    
    console.log(this.Q5)
  }
letsbegin() {
  this.router.navigateByUrl("quizz")
}
musicquizz(){
  this.router.navigateByUrl("quizz")
}
foodquizz(){
  this.router.navigateByUrl("quizz1")
}
naturequizz(){
  this.router.navigateByUrl("quizz2")
}
sportquizz(){
  this.router.navigateByUrl("quizz3")
}
}
