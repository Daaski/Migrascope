import Image from 'next/image';

import { BlanksDescription } from 'app/(Main)/forms/components/Blanks/consts';

import BlanksImage from '/public/images/blanks/Checklist.png';

import scss from './Blanks.module.scss';
import { BlanksItem } from 'app/(Main)/forms/components/Blanks/BlanksItem';

const temporaryData = [
    'Уведомление о заключении ТД',
    'Уведомление о заключении ТД',
    'Уведомление о заключении ТД',
    'Уведомление о заключении ТД',
];

export const Blanks = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return temporaryData.length === 0 ? (
        <section className={scss.empty_blanks}>
            <div>
                <h2 className={scss.blanks_title}>
                    Добро пожаловать в раздел бланки!
                </h2>
                <ul className={scss.blanks_descriptions}>
                    {BlanksDescription.map((el, index) => (
                        <li
                            key={index}
                            className={scss.blanks_description_item}
                        >
                            {el}
                        </li>
                    ))}
                </ul>
            </div>
            <Image
                width={140}
                height={190}
                src={BlanksImage}
                alt="Изображение Чеклиста"
            />
        </section>
    ) : (
        <ul className={scss.blanks_list}>
            {temporaryData.map((el, index) => (
                <BlanksItem name={el} key={index} />
            ))}
        </ul>
    );
};
