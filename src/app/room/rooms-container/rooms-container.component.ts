import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import 'rxjs/add/operator/takeWhile';
import { JsonPipe } from '@angular/common';

import { Room, RoomDetail } from '../models/room';
import { RoomService } from '../services/room.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'rooms-container',
    templateUrl: './rooms-container.component.html',
    styleUrls: ['./rooms-container.component.scss']
})
export class RoomsContainerComponent implements OnInit, OnDestroy {

    private _alive: boolean;
    private _interval: number;

    rooms: Room[];
    selectedRoomDetail: RoomDetail;

    constructor(private roomService: RoomService) {
        this._alive = true;
        this._interval = 60000;
    }

    ngOnInit() {
        this.getRooms();
    }

    ngOnDestroy() {
        this._alive = false;
    }

    getRooms(): void {

        TimerObservable.create(0, this._interval)
            .takeWhile(() => this._alive)
            .subscribe(() => {
                this.roomService
                    .getRooms()
                    .subscribe(rooms => {
                        this.rooms = rooms;

                        if(this.selectedRoomDetail) {
                            this.selectRoom(this.selectedRoomDetail.id);
                        }
                    });
            });
    }

    selectRoom(roomId: string): void {

        this.roomService.getRoom(roomId)
            .subscribe(roomDetail => {
                this.selectedRoomDetail = roomDetail;

                console.log('subscription incoming room', roomDetail);
                console.log('subscription is setting selected room', this.selectedRoomDetail);
            });
    }

    onRoomSelected(room: Room): void {
        this.selectRoom(room.id);
    }
}