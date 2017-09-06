import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id = '9fc810abe4034a94a3b9';
    private client_secret = '29989b8fd79fde983b0bc319c667307de8cbd299';

    constructor(private _http: Http){
        console.log('Github Service Ready ...');
        this.username = 'adelelshafey';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).
            map(res => res.json());
    }

     getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).
            map(res => res.json());
    }

    updateUser(newuser: string){
        this.username = newuser;
    }
}