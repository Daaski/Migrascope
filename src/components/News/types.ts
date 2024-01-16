function generateRandomDate(from: Date, to: Date) {
    return new Date(
        from.getTime() + Math.random() * (to.getTime() - from.getTime())
    );
}

export interface NewsType {
    type:
        | 'completed' //
        | 'moved' //
        | 'addFile' //
        | 'commentary'; //
    username: string;
    userTo?: string;
    avatar: string;
    title: string;
    platform: string;
    time: Date;
}

export interface NewsItemProps extends NewsType {
    last: boolean;
}

export const temporaryNews: NewsType[] = [
    {
        avatar: 'test',
        platform: 'Web',
        title: 'Фронт для Keyman24',
        time: generateRandomDate(new Date(2023, 11, 27), new Date()),
        type: 'completed',
        username: 'test@mail.ru',
    },
    {
        avatar: 'test',
        platform: 'Web',
        title: 'Фронт для Keyman24',
        time: generateRandomDate(new Date(2023, 11, 5), new Date()),
        type: 'addFile',
        username: 'test@mail.ru',
    },
    {
        avatar: 'test',
        platform: 'Web',
        title: 'Фронт для Keyman24',
        time: new Date(2023, 11, 10),
        type: 'commentary',
        username: 'test@mail.ru',
        userTo: 'userTo',
    },
    {
        avatar: 'test',
        platform: 'Web',
        title: 'Фронт для Keyman24',
        time: new Date(2023, 5, 26),
        type: 'moved',
        username: 'test@mail.ru',
    },
];
