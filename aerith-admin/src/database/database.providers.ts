import * as mongoose from 'mongoose';

// mongoodb连接。
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost:27017/aerith'),
  },
];
