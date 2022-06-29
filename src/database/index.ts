import { ConnectionOptions, createConnection } from "typeorm";
import ormconfig from "./ormconfig";
const connections = ormconfig as ConnectionOptions;
createConnection(connections);
