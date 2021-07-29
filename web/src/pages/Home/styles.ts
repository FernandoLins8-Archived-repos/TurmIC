import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  z-index: 2;

  border-bottom: 1px solid var(--gray-300);

  h1 {
    color: var(--gray-700);
    text-align: center;
    margin-right: 48px;
    position: absolute;
    left: 96px;
  }

  input {
    border: 1px solid var(--gray-500);
    border-radius: 8px;
    padding: 8px 16px;

    outline: 0;

    &:focus {
      border: 1px solid #709dff;
    }
  }
`;

export const Body = styled.div`
  background: var(--gray-100);

  position: relative;
  top: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 48px 48px;
`;

export const List = styled.div` 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  max-width: 768px;
`;

export const Item = styled.div`
  padding: 24px 48px 48px 24px;
  width: 368px;
  margin-bottom: 24px;

  border-radius: 8px;
  border: 1px solid var(--gray-300);
  background: white;

  .separator {
    margin: 0 8px;
  }

  .subject {
    color: var(--gray-700);
    font-weight: bold;
    font-size: 18px;
  }

  .code {
    color: var(--gray-500);
    font-size: 14px;
  }

  .teacher {
    color: var(--gray-600);
    font-size: 16px;
    display: block;
    margin-top: 8px;
  }
`;

