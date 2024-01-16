import { Button } from 'components/UI/Buttons/Button';
import { AdditionalButton } from 'components/UI/Buttons/AdditionalButton';
import { ProfileSvgWrapper } from 'components/Profile/ProfileSvgWrapper';

import scss from 'components/Profile/Profile.module.scss';

export const Profile = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return (
        <section className={scss.profile_layout}>
            <div className={scss.profile_container}>
                <div className={scss.profile_data}>
                    <ProfileSvgWrapper />
                    <h2 className={scss.profile_username}>User Name</h2>
                    <p className={scss.profile_email}>username@mail.ru</p>
                </div>
                <div className={scss.profile_actions}>
                    <AdditionalButton size="big" svg="ellipsis" type="button" />
                    <Button size="medium" type="button">
                        Выйти
                    </Button>
                </div>
            </div>
        </section>
    );
};
