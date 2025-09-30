import fs from "node:fs/promises";
import path from "node:path";

const fileName = "info.txt";
const filePath = path.join(process.cwd(), fileName); // Повний шлях до info.txt
const fileContent = "Node.js is awesome!";

/**
 * Читання та запис файлу.
 */
async function runTask2() {
    console.log(`\n--- Завдання 2: Робота з файлом '${fileName}' ---`);
    
    try {
        // 1. Запис тексту у файл
        console.log(`Записуємо текст у файл: ${fileName}`);
        // Використовуємо 'utf8' кодування за замовчуванням
        await fs.writeFile(filePath, fileContent);
        console.log(`Текст успішно записано у файл '${fileName}'.`);

        // 2. Читання вмісту файлу
        console.log(`Читаємо вміст файлу: ${fileName}`);
        // Вказуємо кодування 'utf8', щоб отримати рядок, а не Buffer
        const data = await fs.readFile(filePath, { encoding: 'utf8' });
        
        console.log(`Вміст файлу '${fileName}':`);
        console.log("----------------------------");
        console.log(data);
        console.log("----------------------------");
        
        // Додатково: видалимо файл після демонстрації
        console.log(`Видаляємо файл: ${fileName}`);
        await fs.unlink(filePath);
        console.log(`Файл '${fileName}' успішно видалено.`);

    } catch (error) {
        // Обробка помилок (наприклад, файл не знайдено або проблеми з правами)
        console.error(`Сталася помилка при роботі з файлом: ${error.message}`);
    }
}

// Запускаємо функцію
export { runTask2 };