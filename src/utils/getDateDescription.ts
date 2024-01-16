export const getDateDescription = (
    type: 'day' | 'minute' | 'hour' | 'month' | 'second',
    count: number
) => {
    const countString = count.toString();

    const endsWithOne = countString.endsWith('1');

    const endsWithLessFour =
        countString.endsWith('2') ||
        countString.endsWith('3') ||
        countString.endsWith('4');

    switch (type) {
        case 'second': {
            if (count === 1) {
                return count + 'секунда назад';
            }

            if (count <= 4) {
                return count + ' секунды назад';
            }

            return count + ' секунд назад';
        }

        case 'minute': {
            if (count === 1) {
                return count + ' минута назад';
            }
            if (count > 20 && endsWithOne) {
                return count + ' минута назад';
            }

            if (endsWithLessFour) {
                return count + ' минуты назад';
            }

            return count + ' минут назад';
        }

        case 'hour': {
            if (count === 11 || count === 1) {
                return count + ' час назад';
            }

            if (count === 21) {
                return count + ' час назад';
            }

            if (count <= 4) {
                return count + ' часа назад';
            }

            return count + ' часов назад';
        }

        case 'day': {
            if (count === 1) {
                return count + ' день назад';
            }

            if (count > 20 && endsWithOne) {
                return count + ' день назад';
            }

            if (count <= 4) {
                return count + ' дня назад';
            }

            return count + ' дней назад';
        }

        case 'month': {
            if (count === 1) {
                return count + ' месяц назад';
            }

            if (endsWithLessFour) {
                return count + ' месяца назад';
            }

            return count + ' месяцев назад';
        }
    }
};
