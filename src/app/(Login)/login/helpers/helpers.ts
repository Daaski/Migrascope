export function checkStringForDigitsAndLetters(str: string) {
    const digitRegex = /[0-9]/;
    const letterRegex = /[a-zA-Z]/;

    // Проверяем, содержит ли строка и цифры, и буквы
    return digitRegex.test(str) && letterRegex.test(str);
}
