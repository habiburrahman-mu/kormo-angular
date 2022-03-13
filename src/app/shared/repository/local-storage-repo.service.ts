import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageRepoService<T> {

    constructor() {
    }

    fetch (localStorageIndex: string): T[] {
        const data = localStorage.getItem(localStorageIndex);
        if (data) {
            return JSON.parse(data);
        }
        return [];
    }

    updateData (localStorageIndex: string, data: T[]) {
        localStorage.setItem(localStorageIndex, JSON.stringify(data));
    }
}
