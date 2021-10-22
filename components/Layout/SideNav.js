import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { UncontrolledTooltip } from 'reactstrap';
import { IRoutePath } from '../../models/utilitiesModel';

import dashboard from '../../images/icons/sideMenu/dashboard.svg';
import gbsettings from '../../images/icons/sideMenu/globalsettings.svg';
import userTransfer from '../../images/icons/sideMenu/user-transfer.svg';
import userManagement from '../../images/icons/sideMenu/user-management2.svg';
import tokenBuilder from '../../images/icons/sideMenu/token.svg';
import reports from '../../images/icons/sideMenu/reports.svg';
import devicemanage from '../../images/icons/sideMenu/devicemanage.svg';
import adminsettings from '../../images/icons/sideMenu/admin-settings.svg';
import notification from '../../images/icons/sideMenu/notification.svg';
import serving from '../../images/icons/sideMenu/serving.svg'

import { useTranslation } from 'react-i18next';
function SideNav(props) {

    const { t } = useTranslation("translations");
    const menuData = useSelector(state => {
        if (state.SessionState)
            return state.SessionState.menuData ? state.SessionState.menuData : undefined
        else
            return undefined
    });

    const locationcheck = () => {
        if (menuData) {
            let menuIndex = menuData.findIndex(s => '/' + s.link === props.location.pathname || s.subModules.findIndex(y => '/' + y.link === props.location.pathname) !== -1);
            if (menuIndex !== -1)
                return menuData[menuIndex].moduleId;
        }
        return 0;
    }
    const matchpath = locationcheck();
    if (!menuData)
        props.history.push(IRoutePath.default);
    const redirectPath = (path) => {
        console.log('path=>', path);

        props.history.push('/' + path)
    }
    console.log("SideNav=>", props, menuData);

    // render() {
    // let { selectedId } = 'ADMINS';

    return (
        <>


            <hr style={{ margin: "0px 0" }} />
            <div id="sidebar-menu">
                <ul className="metismenu" id="menu">

                    {menuData && menuData.map((x, index) => {
                        return (
                            <li key={index} id={x.link} className={matchpath === x.moduleId ? 'mm-active' : ''} >
                                <a onClick={() => redirectPath(x.link)} className="waves-effect">

                                    {x.icon === 'dashboard' && <img src={dashboard} alt="" />}
                                    {x.icon === 'userManagement' && <img src={userManagement} alt="" />}
                                    {x.icon === 'adsettings' && <img src={adminsettings} alt="" />}
                                    {x.icon === 'devicemanagement' && <img src={devicemanage} alt="" />}
                                    {x.icon === 'globalsettings' && <img src={gbsettings} alt="" />}
                                    {x.icon === 'notificationsettings' && <img src={notification} alt="" />}
                                    {x.icon === 'userTransfer' && <img src={userTransfer} alt="" />}
                                    {x.icon === 'tokenBuilder' && <img src={tokenBuilder} alt="" />}
                                    {x.icon === 'reports' && <img src={reports} alt="" />}
                                    {x.icon === 'clientsettings' && <img src={serving} alt="" />}


                                </a>
                                <UncontrolledTooltip key={index} modifiers={{ preventOverflow: { boundariesElement: 'window' } }} color="primary" placement="right" target={x.link}>
                                    {t('MenuItems.' + x.moduleName)}
                                </UncontrolledTooltip>
                            </li>



                        )
                    })}


                </ul>
            </div>

        </>
    );
}
//}


export default withRouter(SideNav);