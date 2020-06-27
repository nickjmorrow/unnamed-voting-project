import * as React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { simulationSelectors } from '~/simulation/state/simulationSelectors';
import { Typography } from '~/core/Typography';

import { Option } from '~/simulation/components/Option';
import { OptionBarListContainer } from '~/simulation/components/OptionBarListContainer';
import { CreateOption } from '~/simulation/components/CreateOption';

export const OptionsManager: React.FC = () => {
    const options = useSelector(simulationSelectors.getOptions);
    return (
        <Container>
            <Typography variant={'h3'}>Options</Typography>
            <OptionBarListContainer>
                {options.map(o => (
                    <Option option={o} key={o.optionId} />
                ))}
                <CreateOption />
            </OptionBarListContainer>
        </Container>
    );
};

const Container = styled.div``;