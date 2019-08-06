import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
 Q1
 Q2
 Q3
 Q4
 Q5
 Q6
 Q7
 Q8
 Q9
 Q10
 Q11
 Q12
 Q13
 Q14
 Q15
 Q16
 Q17
 Q18
 Q19
 Q20
 total
 status
 disabled=false
 negQ1
 negQ2
 negQ3
 negQ4
 negQ5
 
 negQ6
 negQ7
 negQ8
 negQ9
 negQ10
 negQ11
 negQ12
 negQ13
 negQ14
 negQ15
 negQ16
 negQ17
 negQ18
 negQ19
 negQ20

  constructor(private router: Router, private route: ActivatedRoute) {
    this.total=0
    this.status=""
    this.disabled=false
    this.negQ1=""
    this.negQ2=""
    this.negQ3=""
    this.negQ4=""
    this.negQ5=""

    this.negQ6=""
    this.negQ7=""
    this.negQ8=""
    this.negQ9=""
    this.negQ10=""

    this.negQ11=""
    this.negQ12=""
    this.negQ13=""
    this.negQ14=""
    this.negQ15=""

    this.negQ16=""
    this.negQ17=""
    this.negQ18=""
    this.negQ19=""
    this.negQ20=""


   }
  

  pass() {
    this.router.navigateByUrl("")
  }
  ngOnInit() {
  }
  done(){
    this.router.navigateByUrl("home")
  }
  show() {
if(this.Q1="length"){
     this.total +=1;
     this.negQ1="correct"
   }else{
     this.total=this.total;
     this.negQ1="wrong"

    } if(this.Q2="rhythm"){
      this.total +=1;
      this.negQ2="correct"
    }else{
      this.total=this.total;
      this.negQ2="wrong"

    }if(this.Q3="scale"){
        this.total +=1;
        this.negQ3="correct"
      }else{
        this.total=this.total;
        this.negQ3="wrong"

       } if(this.Q4="notes"){
          this.total +=1;
          this.negQ4="correct"
        }else{
          this.total=this.total;
          this.negQ4="wrong" 
        
      
}if(this.Q5="frequency"){
  this.total +=1;
  this.negQ5="correct"
}else{
  this.total=this.total;
  this.negQ5="wrong" 


}if(this.Q6="Spiced dried meat and dried sausage"){
  this.total +=1;
  this.negQ6="correct"
}else{
  this.total=this.total;
  this.negQ6="wrong"

 }if(this.Q7="All of these are common"){
  this.total +=1;
  this.negQ7="correct"
}else{
  this.total=this.total;
  this.negQ7="wrong"

 }if(this.Q8="Barbecue"){
  this.total +=1;
  this.negQ8="correct"
}else{
  this.total=this.total;
  this.negQ8="wrong"

 }if(this.Q9="Apples"){
  this.total +=1;
  this.negQ9="correct"
}else{
  this.total=this.total;
  this.negQ9="wrong"

 }if(this.Q10="British colonists"){
  this.total +=1;
  this.negQ10="correct"
}else{
  this.total=this.total;
  this.Q10="wrong"

 }if(this.Q11="South Western Township"){
  this.total +=1;
  this.negQ11="correct"
}else{
  this.total=this.total;
  this.Q11="wrong"

 }if(this.Q12="kruger National Park"){
  this.total +=1;
  this.negQ12="correct"
}else{
  this.total=this.total;
  this.Q12="wrong"

 }if(this.Q13="Robben Island"){
  this.total +=1;
  this.negQ13="correct"
}else{
  this.total=this.total;
  this.Q13="wrong"

 }if(this.Q14="Penguin"){
  this.total +=1;
  this.negQ14="correct"
}else{
  this.total=this.total;
  this.Q14="wrong"

 }if(this.Q15="gold"){
  this.total +=1;
  this.negQ15="correct"
}else{
  this.total=this.total;
  this.Q15="wrong"

 }if(this.Q16=" Jamaica"){
  this.total +=1;
  this.negQ16="correct"
}else{
  this.total=this.total;
  this.Q16="wrong"

 }if(this.Q17="golf"){
  this.total +=1;
  this.negQ17="correct"
}else{
  this.total=this.total;
  this.Q17="wrong"

 }if(this.Q18="golf"){
  this.total +=1;
  this.negQ18="correct"
}else{
  this.total=this.total;
  this.Q18="wrong"

 }if(this.Q19="one strike"){
  this.total +=1;
  this.negQ19="correct"
}else{
  this.total=this.total;
  this.Q19="wrong"
  // if(this.Q20="Africa"){
  //   this.total +=1;
  //   this.negQ20="correct"
  // }else{
  //   this.total=this.total;
  //   this.Q20="wrong"

   }

 }
  }
  

    
