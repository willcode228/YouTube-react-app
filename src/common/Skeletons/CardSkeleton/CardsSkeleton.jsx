import CustomTheme from '../CustomTheme';
import Skeleton from 'react-loading-skeleton';
import styles from './CardsSkeletons.module.scss';

const VideoCardsSkeleton = ({ vertical, small }) => {

    if (vertical) {
        return (
            <CustomTheme>
                <div className={`${styles.vertical__wrapper} ${small ? styles.small : ''}`}>
                    <Skeleton height={small ? 120 : 175}></Skeleton>
                    <Skeleton height={small ? 48 : 55}></Skeleton>
                    <div className={styles.vertical__line}>
                        <Skeleton width={35} height={35} circle></Skeleton>
                        <div className={styles.vertical__time}>
                            <Skeleton height={35}></Skeleton>
                        </div>
                    </div>
                    {!small && <Skeleton height={25}></Skeleton>}
                </div>
            </CustomTheme>
        )
    }

    return (
        <CustomTheme>
            <div className={`${styles.horizontal__wrapper} ${small ? styles.small : ''}`}>

                <div className={styles.horizontal__img}>
                    <Skeleton height='100%' borderRadius={10}></Skeleton>
                </div>

                <div className={styles.horizontal__meta}>
                    <Skeleton height={45}></Skeleton>

                    <div className={styles.horizontal__info}>
                        <Skeleton width={35} height={35} circle></Skeleton>

                        <div className={styles.horizontal__lines}>

                            <div className={styles.horizontal__hidden__lines}>
                                <Skeleton width={150} height={30}></Skeleton>
                                <Skeleton width={100} height={30}></Skeleton>
                            </div>

                            <div className={styles.horizontal__line}>
                                <Skeleton height={30}></Skeleton>
                            </div>
                        </div>
                    </div>

                    <div className={styles.horizontal__description}>
                        <Skeleton height='100%'></Skeleton>
                    </div>
                </div>
            </div>
        </CustomTheme>
    )
}

export default VideoCardsSkeleton;