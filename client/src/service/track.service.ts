import axios from './api'

type createTrackType = {
  name: string;
  artist: string;
  text: string;
  picture: Buffer;
  audio: File;
};

const TrackService = {
  async getAllTracks() {
    try {
      const { data } = await axios.get("/");
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async findById(id: string) {
    try {
      const { data } = await axios.get(`/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteFindById(id: string) {
    try {
      const { data } = await axios.delete(`/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async createTrack(props: createTrackType) {
    try {
      const { data } = await axios.post(`/`, props);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async searchHandler(query: string) {
    try {
        const {data} = await axios.get(`/search/?query=${query}`)
        return data
    } catch (error) {
        console.log(error)
    }
  }
};

export default TrackService;
