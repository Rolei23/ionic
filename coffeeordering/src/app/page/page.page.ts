import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage implements OnInit {
ESPRESSO
AMERICANO
MACCHIATO
LATTE
CAPUCCINO
num:number=0;
amount:number=0
number:number=0
prESPRESSO:number=0;
prAMERICANO:number=0
prMACCHIATO:number=0

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  click(){
    console.log(this.prESPRESSO);
    this.router.navigate(['/orders'], { queryParams:{ prESPRESSO:this.prESPRESSO}});
  }
  click1(){
    console.log(this.prAMERICANO);
    this.router.navigate(['/americano'], { queryParams:{ prAMERICANO:this.prAMERICANO}});
  }
  click2(){
    console.log(this.prMACCHIATO);
         this.router.navigate(['/macchiato'], { queryParams:{ prMACCHIATO:this.prMACCHIATO}});
  }
  minus(){
    console.log(this.num-=1)
    console.log(this.prESPRESSO-=34)

    if(this.num <=0){
      this.num = 0;
    }
    
  }
  minus1(){
   
    console.log(this.amount-=1)
    console.log(this.prAMERICANO-=27)

    if(this.amount <=0){
      this.amount = 0;
    }
   
  }
  minus2(){
    
    console.log(this.number-=1)
    console.log(this.prMACCHIATO-=38)

    if(this.number <=0){
      this.number = 0;
    }
  }
  add(){
    console.log(this.num+=1)
    console.log(this.prESPRESSO+=34)

  }
  add1(){
    
    console.log(this.amount+=1)
    console.log(this.prAMERICANO+=27)

  }
  add2(){
  
    console.log(this.number+=1)
    console.log(this.prMACCHIATO+=38)
  }
}
  
    

