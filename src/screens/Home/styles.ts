import { Image, View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.blue};
`;

export const ImageLanding = styled(Image)`
  width: 120;
  height: 100;

`;
