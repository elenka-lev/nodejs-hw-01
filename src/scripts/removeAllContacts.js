import { PATH_DB } from "../constants/contacts.js";
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {


    try {
        let data = [];
        await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf-8');
        console.log('Всі контакти видалені');
    } catch (error) {
        console.error(error);
    }

};

removeAllContacts();
