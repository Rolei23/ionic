import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-macchiato',
  templateUrl: './macchiato.page.html',
  styleUrls: ['./macchiato.page.scss'],
})
export class MacchiatoPage implements OnInit {
  toppings = 0;
  choose=true;
  reciept=false;
  r
  z
  x
  creamz:boolean;
  hazelnuts:boolean;
  pourings:boolean;
  prMACCHIATO;
  total:number = +this.prMACCHIATO + +this.toppings;
  constructor(private route:ActivatedRoute, private router:Router,public alertController: AlertController) { }
  cream() {
    console.log(this.toppings +=3);
    
    this.total = +this.prMACCHIATO + +this.toppings;
    }
    hazelnut() {
      console.log(this.toppings +=4);
    
      this.total = +this.prMACCHIATO + +this.toppings;
      }
     pouring() {
      console.log(this.toppings +=2);
    
      this.total = +this.prMACCHIATO + +this.toppings;

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
// this.creamz=false;
// this.hazelnuts=false;
// this.pourings=false;

this.route.queryParams
.subscribe(params =>
{
 console.log(params);
 this.prMACCHIATO = params.prMACCHIATO;
console.log( this.prMACCHIATO);
});
console.log(this.total);
  this.total = +this.prMACCHIATO + +this.toppings;

  }
  start(){
    this.router.navigateByUrl("home")
  }
}