import {Injectable} from '@angular/core';
import {ToDo} from "../model/todo.model";
import {LocalStorageRepoService} from "../repository/local-storage-repo.service";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    todos: ToDo[] = [];

    constructor(private localStorageRepository: LocalStorageRepoService<ToDo>) {
    }

    getAllTodos() {
        this.todos = this.localStorageRepository.fetch('todos');
        return this.todos;
    }

    addTodo(todo: ToDo) {
        this.todos.push(todo);
        this.localStorageRepository.updateData('todos', this.todos);
        console.log(this.todos);
    }

    updateTodo(index: number, updatedTodo: ToDo) {
        this.todos[index] = updatedTodo;
        this.localStorageRepository.updateData('todos', this.todos);
    }

    deleteTodo(index: number) {
        this.todos.splice(index, 1);
        this.localStorageRepository.updateData('todos', this.todos);
    }

}
