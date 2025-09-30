import fs from "node:fs/promises";
import path from "node:path";

const folderName = "myFolder";
const folderPath = path.join(process.cwd(), folderName); // Повний шлях до myFolder

/**
 * Створення та видалення каталогу.
 */
async function runTask1() {
    console.log(`--- Завдання 1: Робота з каталогом '${folderName}' ---`);

    try {
        // 1. Створення каталогу
        console.log(`Створюємо каталог: ${folderName}`);
        // { recursive: true } гарантує, що не буде помилки, якщо папка вже існує,
        // та створить батьківські папки, якщо потрібно.
        await fs.mkdir(folderPath, { recursive: true }); 
        console.log(`Каталог '${folderName}' успішно створено.`);
        
        // Додамо невелику затримку для демонстрації
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // 2. Видалення каталогу
        console.log(`Видаляємо каталог: ${folderName}`);
        // { recursive: true } - для видалення вмісту, { force: true } - для ігнорування помилок,
        // якщо каталог не існує, але для rmdir, якщо він порожній, достатньо лише path.
        // Для сучасних версій Node.js краще використовувати fs.rm() з опцією { recursive: true }.
        await fs.rm(folderPath, { recursive: true, force: true });
        console.log(`Каталог '${folderName}' успішно видалено.`);

    } catch (error) {
        // Обробка помилок (наприклад, проблеми з правами доступу)
        console.error(`Сталася помилка при роботі з каталогом: ${error.message}`);
    }
}

// Запускаємо функцію
export { runTask1 };