import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {AppConfig} from '../../config/app.config';

import 'rxjs/add/operator/map';

@Injectable()
export class ModesService {
    private modesUrl: string;
    private data: any;

    constructor(private http: Http) {
        this.modesUrl = AppConfig.endpoints.modes;
    }

    setMode(mode: string) {
        let apiURL = this.modesUrl + "/" + mode;
        console.log("API URL: " + apiURL);
        return this.http.get(apiURL)
            .map((res: Response) => res.json())
            .subscribe(data => {
                this.data = data;
                console.log(this.data);
            });
    }
}