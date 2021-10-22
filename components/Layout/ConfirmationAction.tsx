import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalBody } from 'reactstrap';
import { setConfirmationClose } from '../../store/layout/actions';
import { IConfirmModel } from '../../models/utilitiesModel';
import { useTranslation } from 'react-i18next';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const actionClasses = [
    {name:'Yes',className:' btn-white'},
    {name:'No',className:' btn-danger'},
    {name:'copy',className:' btn-info'},
    {name:'cancel',className:' btn-danger'},
];

const ConfirmationAction: React.FC = () => {
    const { t } = useTranslation("translations");
    const dispatch = useDispatch();
    const confirmationData: IConfirmModel = useSelector(state => {
        if ((state.Layout))
            return state.Layout.confirmationData ? state.Layout.confirmationData : undefined;
        else return undefined;
    });

    console.log('_setActionRequest => ', confirmationData);

    return (
        <>
            {<Modal isOpen={confirmationData ? true : false}>
                {confirmationData && <><ModalBody>
                    <h5 className="text-center text-wrap">{confirmationData.transKey + confirmationData.title === t(confirmationData.transKey + confirmationData.title) ? confirmationData.title : t(confirmationData.transKey + confirmationData.title)}</h5>
                    {confirmationData.subtitle && <h5 className="text-center text-wrap">{confirmationData.transKey + confirmationData.subtitle === t(confirmationData.transKey + confirmationData.subtitle) ? confirmationData.subtitle : t(confirmationData.transKey + confirmationData.subtitle)}</h5>}
                </ModalBody>

                    <div className="modelFooter">
                        {confirmationData.options && confirmationData.options.map((option: any, index) => {
                            return (
                                <React.Fragment key={index}>
                                    {option.title !== 'copy' && <Button type="button" className={"text-capitalize btn" + (actionClasses.find(x=>x.name===option.title)?.className || '')} onClick={() => dispatch(setConfirmationClose(option.function, option.loading))}>{t('ActionNames.' + option.title) === 'ActionNames.' + option.title ? option.title : t('ActionNames.' + option.title)}</Button>}
                                    {option.title === 'copy' && <CopyToClipboard text={confirmationData?.subtitle}><Button type="button" className={"text-capitalize btn" + (actionClasses.find(x=>x.name===option.title)?.className || '')} onClick={() => dispatch(setConfirmationClose(option.function, option.loading))}>{t('ActionNames.' + option.title) === 'ActionNames.' + option.title ? option.title : t('ActionNames.' + option.title)}</Button></CopyToClipboard>}

                                    {console.log(option,actionClasses.find(x=>x.name===option.title)?.className)}
                                </React.Fragment>
                            );
                        })}
                    </div>

                </>}


            </Modal>}
        </>
    );
}

export default ConfirmationAction;