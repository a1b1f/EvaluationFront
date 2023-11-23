import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { GetRecordDTO } from 'src/app/dto/recordDTO';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit{
  @ViewChild(DataTableDirective) dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any | null> = new Subject<any | null>();
  recordData?:GetRecordDTO[];

  constructor(private recordService:RecordService) {
    
  }
  ngOnInit(): void {
    this.recordService.GetRecordsData().subscribe(data=>this.recordData=data);
  }

}
