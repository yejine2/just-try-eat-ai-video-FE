import {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

import { emptySplitApiWithReauth } from './';
import { projectsApi } from './projects';
import { projectTextApi } from './projectText';

import {
  ICreateAudioSentenceData,
  ICreateAudioTextData,
  IGoToAvatarRequest,
  IProjectSentence,
  pickICreateAudioSentenceData,
  pickICreateAudioTextData,
  pickIGoToAvatarRequest,
  pickISentenceRequest,
} from '~/types/project/sentence';
import { IProjectAvatar } from '~/types/project/projects';

export const projectSentenceApi = emptySplitApiWithReauth.injectEndpoints({
  endpoints: (build) => ({
    getSentences: build.query<IProjectSentence, number>({
      queryFn: async (
        projectId,
        { dispatch }
      ): Promise<
        QueryReturnValue<
          IProjectSentence,
          FetchBaseQueryError,
          FetchBaseQueryMeta
        >
      > => {
        try {
          const getProject = dispatch(
            projectsApi.endpoints.getProject.initiate(projectId, {
              forceRefetch: true,
            })
          );

          let project: Awaited<ReturnType<typeof getProject.unwrap>>;
          try {
            project = await getProject.unwrap();
          } finally {
            getProject.unsubscribe();
          }

          const goToSentence = dispatch(
            projectTextApi.endpoints.goToSentence.initiate(
              pickISentenceRequest(project)
            )
          );

          let sentences: Awaited<ReturnType<typeof goToSentence.unwrap>>;
          try {
            sentences = await goToSentence.unwrap();
          } finally {
            goToSentence.unsubscribe();
          }

          return {
            data: sentences,
          };
        } catch (error) {
          return {
            error: error as FetchBaseQueryError,
          };
        }
      },
    }),
    createAudioSentence: build.query<
      ICreateAudioSentenceData,
      ICreateAudioSentenceData
    >({
      query: (data: ICreateAudioSentenceData) => ({
        url: 'projects/audio/sentence',
        method: 'POST',
        body: pickICreateAudioSentenceData(data),
      }),
    }),
    createAudioText: build.query<ICreateAudioTextData, ICreateAudioTextData>({
      query: (data: ICreateAudioTextData) => ({
        url: 'projects/audio/text',
        method: 'POST',
        body: pickICreateAudioTextData(data),
      }),
    }),
    goToAvatar: build.mutation<IProjectAvatar, IGoToAvatarRequest>({
      query: (data: ICreateAudioSentenceData) => ({
        url: 'projects/edit/audio',
        method: 'PUT',
        body: pickIGoToAvatarRequest(data),
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLazyCreateAudioSentenceQuery, useLazyCreateAudioTextQuery } =
  projectSentenceApi;
