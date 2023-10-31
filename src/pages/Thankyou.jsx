import { PureComponent, Fragment } from "react";
// import img3 from '../images/3.png'
import { Helmet } from 'react-helmet';

import { Link } from "react-router-dom";

class Thankyou extends PureComponent {

    render() {

        return (
            <Fragment>
                <Helmet>
                    <title>Thank You</title>
                    <meta name="description" content="Let us know a Brief about Dr Vikas Moun and Dr Vikas Mind Care Clinic." />
                </Helmet>
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5RVNGGVP"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

                <h1>Thank You...</h1>

            </Fragment>
        )
    }
}
export default Thankyou;