import { Connection } from 'mongoose';
import { CraSchema } from './schemas/cra.schemas';

export const craProviders = [
    {
        provide: 'CRA_MODEL',
        useFactory: (connection: Connection) => connection.model('Cra', CraSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];