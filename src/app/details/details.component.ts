import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpParams} from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  private ApiUrl = 'https://stepprojects.ge/rest/product/'

  constructor(private http: HttpClient,
    private service:PostService,
    private activerout:ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private router: Router,) { }
  card:any;
  getCard(search:any){
  
    
    let par:any = new HttpParams({fromObject: search});
    return this.http.get(this.ApiUrl+'/:id', {params:par})
  }
  ngOnInit(){
    this.activerout.params.subscribe((allpar:any)=>{
 
    this.service.getPosts(allpar).subscribe( result =>{
    this.card = result;
    });
  })
  
  }
  exit(){
    this.router.navigate([
      'Home'
    ])
  }

}
