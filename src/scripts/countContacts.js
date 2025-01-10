import { readContacts } from "../utils/readContacts.js";
export const countContacts = async () => {

    const contacts = await readContacts();
    if (contacts) {
        console.log(`Кількість контактів: ${contacts.length}`);
        return contacts.length;
    } else {
        console.log('Контактів не знайдено.');
        return 0;
    };
};


console.log(await countContacts());
