import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NotificationMenu from './Menus/notificationMenu';
import { Row, Col, Modal, ModalBody } from 'reactstrap';
import ProfileMenu from './Menus/profileMenu';

import dummyLogo from '../../images/vmcare.svg';
import { useTranslation } from 'react-i18next';

function Topbar(props) {

    const { t } = useTranslation("translations");

    const locationcheck = () => {
        return props.location.pathname;
    }
    const matchpath = locationcheck();
    const menuData = useSelector(state => {
        if (state.SessionState)
            return state.SessionState.menuData ? state.SessionState.menuData : undefined
        else
            return undefined
    });
    const subMenuData = menuData ?
        (menuData.find(x => x.subModules.findIndex(y => '/' + y.link === matchpath) !== -1))
        : undefined
    console.log('subMenuData=>', props.profilePath, subMenuData, menuData);

    const redirectPath = (path) => {
        if (matchpath !== '/' + path) {
            console.log('path=>', path);

            props.history.push('/' + path)
        }
    }

    const [state, setstate] = useState({ modal_large: false });
    const removeBodyCss = () => {
        document.body.classList.add('no_padding');
    }
    const tog_large = () => {
        setstate(prevState => ({
            modal_large: !prevState.modal_large
        }));
        removeBodyCss();
    }

    // const toggleFullscreen = () => {
    //     if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) { // current working methods
    //         if (document.documentElement.requestFullscreen) {
    //             document.documentElement.requestFullscreen();
    //         } else if (document.documentElement.mozRequestFullScreen) {
    //             document.documentElement.mozRequestFullScreen();
    //         } else if (document.documentElement.webkitRequestFullscreen) {
    //             document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    //         }
    //         else if (document.documentElement.msRequestFullscreen) {
    //             document.documentElement.msRequestFullscreen(); // IE
    //         }
    //     } else {
    //         if (document.cancelFullScreen) {
    //             document.cancelFullScreen();
    //         } else if (document.mozCancelFullScreen) {
    //             document.mozCancelFullScreen();
    //         } else if (document.webkitCancelFullScreen) {
    //             document.webkitCancelFullScreen();
    //         } else if (document.msExitFullscreen) {
    //             document.msExitFullscreen();
    //         }
    //     }
    // }

    return (
        <>
            <div id="page-topbar" className="topbar">

                <nav className="navbar-custom">

                    <Row>
                        <Col sm="9" xs="7">
                            <ul className="list-inline float-left mb-0 top-lft" style={{ width: "100%" }}>
                                <li className="float-left">
                                    <button className="button-menu-mobile open-left waves-effect">
                                        <i className="ti-menu"></i>
                                    </button>
                                </li>
                                {subMenuData && <li className="d-sm-block"> <h1 className="mb-0">{t('MenuItems.' + subMenuData.moduleName)}</h1></li>}
                                {!subMenuData && matchpath === '/profile' && <li className="d-sm-block  mt-2"> <h1 className="mb-0">{t('MenuItems.profile')}</h1></li>}
                                {!subMenuData && matchpath === '/changepassword' && <li className="d-sm-block  mt-2"> <h1 className="mb-0">{t('MenuItems.changepassword')}</h1></li>}
                                {subMenuData && <li className="breadcrumbs">{t('MenuItems.' + subMenuData.moduleName)} <i className="ti-angle-right"></i> {t('MenuItems.' + subMenuData.subModules.find(x => '/' + x.link === matchpath).subModuleName)} </li>}
                                {/* <i className="ti-angle-right"></i> <a>SSMC</a> */}

                                <div className="topSubmenu">
                                    {subMenuData && subMenuData.subModules.slice(0, subMenuData?.subModules ? 5 : 6).map((x, index) => {
                                        return (<span onClick={() => redirectPath(x.link)} key={index} className={matchpath === '/' + x.link ? "btn btn-sm waves-effect active" : 'btn btn-sm waves-effect'}>{t('MenuItems.' + x.subModuleName)}</span>)
                                    })}
                                    {subMenuData?.subModules?.length > 5 && < div className="btn  btn-sm waves-effect" onClick={tog_large}>Other&nbsp; <i className="fa fa-angle-down"></i></div>}
                                </div>

                                {subMenuData && <Modal className="modal-lg OtrServices" isOpen={state.modal_large} toggle={tog_large} >
                                    <div className="Clos">
                                        <button style={{ marginTop: "10px" }} onClick={() => setstate({ modal_large: false })} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <ModalBody className="pt-0">
                                        <h6>Other Dashboards</h6>
                                        <div className="topSubmenu">
                                            {subMenuData.subModules.slice(subMenuData.subModules ? 5 : 6, subMenuData.subModules.length).map((x, index) => {
                                                return (<span onClick={() => redirectPath(x.link)} key={index} className={matchpath === '/' + x.link ? "btn btn-sm waves-effect active" : 'btn btn-sm waves-effect'}>{t('MenuItems.' + x.subModuleName)}</span>)
                                            })}
                                        </div>
                                    </ModalBody>
                                </Modal>}
                            </ul>
                        </Col>

                        <Col sm="3" xs="">
                            <div className="navbar-right list-inline float-right mb-0" >
                                {/* <li className="dropdown notification-list list-inline-item d-none d-md-inline-block mr-1">
                               
                                 <form role="search" className="topSearch">
                                    <div className="form-group mb-0">
                                        <input type="text" className="form-control" placeholder="Search.." />
                                    </div>
                                </form>
                            </li> */}
                                {/* <LanguageMenu /> */}

                                {/* <li className="dropdown notification-list list-inline-item d-none d-md-inline-block mr-1">
                                    <span onClick={() => toggleFullscreen()} className="nav-link waves-effect" to="#" id="btn-fullscreen">
                                        <i className="ti-fullscreen noti-icon"></i>
                                    </span>
                                </li> */}

                                <NotificationMenu />
                                <div className="dropdown notification-list list-inline-item">
                                    <img src={dummyLogo} alt="logo" className="headerLogo" /></div>

                                <div className="dropdown d-inline-block">
                                    <ProfileMenu profilePath={props.profilePath} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </nav>
            </div>
        </>
    );

}




export default withRouter((React.memo(Topbar)));