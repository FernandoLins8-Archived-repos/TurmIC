import styled from 'styled-components';
import { GoPlus } from 'react-icons/go';

interface ICourseButtonProps {
  selected?: boolean;
}

interface IPeriodButtonProps extends ICourseButtonProps {
  id: string;
}

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  width: 100%;
  height: 80px;
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

  a {
    border-radius: 50%;
    padding: 8px;

    position: absolute;
    right: 96px;

    &:hover {
      background: var(--gray-100);
    }
  }
`;

export const PlusIcon = styled(GoPlus)`
  height: 24px;
  width: 24px;
  margin-bottom: -4px;
  
  fill: var(--gray-400);
`;

export const Body = styled.div`
  background: var(--gray-100);

  position: relative;
  top: 56px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 32px 48px;
`;

export const Filter = styled.div`
  padding-bottom: 24px;
  text-align: center;
`;

export const FilterCourseButton = styled.button<ICourseButtonProps>`
  background: ${(props) => (props.selected) ? "var(--gray-700)" : "#fff"};
  padding: 8px 16px;
  border: 1px solid var(--gray-300);
  border-radius: 16px;
  margin: 8px;
  color: ${(props) => (props.selected) ? "#fff" : "var(--gray-700)"};
`;

export const FilterPeriodButton = styled(FilterCourseButton)<IPeriodButtonProps>`

`;

export const List = styled.div` 
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 16px 20px;
  padding: 24px;
`;

export const Item = styled.div`
  padding: 24px 20px;
  width: 368px;

  text-align: left;

  border-radius: 8px;
  border: 1px solid var(--gray-300);
  background: white;

  transition: all 0.2s;

  &:hover {
      border: 1px solid #4e6db2;
      cursor: pointer;
      transform: scale(1.05);
    }

  .subject {
    color: var(--gray-700);
    font-weight: bold;
    font-size: 17px;
  }

  .code {
    color: var(--gray-500);
    font-size: 14px;
  }

  .teacher {
    color: var(--gray-600);
    font-size: 15px;
    margin-top: 8px;
  }

  .schedule {
    color: var(--gray-600);
    display: block;
    font-size: 15px;
    font-style: italic;
    line-height: 1.3;
  }
`;
