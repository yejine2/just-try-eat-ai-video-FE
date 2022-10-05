import React from 'react';
import { VIDEO_DATA } from '~/pages/ProjectListPage/data';
import VideoCard from '../../Card/VideoCard';
import * as S from './style';

function VideoList() {
  return (
    <S.ListBlock>
      <S.ListTitle>영상 리스트</S.ListTitle>
      {VIDEO_DATA.length === 0 ? (
        <S.EmptyBlock>
          <S.EmptyBlockTitle>생성된 영상이 없습니다</S.EmptyBlockTitle>
        </S.EmptyBlock>
      ) : (
        <S.ListCard>
          {VIDEO_DATA?.map((video) => (
            <VideoCard key={video.videoId} video={video} />
          ))}
        </S.ListCard>
      )}
    </S.ListBlock>
  );
}

export default VideoList;
