import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from '../../models/person.model';
import { PersonService } from '../../services/person.service';
import { PersonComponent } from '../person/person.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  personList: Array<Person> = [];
  selectedPerson: Person = new Person();
  errorMessage: string = "";

  @ViewChild(PersonComponent) child: PersonComponent | undefined;
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getAllPersons().subscribe(data=>{
      this.personList = data;
    });
  }

  createPersonRequest() {
    this.selectedPerson = new Person();
    this.child?.showPersonModal();
  }

  editPersonRequest(item: Person) {
    this.selectedPerson = Object.assign({}, item);
    this.child?.showPersonModal();
  }

  savePersonWatcher(person: Person) {
    let itemIndex = this.personList.findIndex(item => item.id === person.id);
    if (itemIndex !== -1) {
      this.personList[itemIndex] = person;
    } else {
      this.personList.push(person);
    }
  }

  deletePerson(item: Person, ind: number) {
    this.personService.deletePerson(item).subscribe(data => {
      this.personList.splice(ind, 1);
    }, err => {
      this.errorMessage = 'Unexpected error occurred.';
      console.log(err);
    })
  }

}
