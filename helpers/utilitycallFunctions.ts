import { IBranch, IBranchType } from './../models/branchRoomModel';
import { IAlertMessagedata } from '../models/utilitiesModel';
import { call } from 'redux-saga/effects';
import { getApiServiceUrlByComponentAndMethod, serviceConsumer, serviceConsumerWithMultiCalls } from './helpersIndex';
import { ILocation } from '../models/locationsModel';

// fetch locations call
const locationComponent = 'Location';
const branchComponent = 'Branch';
const userProfileComponent = 'UserProfile';
export const getRandomNumber = () => {
    return Math.random().toString(36).slice(7);
}
export const gettranId = (modulesCode?: string) => {
    return modulesCode ? `${modulesCode}${Math.random().toString(36).slice(7)}` : (Math.random().toString(36).slice(7)) + '';
}
export const getMessageCode = (tran: string, message: string) => {
    return tran + ':' + message;
}
export function* getLocationsDataFromUtilities(modulesCode?: string) {
    let tranId = gettranId(modulesCode);
    console.log(`${tranId}_getLocationsDataFromUtilities_Start => `);

    let locationsData: ILocation[] | undefined;
    let alertMessageData: IAlertMessagedata | undefined;
    try {
        let locationComponentAndMethod = getApiServiceUrlByComponentAndMethod(locationComponent, 'getAllLocationsByEntId');
        console.log(`${tranId}_getAllLocationsByEntId_Api_Request => `, locationComponentAndMethod);
        const response = yield call(serviceConsumer, tranId, locationComponentAndMethod, null, 'locations');
        console.log(`${tranId}_getAllLocationsByEntId_Api_Response => `, response);

        if (response) {
            locationsData = response;
        }
        else {
            alertMessageData = {
                message: response.messages ? response.messages : 'LM1',
                status: false,
                tranId: Date.now(),
                transKey: response.messages ? '' : 'Location.alertMessages.',
                messageCode: response.messages ? undefined : tranId + 'LM1'
            }
        }
    }
    catch (error) {
        console.error(`${tranId}_getLocationsData_error => `, error.messages ? error.messages : 'LM2');
        console.log(`${tranId}_getLocationsData_catch => `, error);
        alertMessageData = {
            message: error.messages ? error.messages : 'LM2', status: false, tranId: Date.now(),
            messageCode: tranId + 'LM2', transKey: error.messages ? 'controleErrors.' + error.messages : 'Location.alertMessages.', statusCode: error.statuscode ? error.statuscode : 0
        };
    }
    console.log(`${tranId}_getLocationsDataFromUtilities_End => `, locationsData, alertMessageData);
    return { locationsData, alertMessageData };
}



