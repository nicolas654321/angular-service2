import { Injectable} from "@angular/core";
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { map } from  "rxjs/operators";

import { Cocktail } from "./Cocktail";

@Injectable({
  providedIn: 'root'
})

export class CocktailService {

  private service: HttpClient;

  cocktails: Cocktail[] = [];
/*     {
      name:'morito',
      price:7,
      img:'imgMorito.jpg'
    },
    {
      name:'martini-gin',
      price:8,
      img:'imgMG.jpg'
    },
    {
      name:'cardinal',
      price:6,
      img:'imgCard.jpg'
    }
  ];
 */

  constructor(param_service: HttpClient) {
      this.service = param_service;
   }

  public getCocktails(): Observable<Cocktail[]> {
    console.log("start getCocktails srv");
    const obs1:Observable<any> = this.service.get("assets/data.json");
    console.log("obs1 : " + obs1);
    const treatment = ( param_data:Cocktail[]) => {
      console.log("treatment : param_data : " + param_data);
      param_data.forEach((element: Cocktail) => {
        this.cocktails.push(element)
      }); {

      }
      return param_data as Cocktail[];
    }
    return obs1.pipe(map(treatment));
  }

}
function foreach(arg0: boolean) {
  throw new Error("Function not implemented.");
}

