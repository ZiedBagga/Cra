import * as mongoose from 'mongoose';

export const CraSchema = new mongoose.Schema({
    client       : { type: String , required: true },
    mission      : { type: String , required: true },
    date         : { type: Date   , required: true },
    heuredebut   : { type: String , required: true },
    heurefin     : { type: String , required: true },
    status       : { type: String , required: true },
});