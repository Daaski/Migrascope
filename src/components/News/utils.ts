import { NewsType } from 'components/News/types';
import { getDateDescription } from 'utils/getDateDescription';

export function getTitleDesc(
    type: NewsType['type'],
    username?: string,
    userTo?: string
) {
    switch (type) {
        case 'addFile':
            return 'Добавлен файл';
        case 'commentary':
            return `Коментарий от ${username} для ${userTo}`;
        case 'completed':
            return 'Выполнена задача';
        case 'moved':
            return 'Сдвинута задача';
    }
}

function msToTime(ms: number): {
    count: number;
    type: 'minute' | 'second' | 'hour' | 'day' | 'month';
} {
    const seconds = Math.round(ms / 1000);
    const minutes = Math.round(ms / (1000 * 60));
    const hours = Math.round(ms / (1000 * 60 * 60));
    const days = Math.round(ms / (1000 * 60 * 60 * 24));
    const months = Math.round(ms / (1000 * 60 * 60 * 24 * 30));
    if (+seconds < 60) return { count: seconds, type: 'second' };
    else if (+minutes < 60) return { count: minutes, type: 'minute' };
    else if (+hours < 24) return { count: hours, type: 'hour' };
    else if (+days <= 31) {
        return { count: days, type: 'day' };
    } else {
        return { count: months, type: 'month' };
    }
}

export function getTimeDescription(time: Date) {
    const ms = msToTime(Date.now() - time.getTime());

    return getDateDescription(ms.type, ms.count);
}
