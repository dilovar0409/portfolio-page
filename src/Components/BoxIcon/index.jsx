import React from 'react'
import BoxIconImg from '../../img/icons/smartphone.svg'
import BoxIconImg1 from '../../img/icons/pen.svg'
import BoxIconImg2 from '../../img/icons/like.svg'
import BoxIconImg3 from '../../img/icons/moustache.svg'
import { IconText, BoxIconTitle, BoxIconWrapper, BoxIcons } from './style'

class BoxIcon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <BoxIconWrapper>
        <p className="box-icon-text">SERVICES</p>
        <BoxIconTitle>What We Offer</BoxIconTitle>
        <BoxIcons>
          <div>
            <img src={BoxIconImg} alt="#" className="box-icon" />
            <IconText>Responsive</IconText>
            <p className="icon-text">Looks great on any screen size!</p>
          </div>
          <div>
            <img src={BoxIconImg1} alt="#" className="box-icon" />
            <IconText>Redesigned</IconText>
            <p className="icon-text">
              Freshly redesigned for Bootstrap <br /> 5.
            </p>
          </div>
          <div>
            <img src={BoxIconImg2} alt="#" className="box-icon" />
            <IconText>Favorited</IconText>
            <p className="icon-text">
              Millions of users 🤍 Start <br /> Bootstrap!
            </p>
          </div>
          <div>
            <img src={BoxIconImg3} alt="#" className="box-icon" />
            <IconText>Question</IconText>
            <p className="icon-text">I mustache you a question...</p>
          </div>
        </BoxIcons>
      </BoxIconWrapper>
    )
  }
}

export default BoxIcon
