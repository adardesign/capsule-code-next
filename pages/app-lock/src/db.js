import Dexie from "dexie";
import { encryption } from "./encryption"; // see example below
import middleware from "dexie-easy-encrypt";

const createDb = async () => {
  const db = new Dexie("ReactReduxSampleDB");
  const tables = ["todos"];

  await middleware({ db, encryption, tables });
  console.log("im here");
  await db.version(2).stores({ todos: "++id" });
  return db;
};

export default createDb;
