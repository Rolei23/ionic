import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  list;
  writePost: any;

  constructor(private angularfireStore:AngularFirestore) { }
  

  getItems(){
   return this.angularfireStore.collection('grocery').valueChanges();
   

  }
}


