import { Document } from 'mongoose';

export interface Cra extends Document {
    readonly client    : string ;
    readonly mission   : string ;
    readonly date      : Date   ;
    readonly heuredebut: string ;
    readonly heurefin  : string  ;
    readonly status    : string ;
}