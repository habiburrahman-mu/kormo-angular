import {Component, OnInit} from '@angular/core';
import {ToDo} from "../shared/model/todo.model";
import {DataService} from "../shared/services/data.service";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
    todos: ToDo[]
    constructor(private dataService: DataService) {

    }

    ngOnInit(): void {
        this.todos = this.dataService.getAllTodos();
    }

    onFormSubmit(form: NgForm) {
        console.log("Form Submitted");
        console.log(form);
        this.dataService.addTodo(new ToDo(form.value.text));
    }

}
