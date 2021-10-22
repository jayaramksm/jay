import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import SweetAlert from 'react-bootstrap-sweetalert';
import { useTranslation } from 'react-i18next';
import { IAlertMessagedata, IRoutePath } from '../../models/utilitiesModel';
import { alertActionSuspend, logOutRequest } from '../../store/actions';
import { getShowMessagecode } from '../../helpers/helpersIndex';

let setinterval;
const LayoutAlertMessage: React.FC = (props: any) => {
    const [showMessagecode] = useState(getShowMessagecode())
    const alertMessage = useSelector(state => {
        if ((state.Layout))
            return state.Layout.alertMessage ? state.Layout.alertMessage : undefined
        else
            return undefined
    }
    ) as IAlertMessagedata;
    const { t } = useTranslation("translations");
    const dispatch = useDispatch();
    const alertActionSuspendFc = (alertMessageData) => {
        dispatch(alertActionSuspend(alertMessageData))
        if (alertMessageData.statusCode === 500 || alertMessageData.statusCode === 404)
            dispatch(logOutRequest(props.history, IRoutePath.default));
        else if (alertMessageData.statusCode === 440 || alertMessageData.statusCode === 401)
            dispatch(logOutRequest(props.history, IRoutePath.timeOut));
        if (setinterval)
            clearTimeout(setinterval);
    }
    if (alertMessage) {
        setinterval = setTimeout(() => {
            alertActionSuspendFc(alertMessage);
        }, 3000);
    }


    return (
        <div>
            {alertMessage && <SweetAlert closeOnClickOutside onCancel={() => alertActionSuspendFc(alertMessage)} customClass={'msgAlert ' + (alertMessage.status === true ? 'alrtSuccess' : 'alrtFailed')} onConfirm={() => console.log('')} title={<small><i className="fa fa-check-circle mr-3" aria-hidden="true"></i>{alertMessage.messageCode && !alertMessage.status && showMessagecode && <strong>{alertMessage.messageCode}: </strong>} {t(alertMessage.transKey + alertMessage.message) === alertMessage.transKey + alertMessage.message ? alertMessage.message : t(alertMessage.transKey + alertMessage.message)}</small>}></SweetAlert>}
        </div>
    )
}
export default withRouter(connect(null)(LayoutAlertMessage));