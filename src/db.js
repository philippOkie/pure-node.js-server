import postgres from "postgres";

const sql = postgres("postgresql://filip:secret@localhost/server_template", {
  idle_timeout: 2,

  ssl: false,

  transform: postgres.camel,

  debug: (connection, query, parameters) => {
    // console.log(query, '\n');
  },
});

export default sql;
