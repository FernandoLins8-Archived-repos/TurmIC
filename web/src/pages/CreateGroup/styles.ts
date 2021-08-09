import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  height: 480px;
  width: 368px;
  padding: 24px;

  background: #fff;
  border-radius: 8px;
  border: 1px solid var(--gray-300);

  input {

    border: 1px solid var(--gray-500);
    border-radius: 8px;
    padding: 8px 16px;

    outline: 0;

    &:focus {
      border: 1px solid #709dff;
    }

  }

  button {
    margin: 32px;
    padding: 8px 16px;
    border-radius: 16px;
    font-size: 15px;
    font-weight: bold;
    background: #2469FF;
    color: #fff;
  }
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;

  select {
    padding: 8px;
    background: var(--gray-300);
  }
`;
