import { Injectable } from '@angular/core';
import { Observable , interval} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MontreAnalogiqueServiceService {
  private time;
  constructor() {}
  getCurrentTimer() {
    new Observable(observer => {
      observer.next(new Date());
    }).subscribe(value=>this.time=value);
    return this.time ;
  }
}
