import { StudentService } from './shared/student.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StudentsComponent } from './students/students.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {InputMaskModule} from 'primeng/inputmask';
import {InputNumberModule} from 'primeng/inputnumber';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent

  ],
  imports: [
   BrowserModule,
   BrowserAnimationsModule,
   CalendarModule,
   ToastModule,
   SliderModule,
   ContextMenuModule,
   DialogModule,
   ButtonModule,
   ToolbarModule,
  ProgressBarModule,
  ConfirmDialogModule,
  FileUploadModule,
  TableModule,
  MultiSelectModule,
  DropdownModule,
  InputTextModule,
   FormsModule,
   AccordionModule,
   AppRoutingModule,
   BrowserAnimationsModule,
   HttpClientModule,
   CascadeSelectModule,
   ReactiveFormsModule,
   InputMaskModule,
   CommonModule,
   InputNumberModule,
   ToastrModule.forRoot(),

  ],
  providers: [StudentService,ToastrService,MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
