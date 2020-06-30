// external
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Typography } from '~/core/Typography';
import { Question } from '~/poll-creation/components/Question';
import { TitleDescription } from '~/poll-creation/components/TitleDescription';
import { pollCreationSelectors } from '~/poll-creation/state/pollCreationSelectors';
import { CreateQuestionButton } from '~/poll-creation/components/CreateQuestionButton';

export const CreatePollPage: React.FC = () => {
    const pollCreationState = useSelector(pollCreationSelectors.getPollCreationState);

    return (
        <Container>
            <Typography variant={'h2'}>Create Poll</Typography>
            <TitleDescription />
            {pollCreationState.questions.map(q => (
                <Question question={q} key={q.questionId} />
            ))}
            <CreateQuestionButton />
        </Container>
    );
};

const Container = styled.div``;