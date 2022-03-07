import {Injectable} from '@angular/core';
import {ToDo} from "../model/todo.model";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    todos: ToDo[] = [
        new ToDo('This is a test', true),
        new ToDo('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non finibus augue. Morbi nec mauris urna. Mauris fermentum rutrum convallis. Pellentesque non gravida elit.')
    ]
    constructor() {
    }

    getAllTodos() {
        return this.todos;
    }

    addTodo(todo: ToDo) {
        this.todos.push(todo);
    }

    updateTodo(index: number, updatedTodo: ToDo) {
        this.todos[index] = updatedTodo;
    }

    deleteTodo(index: number) {
        this.todos.splice(index, 1);
    }

}
