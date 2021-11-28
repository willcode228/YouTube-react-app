import { watchApi } from '../../api/watchApi';
import { setError } from '../Error/actions';

export const SET_WATCH_DATA = 'WATCH/SET_WATCH_DATA';
export const SET_RELATED_DATA = 'WATCH/SET_RELATED_DATA';
export const SET_MORE_RELATED_DATA = 'WATCH/SET_MORE_RELATED_DATA';
export const SET_RELATED_LOADING = 'WATCH/SET_RELATED_LOADING';

//ACTION CREATORS
const setWatchDataSuccess = (payload) => ({
    type: SET_WATCH_DATA, payload
})

const setRelatedDataSuccess = (payload) => ({
    type: SET_RELATED_DATA, payload
})

const setMoreRelatedDataSuccess = (payload) => ({
    type: SET_MORE_RELATED_DATA, payload
})

const setRelatedLoadingSuccess = (payload) => ({
    type: SET_RELATED_LOADING, payload
})

//THUNKS
export const setWatchData = (videoId) => (dispatch) => {

    watchApi
        .getWatchVideoData(videoId)
        .then(response => {
            dispatch(setWatchDataSuccess(response))
        })
        .catch(error => {
            dispatch(setError(true))
        });
}

export const setRelatedData = (videoId) => (dispatch) => {
    dispatch(setRelatedLoadingSuccess(true));
    
    watchApi
        .getRelatedVideoData(videoId)
        .then(response => {
            dispatch(setRelatedDataSuccess(response));
            dispatch(setRelatedLoadingSuccess(false));
        })
        .catch(error => {
            dispatch(setError(true))
        })
}

export const setMoreRelatedData = () => (dispatch, getState) => {

    const pageToken = getState().watch.relatedVideos.nextPageToken,
        videoId = getState().watch.watchVideo.id;

    watchApi
        .getRelatedVideoData(videoId, pageToken)
        .then(response => {
            dispatch(setMoreRelatedDataSuccess(response));
        })
        .catch(error => {
            dispatch(setError(true))
        })
}
