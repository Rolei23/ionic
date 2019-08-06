import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
 selector: 'app-home',
 templateUrl: 'home.page.html',
 styleUrls: ['home.page.scss'],
})
export class HomePage {
TA=0;
TB=0;
num:number;
 constructor(private router:Router) {}

 press1() {
   console.log(this.TA -= 4)
  }
 press2() {
  console.log(this.TA += 4)
 }
 press3() {
   console.log(this.TA -= 3)
  }
press4(){
  console.log(this.TA=3)
}
 press5() {
  console.log(this.TA -= 2)
 }
 press6() {
   console.log(this.TA = 2)
  }

 press7() {
  console.log(this.TA -= 1)
 }
 press8() {
   console.log(this.TA = 1)
  }

 press9() {
  console.log(this.TB -= 4)
 }
 press10() {
   console.log(this.TB = 4)
  }

 press11() {
  console.log(this.TB -= 3)
 }
 press12() {
   console.log(this.TB = 3)
  }

 press13() {
  console.log(this.TB -= 2)
 }
 press14() {
  console.log(this.TB = 2)
 }
 press15() {
  console.log(this.TB -= 1)
 }
 press16() {
  console.log(this.TB = 1)
 }

 reset() {
   console.log(this.TA =0)
   console.log(this.TB =0)
   this.router.navigateByUrl('/home')
 }
}