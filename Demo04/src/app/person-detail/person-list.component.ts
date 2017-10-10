import { Router } from '@angular/router';
import { PersonService } from './person.service';
import { Person } from './person';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
    templateUrl: './person-list.component.html'
})
export class PersonListComponent implements OnInit {
    pageTitle: string = "Person";
    persons$: Observable<Person[]>;

    constructor(private personService: PersonService,
        private router: Router) { }

    onEdit(person: Person) {
        let link = ['/person', person.id];
        this.router.navigate(link);
    }

    ngOnInit() {
        this.persons$ = this.personService.getAllAsync();
    }
}
