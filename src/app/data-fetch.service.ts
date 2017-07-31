import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataFetchService{
 url: string;
 result:any;

        constructor(private http :HttpClient){       
        }



    //  public  getData(url1:string):any{
    //         this.url=url1;
    //     this.http.get(this.url).subscribe(data =>{
    //         console.log("ye lo"+data);
    //     this.result = data;
    //     return this.result;
    //     });  
    // }

    public getData(url1:string):Promise<any>{
this.url=url1;
return this.http.get(this.url).toPromise();

    }
    

 }