import { useEffect } from 'react';
import styles from './CurrentVideo.module.scss';
import Statistics from './Statistics/Statistics';
import Description from './Description/Description';
import EmbedVideo from '../../../common/EmbedVideo/EmbedVideo';
import CommentsContainer from '../../../containers/CommentsContainer';
import CommentsFormContainer from '../../../containers/CommentsFormContainer';
import CurrentWatchSkeleton from '../../../common/Skeletons/CurrentWatchSkeleton/CurrentWatchSkeleton';


const CurrentVideo = ({ videoId, watchVideo, setWatchData, setRateVideo, setRatingVideo, rate, isAuth }) => {
    const { statistics, snippet, loading } = watchVideo;

    useEffect(() => {
        let cleanupFunction = false;

        if (!cleanupFunction) {
            setWatchData(videoId);
        }

        return () => cleanupFunction = true;
    }, [videoId, setWatchData]);

    if(loading) {
        return <CurrentWatchSkeleton />
    }

    return (
        <div className={styles.current}>

            <EmbedVideo
                title={snippet?.title}
                id={videoId}
            />

            <div className="current__meta">
                <h2 className={styles.current__title}>{snippet?.title}</h2>

                <Statistics 
                    rate={rate}
                    isAuth={isAuth}
                    snippet={snippet}
                    videoId={videoId}
                    statistics={statistics}
                    setRateVideo={setRateVideo}
                    setRatingVideo={setRatingVideo}
                />

                <Description description={snippet?.description}/>
            </div>

            <CommentsFormContainer videoId={videoId} />
            <CommentsContainer videoId={videoId} />
        </div>
    )
}

export default CurrentVideo;