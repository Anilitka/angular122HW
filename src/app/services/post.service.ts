import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://stepprojects.ge'

  constructor(private httpClient: HttpClient) { }

  getPosts(search:any){
  
    
    let par:any = new HttpParams({fromObject: search});
    return this.httpClient.get(this.url+'/rest/products', {params:par})
  }
}
