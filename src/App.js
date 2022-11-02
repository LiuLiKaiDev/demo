import React from 'react';
import Header from './components/Header'
import Nav from './components/Nav'
import Title from './components/Title'
import Collaspe from './components/common/Collaspe'
import Col from './components/common/Col'
import Card from './components/Card'
import './App.css';

function App() {

  return (
    <div className="app">
      <Header />
      <section className="app__body">
        <Nav />
        <section className="app__content">
          <Title title="Customer Service" />
          <Collaspe title="Primary Contact(s)">
            <Col size="large"><Card size="large"/></Col>
            <Col size="large"><Card size="large" status="invailable"/></Col>
          </Collaspe>
          <Collaspe title="Banking Services">
            <Col size="medium"><Card size="medium"/></Col>
            <Col size="medium"><Card size="medium" status='invailable'/></Col>
            <Col size="medium"><Card size="medium"/></Col>
            <Col size="medium"><Card size="medium"/></Col>
          </Collaspe>
          <Collaspe title="Wealth Management">
            <Col size="medium"><Card size="medium"/></Col>
            <Col size="medium"><Card size="medium" status='invailable'/></Col>
            <Col size="medium"><Card size="medium"/></Col>
          </Collaspe>
          <Collaspe title="Wealth Management">
            <Col size="medium"><Card size="medium"/></Col>
            <Col size="medium"><Card size="medium" status='invailable'/></Col>
            <Col size="medium"><Card size="medium"/></Col>
            <Col size="medium"><Card size="medium" status='invailable'/></Col>
            <Col size="medium"><Card size="medium"/></Col>
          </Collaspe>
        </section>
      </section>
    </div>
  );
  
}

export default App;
