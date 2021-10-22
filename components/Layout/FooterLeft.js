import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { interval } from 'rxjs';
import { useTranslation } from 'react-i18next';

let subscribe;

function FooterLeft() {
    const { t } = useTranslation("translations");
    const loginTime = useSelector(state =>
        state.SessionState.loginTime);
    const [state, setstate] = useState({ date: moment().format('DD MMM YYYY'), loginTime: loginTime ? moment.utc(moment(moment().format('DD/MM/YYYY HH:mm:ss'), "DD/MM/YYYY HH:mm:ss").diff(moment(loginTime, "DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss") : '' })
    //console.log("logintime=>", loginTime, state);

    useEffect(() => {
        subscribe = interval(1000).subscribe(x => {
            // console.log("logintime=>",state);
            if (loginTime)
                setstate({ date: moment().format('DD MMM YYYY'), loginTime: moment.utc(moment(moment().format('DD/MM/YYYY HH:mm:ss'), "DD/MM/YYYY HH:mm:ss").diff(moment(loginTime, "DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss") });
        })
        return () => {
            if (subscribe)
                subscribe.unsubscribe();
        }
    })

    return (
        <>
            {state.date} &nbsp; / &nbsp; {t('Utilities.LoginTime')} : {state.loginTime}.
        </>
    );
}


export default FooterLeft;






