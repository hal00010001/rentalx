import { Connection, createConnection, getConnectionOptions } from "typeorm";

// interface IOptions {
//   host: string;
// }

// getConnectionOptions().then((options) => {
//   const newOptions = options as IOptions;
//   newOptions.host = "database";
//   createConnection({
//     ...options,
//   });
// });

// Bloco necessário se for fazer algum seed como o que está em src/infra/typeorm
// export default async (host = "database"): Promise<Connection> => {
//   const defaultOptions = await getConnectionOptions();
//   return createConnection(
//     Object.assign(defaultOptions, {
//       host: process.env.NODE_ENV === "test" ? "localhost" : host,
//       database:
//         process.env.NODE_ENV === "test"
//           ? "rentx_test"
//           : defaultOptions.database,
//     })
//   );
// };

createConnection();
