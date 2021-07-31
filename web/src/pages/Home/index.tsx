import React, { useState, useEffect, FormEvent } from 'react';

import api from '../../services/api';

import { 
  Container, 
  Header, 
  List, 
  Item, 
  Body, 
  Filter, 
  FilterButton 
} from './styles';

const Home: React.FC = () => {

  const [ items, setItems ] = useState<any[]>([]);
  const [ data, setData ] = useState<any[]>([]);
  const [ courseButtonIdSelected, setCourseButtonIdSelected ] = useState("all");

  useEffect(() => {
    api.get('/subject').then((response) => {

      setItems(response.data);
      setData(response.data);

    }).catch((e) => {
      console.log(e);
    });
  }, []);

  function handleCourseFilter(event: FormEvent) {

    const target = event.target as HTMLElement;
    setCourseButtonIdSelected(target.id);

    if(target.id != "all") {
      setItems(data.filter((item) => item.course === target.id));
    }else{
      setItems(data);
    }

  }

  const listItems = items.map((item) => 
    <Item key={item.code}>
      <span className="subject">{item.name}</span><span className="separator">&#183;</span> 
      <span className="code">{item.code}</span><br/>
      <span className="teacher">Lorem Ipsum</span>
    </Item>
  );

  return (
    <Container>
      <Header>
        <h1>TurmIC</h1>
        <input type="text" placeholder="Pesquisar" />
      </Header>
      <Body>
        <Filter>

          <FilterButton 
            id="CC"
            onClick={handleCourseFilter}
            selected={(courseButtonIdSelected === "CC")}
          >
            Ciência da computação
          </FilterButton>

          <FilterButton
            id="EC"
            onClick={handleCourseFilter}
            selected={(courseButtonIdSelected === "EC")}
          >
            Engenharia da computação
          </FilterButton>

          <FilterButton
            id="all"
            onClick={handleCourseFilter}
            selected={(courseButtonIdSelected === "all")}
          >
            Todos
          </FilterButton>

        </Filter>
        <List>
          {(listItems) ? listItems : "Sem resultados"}
        </List>
      </Body>
    </Container>
  );
}

export default Home;

