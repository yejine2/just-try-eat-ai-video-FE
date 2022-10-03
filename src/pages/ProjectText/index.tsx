import { useParams } from 'react-router-dom';

import * as S from '~/pages/ProjectText/styles';

import ProjectTextStepper from '~/pages/ProjectText/ProjectTextStepper';

const ProjectTextPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = useParams();

  return (
    <S.Container>
      <S.HeaderContainer>
        <ProjectTextStepper />
      </S.HeaderContainer>
      <S.ContentsContainer>
        <S.Textarea />
        <S.VoiceOptions />
        <S.VoiceSelect />
      </S.ContentsContainer>
    </S.Container>
  );
};

export default ProjectTextPage;
