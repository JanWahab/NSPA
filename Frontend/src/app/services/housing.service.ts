import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

    getAllProperties(): Observable<IProperty[]>{
      return this.http.get('data/properties.json').pipe(
        map(data =>{
          const propertiesArray: Array<IProperty> = [];
          for (const id in data) {
            if (data.hasOwnProperty){
            propertiesArray.push(data[id]);
          }
         }
         return propertiesArray;
        })
      );
    }
}
