import { MongoClient } from "mongodb";

const uri = "mongodb+srv://gustavo2:0918gusxd@eva-u2-spring.oxoerws.mongodb.net/miDB?retryWrites=true&w=majority"; 
const client = new MongoClient(uri);

export const dbName = "cine-db";
export let db;

export async function connectDB() {
  try {
    await client.connect();
    db = client.db(dbName);
    console.log("Conexión exitosa");
    return true;
  } catch (error) {
    console.error("Error al conectar", error);
    return false;
  }
}