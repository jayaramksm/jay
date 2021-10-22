
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledTooltip } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { logOutRequest } from '../../../store/actions';
// users
//import user4 from '../../../images/icons/account.svg';
import profile from '../../../images/profile2.svg';
import { ILogoutTypes, IRoutePath } from '../../../models/utilitiesModel';


class ProfileMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        };
        this.toggle = this.toggle.bind(this);
    }
    t = this.props.t;
    toggle() {
        this.setState(prevState => ({
            menu: !prevState.menu
        }));
    }

    render() {
        return (
            <React.Fragment>


                {/* Tooltips */}
                <UncontrolledTooltip color="primary" placement="right" target="ttPRF">
                    {this.t('UserProfileManagement.Profile')}
                </UncontrolledTooltip>


                <Dropdown isOpen={this.state.menu} toggle={this.toggle} className=" nav-pro-img" style={{ marginTop: "0px", textAlign: "center" }} >
                    <DropdownToggle id="ttPRF" className="nav-link arrow-none nav-user waves-effect" tag="a">
                        <img src={profile} alt="user" />
                    </DropdownToggle>
                    <DropdownMenu className="profile-dropdown">
                        <DropdownItem tag="a" href="#/profile"><i className="ti-user m-r-5"></i> {this.t('UserProfileManagement.Profile')}</DropdownItem>
                        {/* <DropdownItem tag="a" href="#"><Badge color="success" className="mt-1 float-right">11</Badge><i className="ti-settings m-r-5"></i> Settings</DropdownItem> */}
                        <DropdownItem tag="a" href="#/changepassword"><i className="ti-key m-r-5"></i>{this.t('UserProfileManagement.ChangePassWord')}</DropdownItem>
                        {this.props?.profilePath && <DropdownItem tag="a" href={"#" + this.props.profilePath}><i className="ti-layers m-r-5"></i>{this.t('UserProfileManagement.changeWorkspace')}</DropdownItem>}
                        <div className="dropdown-divider"></div>
                        <DropdownItem tag="a" className="text-danger pointer" onClick={() => this.props.logOutRequest(this.props.history, IRoutePath.default, ILogoutTypes.LOGOUT)}>{this.t('UserProfileManagement.Logout')}</DropdownItem>                    </DropdownMenu>
                </Dropdown>
            </React.Fragment >
        );
    }
}


export default withRouter(withTranslation("translations")(connect(null, { logOutRequest })(ProfileMenu)));
