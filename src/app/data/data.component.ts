import { Component } from '@angular/core';
import { FirebaseError } from 'firebase/app';
import { BaseFireService } from '../base-fire.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  datas:any
  // { "key": "0", "age": 46, "email": "bob@example.com", "id": 1159, "name": "Eve", "profile_picture": "Unknown" }
  oszlopok=[
    {key:"email", text:"E-mail", type:"email"},
    {key:"name", text:"Name", type:"text"},
    {key:"age", text:"Age", type:"number"},
    {key:"profile_picture", text:"Profile Pic", type:"url"},
  ]
  newData:any={}

  constructor(private base:BaseFireService){
    base.getDatas().snapshotChanges().pipe(
      map(
        (changes)=>changes.map(
          (c)=>({key:c.payload.key, ...c.payload.val()})
        )
      )
    ).subscribe(
      (res)=>this.datas=res
    )

  }

  addData(){
    this.base.addData(this.newData)
    this.newData={}
  }
  updateData(data:any){
    this.base.updateData(data)
  }
  deleteData(data:any){
    this.base.deleteData(data)
  }

}
