import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AppConfig} from '../../config/app.config';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class ModesService {
    private modesUrl: string;

    constructor(private http: HttpClient) {
        this.modesUrl = AppConfig.endpoints.modes;
    }

    setMode(mode: string) {
        let apiURL = this.modesUrl + "/" + mode;
        return this.http.get(apiURL)
            .map(res => {
                
            })
    }
}