import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try {
        //читаємо існуючи контакти
        let contacts = await readContacts();

        //Новий контакт
        const newContact = createFakeContact();

        //додаємо новий контакт в масив
        contacts.push(newContact);
        //записуємо новий масив
        await writeContacts(contacts);
    } catch (error) {
        console.error(error);
    }
};

addOneContact();
