import knex from "knex";

import knexFile from "../../knexfile";

const enviroment = knexFile.production;
const connection = knex(enviroment);

export default connection;
