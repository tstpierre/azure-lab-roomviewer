export enum RoomState {
    Unoccupied,
    Occupied
}

export class Room {
    id: string;
    displayName: string;
    currentState: RoomState;
}