import knex from "knex";

import knexFile from "../../knexfile";

const enviroment = knexFile.production || knexFile.development;
const connection = knex(enviroment);

export default connection;
