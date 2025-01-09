import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
    const data = updatedContacts ? JSON.stringify(updatedContacts) : JSON.stringify([]);
 try {
     await fs.writeFile(PATH_DB, data, 'utf-8');
     console.log('ok');
 } catch (error) {
     console.error('Помилка запису:', error);
 }
};
