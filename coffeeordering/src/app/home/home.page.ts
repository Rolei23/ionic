import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  start(){
    this.router.navigateByUrl("page")
  }
  show(){
    this.router.navigateByUrl("page")
  }
  constructor(private router: Router, private route: ActivatedRoute) {
 
  }

}

