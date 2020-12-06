import Dexie from "dexie";
import { encryption } from "./encryption"; // see example below
import middleware from "dexie-easy-encrypt";

const createDb = async () => {
  console.log("creating Db")
  const db = new Dexie("ReactReduxSampleDB");
  const tables = ["todos"];

  await middleware({ db, encryption, tables });
  await db.version(2).stores({ todos: "++id" });
  return db;
};

export default createDb;
