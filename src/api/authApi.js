
const signIn = () => {
    return window.gapi.auth2
        .getAuthInstance()
        .signIn({ scope: 'https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtubepartner' })
        .then(googleUser => {
            return ({
                userProfile: {
                    image: googleUser.getBasicProfile().getImageUrl(),
                    email: googleUser.getBasicProfile().getEmail(),
                    name: googleUser.getBasicProfile().getName(),
                    id: googleUser.getBasicProfile().getId(),
                }, 
                accessToken: googleUser.getAuthResponse().access_token,
                accessTokenType: googleUser.getAuthResponse().token_type
            }) 
        })
}

export const authApi = { signIn };