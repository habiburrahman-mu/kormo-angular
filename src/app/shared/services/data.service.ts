import {Injectable} from '@angular/core';
import {ToDo} from "../model/todo.model";
import {LocalStorageRepoService} from "../repository/local-storage-repo.service";
import {JsonRepoService} from "../repository/json-repo.service";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    todos: ToDo[] = [];
    language: string;
    translations: any;
    constructor(
        private localStorageRepository: LocalStorageRepoService,
        private jsonRepository: JsonRepoService) {
    }

    getAllTodos(): ToDo[] {
        this.todos = JSON.parse(this.localStorageRepository.fetch('todos'));
        return this.todos;
    }

    addTodo(todo: ToDo): void {
        this.todos.push(todo);
        this.localStorageRepository.updateData('todos', JSON.stringify(this.todos));
    }

    updateTodo(index: number, updatedTodo: ToDo): void {
        this.todos[index] = updatedTodo;
        this.localStorageRepository.updateData('todos', JSON.stringify(this.todos));
    }

    deleteTodo(index: number): void {
        this.todos.splice(index, 1);
        this.localStorageRepository.updateData('todos', JSON.stringify(this.todos));
    }

    getLanguage(): string {
        const lang = this.localStorageRepository.fetch('lang');
        if (lang) {
            this.language = lang;
        } else {
            this.language = "en"
        }
        return this.language;
    }

    chnageLanguage(lang: string) {
        this.language = lang;
        this.localStorageRepository.updateData('lang', this.language);
    }

    getTranslations(lang: string) {
        this.translations = this.jsonRepository.readJson();
        return this.translations[lang];
    }

}
