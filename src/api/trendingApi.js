import { instance } from './api';

const params = {
    part: 'snippet,contentDetails,statistics',
    chart: 'mostPopular',
}

const getTrendingData = (pageToken) => {
    return instance
    .get('videos', { 
        params: {
            ...params,
            pageToken
        }
    })
    .then(response => response.data);
}

export const trendingApi = { getTrendingData };