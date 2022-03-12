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
    todos: ToDo[];
    showValidationErrors: Boolean;

    constructor(private dataService: DataService) {

    }

    ngOnInit(): void {
        this.todos = this.dataService.getAllTodos();
    }

    onFormSubmit(form: NgForm) {
        if (form.invalid) {
            this.showValidationErrors = true;
        } else {
            this.dataService.addTodo(new ToDo(form.value.text));
            this.showValidationErrors = false;
            form.reset();
        }
    }

    toggleCompleted(todo: ToDo) {
        todo.completed = !todo.completed;
    }

}
