import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageRepoService {

    constructor() {
    }

    fetch (localStorageIndex: string): string {
        const data = localStorage.getItem(localStorageIndex);
        if (data) {
            return data;
        }
        return "";
    }

    updateData (localStorageIndex: string, data: string) {
        localStorage.setItem(localStorageIndex, data);
    }
}
