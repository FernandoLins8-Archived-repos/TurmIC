import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';

import api from '../../services/api';

import { 
  Container, 
  Header, 
  List, 
  Item, 
  Body, 
  Filter, 
  FilterCourseButton, 
  FilterPeriodButton
} from './styles';

interface ICourseGroups {
  id: string
  instructor: {
    name: string
    email: string
  }
  schedule: {
      week_day: string
      id: string
      start: string
      finish: string
  } []
  subject: {
    code: string
    course: string
    name: string
    period: string
  }
}

const Home: React.FC = () => {
  const [ courseGroups, setCourseGroups ] = useState<ICourseGroups[]>([]);
  const [ selectedCourse, setSelectedCourse ] = useState('');
  const [ selectedPeriod, setSelectedPeriod ] = useState('*');

  const [ groupsToDisplay, setGroupsToDisplay ] = useState<ICourseGroups[]>([])
  const [ searchTerm, setSearchTerm ] = useState('')

  const periods = ['*', '1', '2', '3', '4', '5', '6', '7', '8']
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
  
  useEffect(() => {
    if(!selectedCourse) {
      return
    }
    
    api.get(`/group/${selectedCourse}`).then((res) => {
      setCourseGroups(res.data);
      setGroupsToDisplay(res.data)
      setSelectedPeriod('*')

    }).catch((e) => {
      console.log(e);
    });
  }, [selectedCourse]);

  useEffect(() => {
    if(selectedPeriod === '*') {
      setGroupsToDisplay(courseGroups)
      return
    }

    const filteredGroups = courseGroups.filter(group => group.subject.period === selectedPeriod)
    setGroupsToDisplay(filteredGroups)

  }, [courseGroups, selectedPeriod]);

  useEffect(() => {
    if(!searchTerm) {
      setGroupsToDisplay(courseGroups)
      return
    }

    const filteredGroups = groupsToDisplay
    .filter(group => group.subject.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setGroupsToDisplay(filteredGroups)

  }, [courseGroups, groupsToDisplay, searchTerm])

  function handleCourseFilter(event: FormEvent) {
    const target = event.target as HTMLElement;
    setSelectedCourse(target.id);
  }

  function handlePeriod(event: FormEvent) {
    const target = event.target as HTMLElement;
    setSelectedPeriod(target.id);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value)
  }

  const courseButtons = courses.map(course => (
    <FilterCourseButton 
      id={course.code}
      onClick={handleCourseFilter}
      selected={(selectedCourse === course.code)}
    >
      {course.name}
    </FilterCourseButton>
  ))

  const periodButtonsDiv = 
    <div> {
      periods.map(period => (
        <FilterPeriodButton 
          id={period}
          onClick={handlePeriod}
          selected={selectedPeriod === period}
        >
          {period}
        </FilterPeriodButton>
      ))}
    </div>

  const listItems = groupsToDisplay.map((subject) => 
  <Item key={subject.id}>
    <div className="subject-info">
      <span className="subject">{subject.subject.name}</span> <br />
      <span className="code">{subject.subject.code}</span>
    </div>

    <p className="teacher"><strong>Prof. </strong>{subject.instructor.name}</p> <br />

    {
      subject.schedule.map(schedule => (
        <p className="schedule">{schedule.week_day} {schedule.start} - {schedule.finish}</p>
      ))
    }
  </Item>
  );

  return (
    <Container>
      <Header>
        <h1>TurmIC</h1>
        <input 
          type="text" 
          placeholder="Pesquisar" 
          value={searchTerm}
          onChange={handleInputChange}
        />
      </Header>
      <Body>
        <Filter>
          {courseButtons}
          {periodButtonsDiv}
        </Filter>
        <List>
          {(selectedCourse === '') ? 'Selecione um curso e período.' : ''}
          {(selectedCourse !== '' && listItems.length === 0) ? 'Sem resultados' : listItems }
        </List>
      </Body>
    </Container>
  );
}

export default Home;

