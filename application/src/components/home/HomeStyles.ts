import styled from 'styled-components';
import { colors, fonts } from '../../brand';

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  width: 100%;
  minHeight: 100%;
`;

export const HomeContainer = styled.div`
  border: 0.1px solid ${colors.WHITE};
`;

export const TitleText = styled.p`
  font-family: ${fonts.SANS_SERIF};
  font-size: 22px;
  text-align: center;
`
