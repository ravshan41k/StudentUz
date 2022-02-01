import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from './student.model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl:string='https://localhost:44314/api/Students';
  list:Students[];

  constructor(private http:HttpClient) { }

  postPaymentDetail(student:Students){
   return this.http.post(this.baseUrl,student);
  }

  putPaymetDetail(student:Students){
   return this.http.put(`${this.baseUrl}/${student.id}`,student);
  }

  deletePaymentDetail(id:number){
  return this.http.delete(`${this.baseUrl}/${id}`);
  }

  refreshList(){
     this.http.get(this.baseUrl)
              .toPromise()
              .then(res=>this.list=res as Students[]);
               console.log(this.list);
  }

}
