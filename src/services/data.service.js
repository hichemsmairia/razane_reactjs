import { database } from "../config/firebase";

const db = database.ref("/Company");
//maintenant notre db pointe vers la
//partie de la base de donnes qui contient
// les mesures

class DataService {
  getAll() {
    return db;
  }
}
export default new DataService();
