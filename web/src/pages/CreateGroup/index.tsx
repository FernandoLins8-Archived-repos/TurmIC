import React from 'react';

import { Container, Form, InputBlock } from './styles';

function Group() {

  const periods = ['1', '2', '3', '4', '5', '6', '7', '8']
  const courses = [
    {
      name: 'Ciência da computação',
      code: 'CC'
    },
    {
      name: 'Engenharia da computação',
      code: 'EC'
    },
  ]

  const courseOptions = courses.map(course => (
    <option value={course.name}>
      {course.name}
    </option>
  ));

  const periodOptions = periods.map(period => (
    <option value={period}>
      {period}
    </option>
  ));

  return (
    <Container>
      <Form>
        <InputBlock>
          <label htmlFor="email">E-mail do professor</label>
          <input type="text" id="email" />
        </InputBlock>

        <InputBlock>
          <label htmlFor="name">Nome do professor</label>
          <input type="text" id="name" />
        </InputBlock>

        <InputBlock>
          <label htmlFor="courses">Curso</label>
          <select name="courses" id="courses">
            {courseOptions}
          </select>
        </InputBlock>

        <InputBlock>
          <label htmlFor="periods">Período</label>
          <select name="periods" id="periods">
            {periodOptions}
          </select>
        </InputBlock>

        <button>
          Criar
        </button>
      </Form>
    </Container>
  );
}

export default Group;
