import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  constructor(private http:HttpClient) { }
  GetRecordsData()  
  {
        var requestOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this.http.get<any>(`https://localhost:7041/api/ClinicBackup`,requestOptions);
  }
  AddNews(formData: any): Observable<any> {
    var requestOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this.http.post<any>(`https://localhost:7041/api/Clinic/AddRecordData`, formData, { reportProgress: true, observe: 'events' });
  }
}
