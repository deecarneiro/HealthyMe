import { User } from './User';

export interface Visitation {
    id?: any;
    professional: User;
    client: User;
    address: string;
    type: number;
    geoPoints: any
}