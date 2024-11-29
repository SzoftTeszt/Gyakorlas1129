import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseRestService {
  
  URL= "https://gyakorlas20241129-default-rtdb.europe-west1.firebasedatabase.app/data"
  
  dataSub= new Subject()

  constructor(private http:HttpClient) {
    this.loadDatas()
   }
  getDatas(){   
    return this.dataSub
  }

  private loadDatas(){
    console.log(this.URL+".json")
    this.http.get(this.URL+".json").subscribe(
      (res)=> this.dataSub.next(res)
    )

  }

  addData(data:any){
    console.log("Data:",data)
    this.http.post(this.URL+".json", data).forEach(
      ()=>this.loadDatas()
    )
  }
  updateData(data:any){
   this.http.put(this.URL+data.key+"/"+".json", data).forEach(
    ()=>this.loadDatas()
  )
  }

  deleteData(data:any)  {
    console.log("URL",this.URL+"/"+data.key+".json")
    this.http.delete(this.URL+data.key+".json").forEach(
      (err)=>{
        console.log(err)
        this.loadDatas()
      }
    )
  }
  


}
