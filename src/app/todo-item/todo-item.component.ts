import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from "../shared/model/todo.model";

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
    @Input() todo: ToDo;
    @Output() todoClicked: EventEmitter<void> = new EventEmitter();

    constructor() {

    }

    ngOnInit(): void {

    }

    onTodoClicked() {
        this.todoClicked.emit();
    }

}
