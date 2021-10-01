import React from 'react';
import SecondPageImg1 from '../../img/map.jpg';
import { SecondPageImg, SecondPageButton, SecondPageText, SecondPageWrapper } from './style';

class SecondPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <SecondPageWrapper>
        <SecondPageText>The buttons below are impossible to resist...</SecondPageText>
        <SecondPageButton>Click Me!</SecondPageButton>
        <SecondPageButton>Look at Me!</SecondPageButton>
        <SecondPageImg src={SecondPageImg1} alt="#" />
      </SecondPageWrapper>
    )
  }
}

export default SecondPage
