import { emptySplitApiWithReauth } from '.';
import { TVideoData } from '~/types/project/projects';

export const videoListApi = emptySplitApiWithReauth.injectEndpoints({
  endpoints: (build) => ({
    getVideos: build.query<TVideoData[], void>({
      query: () => ({
        url: `projects/videos`,
      }),
    }),
  }),
});

export const { useGetVideosQuery } = videoListApi;
