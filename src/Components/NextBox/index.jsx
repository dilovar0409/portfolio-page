import React from 'react'
import { NextBoxButton, NextBoxP, NextBoxWrapper } from './style'

class NextBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <NextBoxWrapper>
        <NextBoxP>
          Stylish Portfolio is the perfect theme for your next project!
        </NextBoxP>
        <p>
          This theme features a flexible, UX friendly sidebar menu and stock
          photos from our friends at Unsplash !
        </p>
        <NextBoxButton>What We Offer</NextBoxButton>
      </NextBoxWrapper>
    )
  }
}

export default NextBox
