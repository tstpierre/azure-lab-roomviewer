export enum RoomState {
    Unoccupied = "Unoccupied",
    Occupied = "Occupied"
}

export class Room {
    id: string;
    displayName: string;
    currentState: RoomState;
}

export class RoomDetail extends Room {
    usageHistory: RoomUsage[];
    statistics: any;
}

export class RoomUsage {
    state: RoomState;
    startTime: Date;
    endTime: Date;
}

export class RoomStatistics {
    averageOccupationTimeInMinutes: number;
    busyTimes: RoomBusyTime[];
}

export class RoomBusyTime {
    dayOfWeek: number;
}