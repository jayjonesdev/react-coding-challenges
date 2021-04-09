import makeRequest from "./makeRequest";

export const getNewReleases = makeRequest('new-releases').then(d => d.data.albums.items);
export const getPlaylists = makeRequest('featured-playlists').then(d => d.data.playlists.items);
export const getCategories = makeRequest('categories').then(d => d.data.categories.items);