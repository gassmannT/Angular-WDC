import { Person } from './person';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class PersonService {

    constructor(private http: Http) { }

    getPerson(id: number): Person {
        return {
            id: 1,
            firstname: "Thomas",
            lastname: "Gassmann",
            githubaccount: "gassmannT"
        };
    }

    getAsyncPromise(id: number): Promise<Person> {
        return this.http
            .get('http://localhost:8180/api/persons/' + id)
            .map(this.extractData)
            .catch(this.handleError)
            .toPromise();
    }

    getAsync(id: number): Observable<Person> {
        return this.http
            .get('http://localhost:8180/api/persons/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getAllAsync(): Observable<Person[]> {
        return this.http
            .get('http://localhost:8180/api/persons/')
            .map(this.extractData)
            .catch(this.handleError);
    }

    save(p: Person) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put("http://localhost:8180/api/persons/", p, options);
    }

    private extractData(res: Response) {
        let data = res.json();
        return data || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
