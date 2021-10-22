import React from 'react';
import { Row, Col } from 'reactstrap';
import FooterLeft from './FooterLeft'



function Footer() {
    // const logintime=

    return (
        <>
            {/* <div className="ftrshade"></div> */}
            <footer className="footer">
                <Row>
                    <Col ><FooterLeft /></Col>
                    <Col className="text-right">
                        © 2021 <span className=""> Copyright version | </span><span>License agreement.</span>
                    </Col>
                </Row>
            </footer>
        </>
    );
}


export default Footer;






