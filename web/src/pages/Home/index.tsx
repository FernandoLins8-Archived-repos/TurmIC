import React from 'react';

import { Container, Header, List, Item } from './styles';

function Home() {
  return (
    <Container>
      <Header>
        <h1>TurmIC</h1>
        <input type="text" placeholder="Pesquisar" />
      </Header>
      <List>
        <Item>
          <span className="subject">lorem ipsum</span><span className="separator">&#183;</span> 
          <span className="code">COMP236</span><br/>
          <span className="teacher">lorem ipsum</span>
        </Item>
        
        <Item>
          <span className="subject">lorem ipsum</span><span className="separator">&#183;</span> 
          <span className="code">COMP236</span><br/>
          <span className="teacher">lorem ipsum</span>
        </Item>
      </List>
    </Container>
  );
}

export default Home;

