import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
    const data = updatedContacts ? JSON.stringify(updatedContacts, null, 2) : JSON.stringify([], null, 2);
    //додавання null, 2 дає можливість побачити json не строкою, а быльш читабельным
 try {
     await fs.writeFile(PATH_DB, data, 'utf-8');
     console.log('ok');
 } catch (error) {
     console.error('Помилка запису:', error);
 }
};
