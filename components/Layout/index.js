import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Loading from './loading';
import LayoutAlertMessage from './LayoutAlertMessage';
//import PerfectScrollbar from 'react-perfect-scrollbar';
import { ILayoutType } from '../../models/utilitiesModel';
import ConfirmationAction from './ConfirmationAction';

// render if Auth Layout
const AuthLayoutContent = (props) => {
  document.body.classList.remove('bg-primary');
  return <React.Fragment>
    <div id="wrapper" className="wrapper_cont">
      <LayoutAlertMessage />
      <ConfirmationAction />
      <Topbar profilePath={props?.children?.props?.profilePath ? typeof (props?.children?.props?.profilePath) === 'string' ? props?.children?.props?.profilePath : undefined : undefined} />


      <div className="content-page h-100">
        <div className="content h-100">
          {props.children}
        </div>
      </div>
      <Loading />





      <Sidebar />
      <Footer />
    </div>



  </React.Fragment>
}

// render if Non-Auth Layout
const NonAuthLayoutContent = (props) => {
  return <React.Fragment>
    {props.children}
  </React.Fragment>
}

const ClientProfileLayoutContent = (props) => {
  return <React.Fragment>
    <LayoutAlertMessage />
    {props.children}
    <Loading />



  </React.Fragment>
}

const CareMapAuthLayoutContent = (props) => {
  return <React.Fragment>
    <LayoutAlertMessage />
    <ConfirmationAction />
    {props.children}
    <Loading />
  </React.Fragment>
}
class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // componentDidMount() {

  //   // If Auth the putted class to body
  //   if (this.props.layoutType !== 'Auth') {
  //     document.body.classList.add('bg-primary');
  //   }

  // }
  getRenderlayout = (value) => {
    if (value) {
      switch (value) {
        case ILayoutType.AUTH:
          return <AuthLayoutContent {...this.props} />
        case ILayoutType.CLIENTAUTH:
          return <ClientProfileLayoutContent {...this.props} />;
        case ILayoutType.CARE:
          return <CareMapAuthLayoutContent {...this.props} />;
        default:
          return <NonAuthLayoutContent {...this.props} />;
      }
    }
    else
      return <NonAuthLayoutContent {...this.props} />;
  }
  render() {
    console.log("props=>333333", this.props)
    return (
      <React.Fragment>
        {this.getRenderlayout(this?.props?.layoutType)}
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => {
  return {
    layoutType: state.Layout?.layoutType
  }
};


export default (connect(mapStatetoProps)(Layout));
