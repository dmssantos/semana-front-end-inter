import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div<{ image: any }>`
  width: 100%;
  height: 50vh;

  position: absolute;
  top: 0;
  left: 0;

  background-image: url(${({ image }) => image});
  background-size: contain;
  z-index: 1;
`;

export const InputContainer = styled.div`
  width: 90%;
  margin-top: 67px;
  flex: 1;
`;

export const ButtonContainer = styled.div`
  width: 90%;
  margin-top: 20px;
  
  display: flex;
  align-items: center;
  flex-direction: column;

  p{
    font-size: 0.75rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondary};
 
    a {
      font-size: 1rem;
      font-weight: 700;
    }
   }
`;