import React from 'react'
import FirstPageImg1 from '../../img/icons/facebook.svg'
import FirstPageImg2 from '../../img/icons/twitter.svg'
import FirstPageImg3 from '../../img/icons/telegram.svg'
import { FirstPageImg, FirstPageText, FirstPageWrapper } from './style'

class FirstPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <FirstPageWrapper>
          <FirstPageImg src={FirstPageImg1} alt="#" />
          <FirstPageImg src={FirstPageImg2} alt="#" />
          <FirstPageImg src={FirstPageImg3} alt="#" />
        </FirstPageWrapper>
        <FirstPageText>Copyright © Your Website 2021</FirstPageText>
      </>
    )
  }
}

export default FirstPage
