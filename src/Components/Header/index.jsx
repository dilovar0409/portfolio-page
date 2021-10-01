import React from "react";
import { HeaderWrapper,HeaderText, HeaderText1, HeaderButton } from "./style";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    // componentDidMount(){
    //     window.addEventListener("wheel", (data)=>{
    //         console.log(data);
    //     })
    // }

    render() { 
        return ( 
            <HeaderWrapper>
                <HeaderText>Stylish Portfolio</HeaderText>
                <HeaderText1> <i> A Free Bootstrap Theme by Start Bootstrap</i></HeaderText1>
                <HeaderButton>Find Out More</HeaderButton>
            </HeaderWrapper>
         );
    }
}
 
export default Header;