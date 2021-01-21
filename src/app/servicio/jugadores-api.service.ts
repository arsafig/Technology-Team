import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class JugadoresApiService {

  url:string = "https://free-nba.p.rapidapi.com/"
  header = {
    "x-rapidapi-key": "665ed21c81msh061a123159a7203p1bb178jsn2ddffd2c7093"
  }
  params= {
    "per_page":"100"
  }


  constructor(
    private _http:HttpClient
  ) { }


  servicioPlayersApi(){
    return this._http.get(`${this.url}players`,{ headers:this.header, params:this.params})
                      .pipe(map((resp:any) => resp['data'])); 
  }

  servicioGetASpecificTeam(id:string){
    return this._http.get(`${this.url}teams/${id}`,{ headers:this.header}); 
  }
}
