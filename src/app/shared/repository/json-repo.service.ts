import {Injectable} from '@angular/core';
import translate from './../../../public/translate.json';

@Injectable({
    providedIn: 'root'
})
export class JsonRepoService {
    translation: any;
    constructor() {
    }

    readJson() {
        this.translation = translate;
        return this.translation;
    }
}
