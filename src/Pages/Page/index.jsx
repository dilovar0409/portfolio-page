import React from "react";
import { HeaderButton } from "../../Components/Header/style";
import { PageTitle, PageWrapper } from "./style";

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <PageWrapper>
            <PageTitle>Welcome to <i>your</i> <br /> next website!</PageTitle>
            <HeaderButton>Download Now!</HeaderButton>
        </PageWrapper> );
    }
}
 
export default Page;