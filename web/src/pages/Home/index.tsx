import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, Header, List, Item, Body } from './styles';

const Home: React.FC = () => {

  const [ items, setItems ] = useState<any[]>([]);

  useEffect(() => {
    api.get('/subject-tag').then((response) => {

      setItems(response.data);

    }).catch((e) => {
      console.log(e);
    });
  }, []);

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
        <List>
          {listItems && "Sem resultados"}
        </List>
      </Body>
    </Container>
  );
}

export default Home;

