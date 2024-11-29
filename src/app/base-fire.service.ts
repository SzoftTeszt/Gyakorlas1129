import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseFireService {

  dataRef: AngularFireList<any>
  constructor(private db: AngularFireDatabase) { 
    this.dataRef=db.list("/data")
  }
  getDatas(){
    return this.dataRef
  }
  addData(data:any){
    this.dataRef.push(data)
  }
  updateData(data:any){
    let key=data.key
    delete data.key
    this.dataRef.update(key, data)
  }

  deleteData(data:any)  {
    this.dataRef.remove(data.key)
  }
  deleteAllData(){
    this.dataRef.remove()
  }
}

