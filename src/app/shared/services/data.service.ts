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
        this.todos = this.localStorageRepository.fetch('todos') !== "" ? JSON.parse(this.localStorageRepository.fetch('todos')) : [];
        return this.todos;
    }

    addTodo(todo: ToDo): void {
        this.todos.push(todo);
        this.localStorageRepository.setData('todos', JSON.stringify(this.todos));
    }

    updateTodo(index: number, updatedTodo: ToDo): void {
        this.todos[index] = updatedTodo;
        this.localStorageRepository.setData('todos', JSON.stringify(this.todos));
    }

    deleteTodo(index: number): void {
        this.todos.splice(index, 1);
        this.localStorageRepository.setData('todos', JSON.stringify(this.todos));
    }

    getLanguage(): string {
        const lang = this.localStorageRepository.fetch('lang');

        if (lang!=="") {
            this.language = lang;
        } else {
            this.language = "en"
            this.chnageLanguage(this.language);
        }
        return this.language;
    }

    chnageLanguage(lang: string) {
        this.language = lang;
        this.localStorageRepository.setData('lang', this.language);
    }

    getTranslations(lang: string) {
        this.translations = this.jsonRepository.readJson();
        return this.translations[lang];
    }

}
