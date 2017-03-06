import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Inject, Injectable} from "@angular/core";

@Injectable
export class BirdIdentifierService {

    private photoUrl = '/photo';

    constructor(@Inject(Http) private http: Http) {
    }

    uploadPhoto(file: File): string {
        this.http.post(this.photoUrl, file)
            .toPromise().then(response => {
                debugger;
        })
        return '';
    }


    // getFemaleAgents(ageFilter): Promise<Agent[]> {
    //     var url = this.agentsUrl + "?gender=Female";
    //     if(ageFilter) {
    //         url += "&ageToFilterBy=" + ageFilter;
    //     }
    //     return this.http.get(url)
    //         .toPromise()
    //         .then(response => response.json() as Agent[]);
    // }
    //
    // getMaleAgents(ageFilter): Promise<Agent[]> {
    //     var url = this.agentsUrl + "?gender=Male";
    //     if(ageFilter) {
    //         url += "&ageToFilterBy=" + ageFilter;
    //     }
    //     return this.http.get(url)
    //         .toPromise()
    //         .then(response => response.json() as Agent[]);
    // }

}