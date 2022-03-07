import {Component, OnInit} from '@angular/core';
import {ToDo} from "../shared/model/todo.model";
import {DataService} from "../shared/services/data.service";

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

}
