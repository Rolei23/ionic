import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  // ESPRESSO
  // R34
 toppings:number =0;
 choose=true;
 reciept=false;
 r
 z
 x
 creamz:boolean;
 hazelnuts:boolean;
 pourings:boolean;
  prESPRESSO;
  total:number = +this.prESPRESSO + +this.toppings;
   constructor(private route:ActivatedRoute, private router:Router,public alertController: AlertController) { }
   cream() {
    
       console.log(this.toppings +=3);
    
    this.total = +this.prESPRESSO + +this.toppings;;

     }
     hazelnut() {
      //  if(this.hazelnuts==false){
      //    this.toppings+=4;
      //    this.z="hazelnuts";
      //  }
      //  if(this.hazelnuts==true){
      //    this.toppings-=4;
      //    this.z="";
      //  }
    
    console.log(this.toppings +=4);
    
    this.total = +this.prESPRESSO + +this.toppings;;
       }
       pouring() {
    //    if(this.pourings==false){
    //      this.toppings+=2;
    //      this.x="pourings";
    //    }
    //    if(this.pourings==true){
    //      this.toppings-=2;
    //      this.x="";
    //    }
       console.log(this.toppings +=2);
    
       this.total = +this.prESPRESSO + +this.toppings;;

         }
         async submit() {
           const alert = await this.alertController.create({
             // header: 'Confirm!',
             message: 'Proceed with your order',
             buttons: [
               {
                 text: 'Cancel',
                 role: 'cancel',
                 cssClass: 'secondary',
                 handler: (blah) => {
                   console.log('Confirm Cancel: blah');
                 }
               }, {
                 text: 'Yes',
                 handler: () => {
                   this.choose=false;
                   this.reciept=true;
                   console.log('Confirm Okay');
                 }
               }
             ]
           });
           await alert.present();
         }
         // {
         //   this.choose=false;
         //   this.reciept=true;
         //  }
      print(){
        window.print();
      }
   ngOnInit() {
//  this.creamz=false;
//  this.hazelnuts=false;
//  this.pourings=false;

 this.route.queryParams
    .subscribe(params =>
 {
     console.log(params);
     this.prESPRESSO = params.prESPRESSO;
    console.log( this.prESPRESSO);
  });
  console.log(this.total);
  this.total = +this.prESPRESSO + +this.toppings;;
  
   }
   start(){
     this.router.navigateByUrl("page")
   }
 }
//   confirmorder(){
//     this.router.navigateByUrl("coffees")
  
//   }
//   start(){
//     this.router.navigateByUrl("page")
//   }
// }


