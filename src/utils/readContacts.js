import fs from "node:fs/promises";
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
    const data = await fs.readFile(PATH_DB, "utf-8");
     const contacts = JSON.parse(data);
     return contacts;
       
};


