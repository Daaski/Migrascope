import { NewsItem } from 'components/News/components/NewsItem';

import { temporaryNews } from 'components/News/types';

import scss from './News.module.scss';

export const News = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return (
        <aside className={scss.news_layout}>
            <div className={scss.news}>
                <h3 className={scss.news_title}>Новости</h3>
                {temporaryNews.map((el, index) => (
                    <NewsItem
                        last={index === temporaryNews.length - 1}
                        key={index}
                        {...el}
                    />
                ))}
            </div>
        </aside>
    );
};
