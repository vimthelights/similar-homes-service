import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 2;
  display: inline-flex;
  top: 0;
  right: 0;
  padding: 5px;
`;

const HeartRed = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.912-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" fill="#ff5e3f"></path></svg>
);

const HeartGrey = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M26.95 11.863a5.193 5.193 0 0 1-1.53 3.69l-1.913 1.912-7.373 7.373-7.371-7.373-1.912-1.912a5.214 5.214 0 1 1 7.377-7.366l1.906 1.907 1.908-1.908a5.214 5.214 0 0 1 8.908 3.677z" fillOpacity=".4" fill="#000"></path><path d="M26.95 11.863a5.214 5.214 0 0 0-8.908-3.677l-1.908 1.908-1.906-1.908a5.214 5.214 0 1 0-7.377 7.366l1.912 1.913 7.371 7.373 7.373-7.373 1.912-1.912a5.193 5.193 0 0 0 1.53-3.69zM16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.913-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" fill="#FFF"></path></g></svg>
);

class Heart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    const HeartSVG = this.state.liked ? HeartRed : HeartGrey;
    return (
      <Container onClick={this.handleClick}>
        <HeartSVG />
      </Container>
    );
  }
}

export default Heart;
