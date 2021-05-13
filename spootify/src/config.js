import apiInfo from './secretInfo.js';

export default {
  api: {
    baseUrl: 'https://api.spotify.com/v1',
    authUrl: 'https://accounts.spotify.com/api/token',
    clientId: apiInfo.clientId,
    clientSecret: apiInfo.clientSecret
  }
}
