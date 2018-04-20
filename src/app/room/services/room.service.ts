import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Room } from '../models/room';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'api-version': '1.0.0'
    })
};

@Injectable()
export class RoomService {

    private _baseUrl: string = 'https://apigateway3522h00.azure-api.net/room';

    constructor(private http: HttpClient) { }

    getRooms(): Observable<Room[]> {

        const url: string  = this._baseUrl;
        return this.http.get<Room[]>(url, httpOptions);
    }

    getRoom(id: string): Observable<Room> {

        const url: string  = `${this._baseUrl}/${id}`;
        return this.http.get<Room>(url, httpOptions);
    }
}