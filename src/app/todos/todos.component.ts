import {Component, OnInit} from '@angular/core';
import {ToDo} from "../shared/model/todo.model";
import {DataService} from "../shared/services/data.service";
import {NgForm} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {EditTodoDialogComponent} from "../edit-todo-dialog/edit-todo-dialog.component";

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
    todos: ToDo[];
    language: string;
    translations: any;
    showValidationErrors: Boolean;

    constructor(private dataService: DataService, private dialog: MatDialog) {

    }

    ngOnInit(): void {
        this.todos = this.dataService.getAllTodos();
        this.language = this.dataService.getLanguage();
        this.translations = this.dataService.getTranslations(this.language);
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
        const index = this.todos.indexOf(todo);
        todo.completed = !todo.completed;
        this.dataService.updateTodo(index, todo);
    }

    editTodo(todo: ToDo) {
        const index = this.todos.indexOf(todo);
        let dialogRef = this.dialog.open(EditTodoDialogComponent, {
            width: '700px',
            data: {
                todo: todo,
                translations: this.translations
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.dataService.updateTodo(index, result);
            }
        })
    }

    deleteTodo(todo: ToDo) {
        const index = this.todos.indexOf(todo);
        this.dataService.deleteTodo(index);
    }

    onChangeLanguage(lang: string) {
        this.language = lang;
        this.dataService.chnageLanguage(this.language);
        this.translations = this.dataService.getTranslations(this.language);
    }

}