// fetch branches call
export function* getBranchesAndBranchTypesDataFromUtilities(tranId: string) {
    console.log(`${tranId}_getBranchesAndBranchTypesDataFromUtilities_Start => `, tranId);

    let branchesData: IBranch[] = [];
    let branchTypesData: IBranchType[] | undefined;
    let alertMessageData: IAlertMessagedata | undefined;
    try {
        let branchesComponentAndMethod = getApiServiceUrlByComponentAndMethod(branchComponent, 'getAllBranchesByLocId');
        let branchTypesComponentAndMethod = getApiServiceUrlByComponentAndMethod(branchComponent, 'getAllBrancheTypes');

        let multicalsApiData: any[] = [branchTypesComponentAndMethod, branchesComponentAndMethod];
        let multicalsBodyData: any[] = [null, null];

        console.log(`${tranId}_getBranchesAndBranchTypesDataFromUtilities_Api_Request => `, multicalsApiData);
        const response = yield call(serviceConsumerWithMultiCalls, tranId, multicalsApiData, multicalsBodyData);
        console.log(`${tranId}_getBranchesAndBranchTypesDataFromUtilities_Api_Response => `, response);


        if (response.length > 0) {
            if (response[0] && response[0].status === 200)
                branchTypesData = response[0].data['branchTypes'] ? response[0].data['branchTypes'] : [];
            else
                alertMessageData = {
                    message: response[0].messages ? response[0].messages : 'BR3',
                    status: false,
                    tranId: Date.now(),
                    transKey: response[0].messages ? '' : 'BranchAndRoom.alertMessages.',
                    messageCode: response[0].messages ? undefined : tranId + 'BR3'
                }

            if (response[1] && response[1].status === 200) {
                branchesData = response[1].data['branches'] ? response[1].data['branches'] : [];
                // yield put(getOnlyBranchesResponse(branchesData));
            }
            else
                alertMessageData = {
                    message: response[1].messages ? response[1].messages : 'BR2',
                    status: false,
                    tranId: Date.now(),
                    transKey: response[1].messages ? '' : 'BranchAndRoom.alertMessages.',
                    messageCode: response[1].messages ? undefined : tranId + 'BR2'
                }
        }
        else
            alertMessageData = {
                message: 'BR37',
                status: false,
                tranId: Date.now(),
                transKey: 'BranchAndRoom.alertMessages.',
                messageCode: 'BR37'
            }
    }
    catch (error) {
        console.error(`${tranId}_getBranchesAndBranchTypesDataFromUtilities_error => `, error.messages ? error.messages : 'BR38');
        console.log(`${tranId}_getBranchesAndBranchTypesDataFromUtilities_catch => `, error);
        alertMessageData = {
            message: error.messages ? error.messages : 'BR38', status: false, tranId: Date.now(),
            messageCode: tranId + 'BR38', transKey: error.messages ? 'controleErrors.' + error.messages : 'BranchAndRoom.alertMessages.', statusCode: error.statuscode ? error.statuscode : 0
        };
    }

    console.log(`${tranId}_getBranchesAndBranchTypesDataFromUtilities_End => `, branchesData, branchTypesData, alertMessageData);
    return { branchesData, branchTypesData, alertMessageData };
}

export function* setRoomMappingToUserRequestFromUtilities(tranId: string, roomId: number) {
    console.log(`${tranId}_setRoomMappingToUserRequestFromUtilities_Start => `, tranId);

    let alertMessageData: IAlertMessagedata | undefined;
    let roomMappedToUserStatus: boolean = false;
    try {
        let roomMapComponentAndMethod = getApiServiceUrlByComponentAndMethod(userProfileComponent, 'mappingRoomToUser');
        console.log(`${tranId}_setRoomMappingToUserRequestFromUtilities_Api_Request => `, roomMapComponentAndMethod, roomId);
        const response = yield call(serviceConsumer, tranId, roomMapComponentAndMethod, { roomId: roomId }, null);
        console.log(`${tranId}_setRoomMappingToUserRequestFromUtilities_Api_Response => `, response);

        if (response.status)
            roomMappedToUserStatus = true;
        else {
            alertMessageData = {
                message: 'CSM6', status: false, tranId: Date.now(),
                messageCode: tranId + 'CSM6', transKey: 'ClerkServing.alertMessages.'
            };
        }
    }
    catch (error) {
        console.error(`${tranId}_setRoomMappingToUserRequestFromUtilities_error => `, error.messages ? error.messages : 'CSM7');
        console.log(`${tranId}_setRoomMappingToUserRequestFromUtilities_catch => `, error);
        alertMessageData = {
            message: error.messages ? error.messages : 'CSM7', status: false, tranId: Date.now(),
            messageCode: tranId + 'CSM7', transKey: error.messages ? 'controleErrors.' + error.messages : 'ClerkServing.alertMessages.', statusCode: error.statuscode ? error.statuscode : 0
        };
    }
    console.log(`${tranId}_setRoomMappingToUserRequestFromUtilities_End => `, roomMappedToUserStatus, alertMessageData);
    return { roomMappedToUserStatus, alertMessageData };
}
