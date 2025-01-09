import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {

    try {
        let contacts = await readContacts(); //читаю існуючи

        const newContacts = []; //масив для нових контактів

        //додавання нових
        for (let i = 0; i < number; i++) {
        newContacts.push(createFakeContact());
    }

    contacts = [...contacts, ...newContacts];
        await writeContacts(contacts);
    } catch (error) {
        console.log('Помилка', error);
    }

};

generateContacts(5);
