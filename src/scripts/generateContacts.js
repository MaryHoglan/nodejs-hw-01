import fs from "node:fs/promises";
import { createFakeContact } from "../utils/createFakeContact.js";
import { PATH_DB } from "../constants/contacts.js";

const generateContacts = async (number) => { 
    try {
        const data = await fs.readFile(PATH_DB, "utf-8");
        const contacts = JSON.parse(data);
        for (let i = 1; i <= number; i++){
            contacts.push(createFakeContact());
        }
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
        
    } catch (error) {
       console.log(error.message); 
    }
};

generateContacts(5);
