import { Injectable } from '@angular/core';
import { Contact } from './contact'
import { HttpClient , HttpErrorResponse , HttpHeaders} from '@angular/common/http';
;import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  // httpOptions = {
  //   headers : new HttpHeaders({'Contact-Type': 'application/json'})
  // };

  constructor( private http :HttpClient) { }

  // contactForm(formData:Contact){
  //   return this.http.post<Contact>(environment.baseApi + 'contact' , formData , this.httpOptions)
   
  // }

 
}
