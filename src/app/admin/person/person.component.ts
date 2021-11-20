import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

declare var $: any;

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  errorMessage: string = "";

  @Input() person: Person = new Person();
  @Output() save = new EventEmitter<any>();
  constructor(private personService: PersonService) { }

  savePerson() {
    this.personService.savePerson(this.person).subscribe(data => {
      this.save.emit(data);
      $('#personModal').modal('hide');
    }, err => {
      this.errorMessage = 'Unexpected error occurred.';
      console.log(err);
    })
  }

  showPersonModal() {
    $('#personModal').modal('show');
  }

}
