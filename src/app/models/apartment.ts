export class Apartment {
    constructor(
            public id: number,
            public user_id: number,
            public title: string,
            public description: string,
            public rooms_number: number,
            public price: number,
            public img: string,
            public created_at: string,
            public updated_at: string
    ) {}
}