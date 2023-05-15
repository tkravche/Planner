
import styled from 'styled-components';

export const ToolbarWrapper = styled.div`
display: flex;
flex-direction:column;
align-items: flex-start;
margin-bottom: 24px;

@media screen and (min-width: 768px) {
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 32px;
  }
 
`;
