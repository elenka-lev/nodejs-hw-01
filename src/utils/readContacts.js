import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        console.log(data);
        return JSON.parse(data);
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('Файл не існує.'); // якщо файл не знайдено
            return null;
        } else {
            console.error('Помилка читання файлу:', err); //якщо інша помилка
            return null; // повертаємо null
        }
    }

};
