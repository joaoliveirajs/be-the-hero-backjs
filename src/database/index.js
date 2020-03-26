import knex from "knex";

import knexFile from "../../knexfile";

const connection = knex(knexFile.development);

export default connection;
