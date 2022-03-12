import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ToDo} from "../shared/model/todo.model";

@Component({
    selector: 'app-edit-todo-dialog',
    templateUrl: './edit-todo-dialog.component.html',
    styleUrls: ['./edit-todo-dialog.component.scss']
})
export class EditTodoDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<EditTodoDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public todo: ToDo) {

    }

    ngOnInit(): void {
    }

    onFormSubmit(form: NgForm) {
        const updatedTodo = {
            ...this.todo,
            ...form.value
        }
        this.dialogRef.close(updatedTodo);
    }

    close() {
        this.dialogRef.close();
    }
}
