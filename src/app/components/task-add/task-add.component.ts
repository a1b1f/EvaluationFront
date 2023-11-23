import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { AddRecordDTO } from 'src/app/dto/addRecordDTO';
import { RecordService } from 'src/app/services/record.service';


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit{
  minDate: NgbDateStruct = {
    year: new Date().getFullYear() - 1,
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),

  }
  startDate: NgbDateStruct = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),

  }
  maxDate: NgbDateStruct = {
    year: new Date().getFullYear() + 1,
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),

  }
  addRecordForm: FormGroup = new FormGroup({
    patientName: new FormControl('', ),
    treatmentPlan: new FormControl('', ),
    symptoms: new FormControl('', ),
    diagnosis: new FormControl('', ),
    date: new FormControl('', ),
  });
  constructor(private recordService:RecordService, private router: Router, private activatedRoute: ActivatedRoute,) {
    
  }
  ngOnInit(): void {
    
  }
  save(){
    debugger
    var fromdata:AddRecordDTO=this.addRecordForm.value;
    fromdata.date = this.getDateString(fromdata.date);

    console.log(fromdata)
    this.recordService.AddNews(fromdata).subscribe(data=>{
      debugger
      if(data.type==1){
        this.router.navigate(['list']);      }
    });
  }
  
  getDateString(date: any) {
    // debugger;
    +date["month"]--;
    return moment(date).format("YYYY-MM-DD");
  }
}
