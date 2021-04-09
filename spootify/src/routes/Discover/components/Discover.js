import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import { getCategories, getNewReleases, getPlaylists } from '../../../api';

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
      loading: true
    };
  }

  componentDidMount() {
    Promise.all([getNewReleases, getPlaylists, getCategories]).then(data => {
      this.setState({
        newReleases: data[0],
        playlists: data[1],
        categories: data[2],
        loading: false
      });
    });
  }

  render() {
    const { newReleases, playlists, categories, loading } = this.state;

    return (
      <div className="discover">
        {loading ? <span>Loading...</span> : <>
          <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
          <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
          <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
        </>}
      </div>
    );
  }
}
