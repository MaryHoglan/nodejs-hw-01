//import fs from "node:fs/promises";
import { createFakeContact } from "../utils/createFakeContact.js";
//import { PATH_DB } from "../constants/contacts.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    
    const contacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...contacts, newContact];
    await writeContacts(updatedContacts);
 };

addOneContact();
