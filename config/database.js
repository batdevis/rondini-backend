module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
//        host: env('DATABASE_HOST', 'localhost'),
//        port: env.int('DATABASE_PORT', 5432),
//        database: env('DATABASE_NAME', 'postgres'),
//        username: env('DATABASE_USERNAME', 'postgres'),
//        password: env('DATABASE_PASSWORD', 'postgres'),
        host: 'ec2-3-220-98-137.compute-1.amazonaws.com',
        port: '5432',
        database: 'd8tv2h39hk7gm2',
        username: 'wlgzxedbfgyaaa',
        password: 'a0bbf383621ad78a7b5a3cae5a46fb353ced097442354fd60f694664579c3ec',
        ssl: { "rejectUnauthorized": false }
        //ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
