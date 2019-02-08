import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { RepoInterface } from 'src/app/interface/repo.interface';

@Injectable({
    providedIn: 'root'
})
export class ListService implements RepoInterface {
    constructor(private httpClientService: HttpClientService) {

    }

    getAll() {
        return this.httpClientService.get('http://firebrowse.org/api/v1/Archives/StandardData?format=json&sort_by=cohort&page=2');
    }
    getById(id: number) {
        throw new Error("Method not implemented.");
    }
}