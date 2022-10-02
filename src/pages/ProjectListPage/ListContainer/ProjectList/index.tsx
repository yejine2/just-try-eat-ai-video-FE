import { useState } from 'react';
import { PROJECT_DATA } from '~/pages/ProjectListPage/data';
import ProjectCard from '../../Card/ProjectCard';
import NoticeModal from '~/components/Popup/NoticeModal';

import * as S from './style';
import plus from '~/assets/icons/plus.svg';
import ProjectSelectModal from '~/components/Popup/ProjectSelectModal';

function ProjectList() {
  const [showNoticeModal, setShowNoticeModal] = useState(false);

  const onProjectAddHandler = () => {
    setShowNoticeModal(true);
  };

  return (
    <>
      <S.ListBlock>
        <S.ListHeader>
          <S.ListTitle>내 프로젝트</S.ListTitle>
          <S.Button onClick={onProjectAddHandler}>
            <img src={plus} alt="plus-icon" />
            <S.ButtonText>새프로젝트</S.ButtonText>
          </S.Button>
        </S.ListHeader>
        <S.ListCard>
          {PROJECT_DATA?.map((project) => (
            <ProjectCard key={project.projectId} project={project} />
          ))}
        </S.ListCard>
      </S.ListBlock>
      {showNoticeModal && PROJECT_DATA.length === 5 && (
        <NoticeModal
          setShowNoticeModal={setShowNoticeModal}
          content={
            '프로젝트는 5개까지 제작 가능해요 \n 사용하지 않는 프로젝트를 삭제해주세요'
          }
        />
      )}
      {showNoticeModal && PROJECT_DATA.length < 5 && (
        <ProjectSelectModal setShowNoticeModal={setShowNoticeModal} />
      )}
    </>
  );
}

export default ProjectList;
