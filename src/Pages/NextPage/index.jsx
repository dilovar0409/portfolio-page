import React from 'react';
import NextPageImg1 from "../../img/portfolio-1.jpg";
import NextPageImg2 from "../../img/portfolio-2.jpg";
import NextPageImg3 from "../../img/portfolio-3.jpg";
import NextPageImg4 from "../../img/portfolio-4.jpg";
import { NextPageBox, NextPageImg, NextPageText, NextPageText1, NextPageTitle, NextPageTitle1, NextPageWrapper, PageDirection } from './style'

class NextPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        // data:[
        //     {
        //         img:NextPageImg1,
        //         text1:"STATIONARY",
        //         text2:"A yellow pencil with envelopes on a clean, blue backdrop"
        //     }
        // ]
    }
  }
  render() {
    return (
      <NextPageWrapper>
        <NextPageText>PORTFOLIO</NextPageText>
        <NextPageTitle>Recent Projects</NextPageTitle>
        <PageDirection>
            <NextPageBox>
                <NextPageImg src={NextPageImg1} alt="#" />
                <NextPageTitle1>STATIONARY</NextPageTitle1>
                <NextPageText1>A yellow pencil with envelopes on a clean, blue backdrop !</NextPageText1>
            </NextPageBox>
            <NextPageBox>
                <NextPageImg src={NextPageImg2} alt="#" />
                <NextPageTitle1>ICE CREAM</NextPageTitle1>
                <NextPageText1>A dark blue background with a colored pencil, a clip and a tiny ice cream cone !</NextPageText1>
            </NextPageBox>
            <NextPageBox>
                <NextPageImg src={NextPageImg3} alt="#" />
                <NextPageTitle1>STRAWBERRIES</NextPageTitle1>
                <NextPageText1>Strawberries are such a tasty snack, especially with a little sugar on top !</NextPageText1>
            </NextPageBox>
            <NextPageBox>
                <NextPageImg src={NextPageImg4} alt="#" />
                <NextPageTitle1>STATIONARY</NextPageTitle1>
                <NextPageText1>A yellow workspace with some scissors, pencils, and other objects.</NextPageText1>
            </NextPageBox>
        </PageDirection>
      </NextPageWrapper>
    )
  }
}

export default NextPage
