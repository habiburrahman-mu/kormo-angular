import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from "../shared/model/todo.model";
import {DataService} from "../shared/services/data.service";

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
    @Input() todo: ToDo;
    @Input() translations: any;
    @Output() todoClicked: EventEmitter<void> = new EventEmitter();
    @Output() editClicked: EventEmitter<void> = new EventEmitter();
    @Output() deleteClicked: EventEmitter<void> = new EventEmitter();

    language: string;

    constructor(private dataService: DataService) {

    }

    ngOnInit(): void {

    }

    onTodoClicked() {
        this.todoClicked.emit();
    }

    onEditClicked() {
        this.editClicked.emit();
    }

    onDeleteClicked() {
        this.deleteClicked.emit();
    }

}
