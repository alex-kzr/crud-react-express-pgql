npm init
npm i --save express

npm i --save knex pg

sudo -u postgres createuser users_db_admin
sudo -i -u postgres
psql
CREATE DATABASE users_db;
ALTER USER users_db_admin PASSWORD '123456';
GRANT ALL PRIVILEGES ON DATABASE users_db TO users_db_admin;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO users_db_admin;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO users_db_admin;
\i <file-path>/staging.sql

npm i --save body-parser

create-react-app client
npm i --save-dev concurrently

npm i -save http-proxy-middleware // run in client directory

npm i --save axios

npm i --save lodash