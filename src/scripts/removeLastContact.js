import fs from 'node:fs/promises';
import { PATH_DB } from "../constants/contacts.js";
export const removeLastContact = async () => {
    try {
        let data =JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
        data.pop();
        await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        console.error(error);
    }
};

removeLastContact();
