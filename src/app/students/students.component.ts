import { StudentService } from './../shared/student.service';
import { Component,EventEmitter, OnInit, NgModule } from '@angular/core';
import { Students } from '../shared/student.model';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
  .customer-badge.status-proposal {
    background-color: #ffd8b2;
    color: #805b36;
}

  .customer-badge {
    border-radius: 2px;
    padding: 0.25em 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: .3px;
}
.customer-badge.status-unqualified {
    background-color: #ffcdd2;
    color: #c63737;
}
.customer-badge {
    border-radius: 2px;
    padding: 0.25em 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: .3px;
}
.customer-badge.status-qualified {
    background-color: #c8e6c9;
    color: #256029;
}
.customer-badge {
    border-radius: 2px;
    padding: 0.25em 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: .3px;
}
.customer-badge.status-renewal {
    background-color: #feedaf;
    color: #8a5340;
}
.customer-badge {
    border-radius: 2px;
    padding: 0.25em 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: .3px;
}
` ]
})
export class StudentsComponent implements OnInit {

  productDialog: boolean;

    students: Students[];
    statuses:any[];
    student:Students;
    selectedStudents: Students[];
    updateStudent:Students;
    selectedCities:any;
    submitted: boolean;
    countries:any[];

    constructor(public service: StudentService,private toastr:ToastrService, private messageService: MessageService, private confirmationService: ConfirmationService) {

    }

    ngOnInit() {
      this.service.refreshList();

      this.statuses = [
          {label: 'PROPOSAL', value: 'proposal'},
          {label: 'UNQUALIFIED', value: 'unqualified'},
          {label: 'QUALIFIED', value: 'qualified'},
          {label: 'RENEWAL', value: 'renewal'}
           ];
      this.countries = [
          {label: 'Uzbekistan', value: 'uzbekistan'},
          {label: 'Italy', value: 'italy'},
          {label: 'France', value: 'france'},
          {label:'Turkey',value:'turkey'}
           ];

    }

    openNew() {
        this.submitted = false;
        this.productDialog = true;
        this.resetForm();
       }

    closeDialog(){
      this.submitted=true;
      this.productDialog=false;
      this.student=new Students();
      }

    deleteStudent(student:Students) {
       if(confirm("Are you want delete this item?")){
                 this.service.deletePaymentDetail(student.id)
                             .subscribe(
                                         response=>{
                                                    this.service.refreshList();
                                                    this.toastr.error("Deleted successfully","Students");
                                                  },
                                         error=>{console.log(error)}
                                      );}
       }

    editProduct(student: Students) {
        this.student = student;
        this.productDialog = true;
      }

    onSubmit(){
      this.updateStudent=this.student
       if(this.student.id==0){
            this.saveStudent();
          }else{
            this.updateStudents()
          }

      }

    saveStudent() {
       this.submitted = true;
       if (this.student.id==0){
        this.service.postPaymentDetail(this.student)
        .subscribe(response=>{
                this.resetForm();
                this.service.refreshList();
                this.toastr.success('Submitted Successfully','Students');
            },
                 error=>{
                    console.log(error);
            });
       }else{
            this.updateStudents();
       }

       this.productDialog=false;
    }

    resetForm(){
     this.student=new Students();
    }

    updateStudents(){

      this.service.putPaymetDetail(this.student)
                  .subscribe(response=>{
         this.service.refreshList();
         this.toastr.info('Updated Successfully','Students');
        },
         error=>{
          console.log(error);
         }
       );
       this.productDialog=false;


     }




}
