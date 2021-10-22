import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import ProfileMenu from './Menus/profileMenu';

//Metismenu for menu
import MetisMenu from 'metismenujs';

// Redux Call
import { isLarge } from '../../store/actions';
import { connect } from 'react-redux';
import Sidenav from './SideNav';

import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

import LogoIcon from '../../images/fplogoicon-clr.svg';

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = { showHideSidenav: "MnuShow" }
    }

    componentDidMount() {

        new MetisMenu("#menu", {});

        var matchingMenuItem = null;
        var ul = document.getElementById("menu");
        var items = ul.getElementsByTagName("a");
        for (var i = 0; i < items.length; ++i) {

            if (this.props.location.pathname === items[i].pathname) {
                matchingMenuItem = items[i];
                break;
            }
        }
        if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
        }
    }

    mnuClps() {

    }

    activateParentDropdown = (item) => {

        item.classList.add('mm-active');
        const parent = item.parentElement;

        if (parent) {
            parent.classList.add('mm-active'); // li 
            const parent2 = parent.parentElement;

            if (parent2) {
                parent2.classList.add("mm-show");
                const parent3 = parent2.parentElement;

                if (parent3) {
                    parent3.classList.add('mm-active'); // li
                    parent3.childNodes[0].classList.add('mm-active'); //a
                    const parent4 = parent3.parentElement;
                    if (parent4) {
                        parent4.classList.add('active');
                    }
                }
            }
            return false;
        }
    }

    toggleSidenav() {
        var css = (this.state.showHideSidenav === "MnuHidden") ? "MnuShow" : "MnuHidden";
        this.setState({ "showHideSidenav": css });
    }

    componentDidUpdate() {
        if (this.props.is_large_state === true) {
            new MetisMenu("#menu", {});
        }
    }

    render() {
        let apndMnuCls = this.state.showHideSidenav;
        return (
            <React.Fragment>


                {/* Tooltips */}
                {/* <UncontrolledTooltip color="primary" placement="right" target="ttFQ">
Faq
</UncontrolledTooltip> */}


                <div className={"left side-menu " + apndMnuCls}>
                    {/* <ProfileMenu /> */}

                    <div className="text-center logoIcon">
                        <img src={LogoIcon} alt="logo" />
                    </div>


                    {this.props.is_large_state ?
                        <Sidenav />
                        :
                        <PerfectScrollbar>
                            <Sidenav />
                        </PerfectScrollbar>
                    }

                    <div className="clearfix"></div>

                    <div className="nav-btm-menuitem">

                        {/* <Link id="ttFQ" to="/" className="waves-effect BtmmenuItem"> <img src={faq} alt="helps"/></Link> */}

                        <div onClick={this.toggleSidenav.bind(this)} className="MnuClsarro">
                            <hr style={{ margin: "0", paddingBottom: "10px" }} />
                            <i className={(this.state.showHideSidenav === "MnuHidden") ? "ti-angle-down" : "ti-angle-up"}></i></div>
                    </div>


                </div>

            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { is_large_state } = state.Layout;
    return { is_large_state };
}

export default withRouter(connect(mapStatetoProps, { isLarge })(Sidebar));