import axios from 'axios';
import { IApiMethod, IApiThrowResponse } from '../models/utilitiesModel';
import { checkAndReplacedTokenInfo } from './helpersIndex';

export function serviceConsumer(tranId: string, ApiData: IApiMethod, body: any, returnFilter: string | null, Posttype: number = 0, AuthorizationKey: string = '') {

    if (ApiData) {
        console.log(tranId + '_body => ', body);
        if (body != null) {
            if (!(body instanceof FormData))
                body = JSON.parse(JSON.stringify(body).replace(/"\s+|\s+"/g, '"'));
            console.log(tranId + '_body after trim =>', body);
        }
        let urlRaw = ApiData.url;
        const { url, token, authentiction, language } = checkAndReplacedTokenInfo(urlRaw, undefined);
        console.log(tranId + '_serviceConsumer=>', ApiData, body, authentiction, returnFilter, Posttype);


        if (authentiction) {
            console.log(tranId + '_serviceConsumer_URL=>', url);

            const axiosOptions = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token,
                    "tranId": tranId,
                    "Accept-Language": language
                }
            };
            let optionsdata;

            if (ApiData.type === 'GET') {
                optionsdata = {
                    params: body,
                    headers: AuthorizationKey === '' ? axiosOptions.headers : {
                        "Content-Type": "application/json",
                        "token": token,
                        "tranId": tranId,
                        "Accept-Language": language
                    }
                };

                return axios.get(url, optionsdata).then(response => {
                    if (response.status === 400 || response.status === 500)
                        throw response.data;
                    return returnFilter ? response.data[returnFilter] : response.data;
                }).catch(err => {
                    if (err.response) {
                        // Request made and server responded
                        console.log("AxiosCatchSCresponse=>", err.response);
                        let response = err.response.data;
                        let apiThrowResponse = { status: false, statuscode: response.status, messages: response.messages ? response.messages : (response.message ? response.message : 'ServerError'), error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    } else if (err.request) {
                        // The request was made but no response was received
                        console.log("AxiosCatchSCrequest=>", err);
                        let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log("AxiosCatchSCelse", err);
                        let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    }
                });
            }
            else if (ApiData.type === "PUT") {
                Posttype = Posttype ? Posttype : 0;
                const axiosOptionsPUT = Posttype === 1 ? {
                    headers: {
                        "Authorization": token,
                        "tranId": tranId,
                        "Accept-Language": language
                    }
                } : axiosOptions;

                return axios.put(url, body, axiosOptionsPUT).then(response => {
                    if (response.status === 400 || response.status === 500)
                        throw response.data;
                    return returnFilter ? response.data[returnFilter] : response.data;;
                }).catch(err => {
                    if (err.response) {
                        // Request made and server responded
                        console.log("AxiosCatchSCresponse=>", err.response);
                        let response = err.response.data;
                        let apiThrowResponse = { status: false, statuscode: response.status, messages: response.messages ? response.messages : (response.message ? response.message : 'ServerError'), error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    } else if (err.request) {
                        // The request was made but no response was received
                        console.log("AxiosCatchSCrequest=>", err.request);
                        let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log("AxiosCatchSCelse", err.message);
                        let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    }
                });

            }
            else if (ApiData.type === "POST") {
                Posttype = Posttype ? Posttype : 0;
                const axiosOptionsPOST = Posttype === 1 ? {
                    headers: {
                        "Authorization": token,
                        "tranId": tranId,
                        "Accept-Language": language
                    }
                } : axiosOptions;

                return axios.post(url, body, axiosOptionsPOST).then(response => {
                    if (response.status === 400 || response.status === 500)
                        throw response.data;
                    return returnFilter ? response.data[returnFilter] : response.data;
                }).catch(err => {
                    if (err.response) {
                        // Request made and server responded
                        console.log("AxiosCatchSCresponse=>", err.response);
                        let response = err.response.data;
                        let apiThrowResponse = { status: false, statuscode: response.status, messages: response.messages ? response.messages : (response.message ? response.message : 'ServerError'), error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    } else if (err.request) {
                        // The request was made but no response was received
                        console.log("AxiosCatchSCrequest=>", err.request);
                        let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log("AxiosCatchSCelse", err.message);
                        let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    }
                });

            }
            else if (ApiData.type === "DELETE") {
                optionsdata = {
                    params: body,
                    headers: axiosOptions.headers
                };
                return axios.delete(url, optionsdata).then(response => {
                    if (response.status === 400 || response.status === 500)
                        throw response.data;
                    return returnFilter ? response.data[returnFilter] : response.data;
                }).catch(err => {
                    if (err.response) {
                        // Request made and server responded
                        console.log("AxiosCatchSCresponse=>", err.response);
                        let response = err.response.data;
                        let apiThrowResponse = { status: false, statuscode: response.status, messages: response.messages ? response.messages : (response.message ? response.message : 'ServerError'), error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    } else if (err.request) {
                        // The request was made but no response was received
                        console.log("AxiosCatchSCrequest=>", err.request);
                        let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log("AxiosCatchSCelse", err.message);
                        let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    }
                });
            }
            else {
                let apiThrowResponse = { status: false, statuscode: 401, messages: 'rquest Urls type not found' } as IApiThrowResponse;
                throw apiThrowResponse;
            }
        }
        else {
            let apiThrowResponse = { status: false, statuscode: 401, messages: 'rquest Urls type not found' } as IApiThrowResponse;
            throw apiThrowResponse;
        }

    }
    else {
        let apiThrowResponse = { status: false, statuscode: -1, messages: 'rquest Urls not found' } as IApiThrowResponse;
        throw apiThrowResponse;

    }

}
export function serviceConsumerReadFiledata(tranId, url) {
    let optionsdata = {
        params: { currentHash: (new Date().getTime()) + '' }
    };
    console.log(tranId + "_serviceConsumerReadFiledata_url=>", url);

    return axios.get(url, optionsdata).then(response => {
        if (response.status === 400 || response.status === 500)
            throw response.data;
        return response.data;
    }).catch(err => {
        if (err.response) {
            // Request made and server responded
            console.log("AxiosCatchSCRFresponse=>", err.response);
            let response = err.response.data;
            let apiThrowResponse = { status: false, statuscode: response.status, messages: response.messages ? response.messages : (response.message ? response.message : 'ServerError'), error: err } as IApiThrowResponse;
            throw apiThrowResponse;
        } else if (err.request) {
            // The request was made but no response was received
            console.log("AxiosCatchSCRFrequest=>", err.request);
            let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
            throw apiThrowResponse;
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("AxiosCatchSCRFelse", err.message);
            let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
            throw apiThrowResponse;
        }
    });
}
export function serviceConsumerWithMultiCalls(tranId: string, ApiData: IApiMethod[], body: any[], Posttype?: number[]) {
    Posttype = Posttype ? Posttype : [];
    if (ApiData.length > 0) {


        console.log(tranId + '_body => ', body);
        if (body != null) {
            if (!(body instanceof FormData))
                body = JSON.parse(JSON.stringify(body).replace(/"\s+|\s+"/g, '"'));
            console.log(tranId + '_body after trim =>', body);
        }

        const { ApiDataRaw, token, authentiction, language } = checkAndReplacedTokenInfo(undefined, ApiData);
        ApiData = ApiDataRaw;
        console.log(tranId + '_serviceConsumerWithMultiCalls=>', ApiData, authentiction, body, Posttype);

        if (authentiction) {
            console.log(tranId + '_serviceConsumerWithMultiCalls_ApiData=>', ApiData);

            const axiosOptions = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token,
                    "tranId": tranId,
                    "Accept-Language": language
                }
            };
            let optionsdata;

            let axiosreq;
            switch (ApiData[0].type) {
                case 'GET':
                    optionsdata = {
                        params: body[0],
                        headers: axiosOptions.headers
                    };
                    axiosreq = axios.get(ApiData[0].url, optionsdata);
                    break;
                case 'POST':
                    const axiosOptionsPOST = Posttype.length > 0 ? Posttype[0] === 1 ? {
                        headers: {
                            "Authorization": token,
                            "tranId": tranId,
                            "Accept-Language": language
                        }
                    } : axiosOptions : axiosOptions;
                    axiosreq = axios.post(ApiData[0].url, body[0], axiosOptionsPOST);
                    break;
                case 'PUT':
                    const axiosOptionsPUT = Posttype.length > 0 ? Posttype[0] === 1 ? {
                        headers: {
                            "Authorization": token,
                            "tranId": tranId,
                            "Accept-Language": language
                        }
                    } : axiosOptions : axiosOptions;
                    axiosreq = axios.put(ApiData[0].url, body[0], axiosOptionsPUT);
                    break;
                case 'DELETE':
                    optionsdata = {
                        params: body,
                        headers: axiosOptions.headers
                    };
                    axiosreq = axios.delete(ApiData[0].url, optionsdata)
                    break;
                default:
                    break;
            }
            let promises = [axiosreq];
            for (let i = 1; i < ApiData.length; i++) {
                switch (ApiData[i].type) {
                    case 'GET':
                        optionsdata = {
                            params: body[i],
                            headers: axiosOptions.headers
                        };
                        promises.push(axios.get(ApiData[i].url, optionsdata))
                        break;
                    case 'POST':
                        const axiosOptionsPOST1 = Posttype.length > i ? Posttype[i] === 1 ? {
                            headers: {
                                "Authorization": token,
                                "tranId": tranId,
                                "Accept-Language": language
                            }
                        } : axiosOptions : axiosOptions;
                        promises.push(axios.post(ApiData[i].url, body[i], axiosOptionsPOST1))
                        break;
                    case 'PUT':
                        const axiosOptionsPUT1 = Posttype.length > i ? Posttype[i] === 1 ? {
                            headers: {
                                "Authorization": token,
                                "tranId": tranId,
                                "Accept-Language": language
                            }
                        } : axiosOptions : axiosOptions;
                        promises.push(axios.put(ApiData[i].url, body[i], axiosOptionsPUT1))
                        break;
                    case 'DELETE':
                        optionsdata = {
                            params: body[i],
                            headers: axiosOptions.headers
                        };
                        promises.push(axios.delete(ApiData[i].url, optionsdata))
                        break;
                    default:
                        break;
                }

            }

            return axios.all(promises).then(response => {
                console.log("AxiosAllThen=>", response);

                // if (response.status === 400 || response.status === 500)
                //     throw response.data;
                return response;
            }).catch(err => {
                if (err.response) {
                    // Request made and server responded
                    console.log("AxiosAllThenCatchresponse=>", err.response);
                    let response = err.response.data;
                    let apiThrowResponse = { status: false, statuscode: response.status, messages: response.messages ? response.messages : (response.message ? response.message : 'ServerError'), error: err } as IApiThrowResponse;
                    throw apiThrowResponse;
                } else if (err.request) {
                    // The request was made but no response was received
                    console.log("AxiosAllThenCatchrequest=>", err.request);
                    let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                    throw apiThrowResponse;
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("AxiosAllThenCatchelse", err.message);
                    let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                    throw apiThrowResponse;
                }

            });

        }
        else {
            let apiThrowResponse = { status: false, statuscode: 401, messages: 'rquest Urls type not found' } as IApiThrowResponse;
            throw apiThrowResponse;
        }

    }
    else {
        let apiThrowResponse = { status: false, statuscode: -1, messages: 'rquest Urls not found' } as IApiThrowResponse;
        throw apiThrowResponse;

    }

}
export function serviceConsumerWithHeaders(ApiData: IApiMethod, body: any) {


    if (ApiData) {

        console.log('body => ', body);
        if (body != null) {
            if (!(body instanceof FormData))
                body = JSON.parse(JSON.stringify(body).replace(/"\s+|\s+"/g, '"'));
            console.log('body after trim =>', body);
        }
        const axiosOptions = {
            headers: {
                "Content-Type": "application/json",
                //"Authorization": this.tokenInfo.tokenKey,
            }
        };
        let optionsdata;

        if (ApiData.type === 'GET') {
            optionsdata = {
                params: body,
                headers: axiosOptions.headers
            };
            return axios.get(ApiData.url, optionsdata).then(response => {
                if (response.status === 400 || response.status === 500)
                    throw response.data;
                return response;
            }).catch(err => {
                if (err.response) {
                    // Request made and server responded
                    console.log("AxiosCatchSCHresponse=>", err.response);
                    let response = err.response.data;
                    let apiThrowResponse = { status: false, statuscode: response.status, messages: response.messages ? response.messages : (response.message ? response.message : 'ServerError'), error: err } as IApiThrowResponse;
                    throw apiThrowResponse;
                } else if (err.request) {
                    // The request was made but no response was received
                    console.log("AxiosCatchSCHrequest=>", err.request);
                    let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                    throw apiThrowResponse;
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("AxiosCatchSCHelse", err.message);
                    let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                    throw apiThrowResponse;
                }
            });
        }
        else if (ApiData.type === "PUT") {
            return axios.put(ApiData.url, body, axiosOptions).then(response => {
                if (response.status === 400 || response.status === 500)
                    throw response.data;
                return response;
            }).catch(err => {
                if (err.response) {
                    // Request made and server responded
                    console.log("AxiosCatchSCHresponse=>", err.response);
                    let response = err.response.data;
                    let apiThrowResponse = { status: false, statuscode: response.status, messages: response.messages ? response.messages : (response.message ? response.message : 'ServerError'), error: err } as IApiThrowResponse;
                    throw apiThrowResponse;
                } else if (err.request) {
                    // The request was made but no response was received
                    console.log("AxiosCatchSCHrequest=>", err.request);
                    let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                    throw apiThrowResponse;
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("AxiosCatchSCHelse", err.message);
                    let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                    throw apiThrowResponse;
                }
            });
        }
        else if (ApiData.type === "POST") {
            return axios.post(ApiData.url, body, axiosOptions).then(response => {
                if (response.status === 400 || response.status === 500)
                    throw response.data;
                return response;
            }).catch(err => {
                if (err.response) {
                    // Request made and server responded
                    console.log("AxiosCatchSCHresponse=>", err.response);
                    let response = err.response.data;
                    let apiThrowResponse = { status: false, statuscode: response.status, messages: response.messages ? response.messages : (response.message ? response.message : 'ServerError'), error: err } as IApiThrowResponse;
                    throw apiThrowResponse;
                } else if (err.request) {
                    // The request was made but no response was received
                    console.log("AxiosCatchSCHrequest=>", err.request);
                    let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                    throw apiThrowResponse;
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("AxiosCatchSCHelse", err.message);
                    let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                    throw apiThrowResponse;
                }
            });
        }
        else if (ApiData.type === "DELETE") {
            optionsdata = {
                params: body,
                headers: axiosOptions.headers
            };
            return axios.delete(ApiData.url, optionsdata).then(response => {
                if (response.status === 400 || response.status === 500)
                    throw response.data;
                return response;
            }).catch(err => {
                if (err.response) {
                    // Request made and server responded
                    console.log("AxiosCatchSCHresponse=>", err.response);
                    let response = err.response.data;
                    let apiThrowResponse = { status: false, statuscode: response.status, messages: response.messages ? response.messages : (response.message ? response.message : 'ServerError'), error: err } as IApiThrowResponse;
                    throw apiThrowResponse;
                } else if (err.request) {
                    // The request was made but no response was received
                    console.log("AxiosCatchSCHrequest=>", err.request);
                    let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                    throw apiThrowResponse;
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("AxiosCatchSCHelse", err.message);
                    let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                    throw apiThrowResponse;
                }
            });
        }
        else {
            let apiThrowResponse = { status: false, statuscode: -1, messages: 'rquest Urls type not found' } as IApiThrowResponse;
            throw apiThrowResponse;
        }

    }
    else {
        let apiThrowResponse = { status: false, statuscode: -1, messages: 'rquest Urls not found' } as IApiThrowResponse;
        throw apiThrowResponse;

    }

}


export function serviceConsumerWithOutHeaders(tranId: string, ApiData: IApiMethod, body: any, returnFilter: string | null) {
    if (ApiData) {

        console.log(tranId + '_body => ', body);
        if (body != null) {
            if (!(body instanceof FormData))
                body = JSON.parse(JSON.stringify(body).replace(/"\s+|\s+"/g, '"'));
            console.log(tranId + '_body after trim =>', body);
        }
        let urlRaw = ApiData.url;
        const { url, token, authentiction, language } = checkAndReplacedTokenInfo(urlRaw, undefined);
        console.log(tranId + '_serviceConsumer=>', ApiData, body, authentiction, returnFilter);


        if (authentiction) {
            console.log(tranId + '_serviceConsumer_URL=>', url);

            const axiosOptions = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token,
                    "tranId": tranId,
                    "Accept-Language": language
                }
            };
            let optionsdata;

            if (ApiData.type === 'GET') {


                return axios.get(url).then(response => {
                    if (response.status === 400 || response.status === 500)
                        throw response.data;
                    return returnFilter ? response.data[returnFilter] : response.data;
                }).catch(err => {
                    if (err.response) {
                        // Request made and server responded
                        console.log("AxiosCatchSCresponse=>", err.response);
                        let response = err.response.data;
                        let apiThrowResponse = { status: false, statuscode: response.status, messages: response.messages ? response.messages : (response.message ? response.message : 'ServerError'), error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    } else if (err.request) {
                        // The request was made but no response was received
                        console.log("AxiosCatchSCrequest=>", err);
                        let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log("AxiosCatchSCelse", err);
                        let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    }
                });
            }
            else if (ApiData.type === "PUT") {
                return axios.put(url, body).then(response => {
                    if (response.status === 400 || response.status === 500)
                        throw response.data;
                    return returnFilter ? response.data[returnFilter] : response.data;;
                }).catch(err => {
                    if (err.response) {
                        // Request made and server responded
                        console.log("AxiosCatchSCresponse=>", err.response);
                        let response = err.response.data;
                        let apiThrowResponse = { status: false, statuscode: response.status, messages: response.messages ? response.messages : (response.message ? response.message : 'ServerError'), error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    } else if (err.request) {
                        // The request was made but no response was received
                        console.log("AxiosCatchSCrequest=>", err.request);
                        let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log("AxiosCatchSCelse", err.message);
                        let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    }
                });

            }
            else if (ApiData.type === "POST") {
                return axios.post(url, body).then(response => {
                    if (response.status === 400 || response.status === 500)
                        throw response.data;
                    return returnFilter ? response.data[returnFilter] : response.data;
                }).catch(err => {
                    if (err.response) {
                        // Request made and server responded
                        console.log("AxiosCatchSCresponse=>", err.response);
                        let response = err.response.data;
                        let apiThrowResponse = { status: false, statuscode: response.status, messages: response.messages ? response.messages : (response.message ? response.message : 'ServerError'), error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    } else if (err.request) {
                        // The request was made but no response was received
                        console.log("AxiosCatchSCrequest=>", err.request);
                        let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log("AxiosCatchSCelse", err.message);
                        let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    }
                });

            }
            else if (ApiData.type === "DELETE") {
                return axios.delete(url).then(response => {
                    if (response.status === 400 || response.status === 500)
                        throw response.data;
                    return returnFilter ? response.data[returnFilter] : response.data;
                }).catch(err => {
                    if (err.response) {
                        // Request made and server responded
                        console.log("AxiosCatchSCresponse=>", err.response);
                        let response = err.response.data;
                        let apiThrowResponse = { status: false, statuscode: response.status, messages: response.messages ? response.messages : (response.message ? response.message : 'ServerError'), error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    } else if (err.request) {
                        // The request was made but no response was received
                        console.log("AxiosCatchSCrequest=>", err.request);
                        let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log("AxiosCatchSCelse", err.message);
                        let apiThrowResponse = { status: false, statuscode: 500, messages: 'ServerError', error: err } as IApiThrowResponse;
                        throw apiThrowResponse;
                    }
                });
            }
            else {
                let apiThrowResponse = { status: false, statuscode: 401, messages: 'rquest Urls type not found' } as IApiThrowResponse;
                throw apiThrowResponse;
            }
        }
        else {
            let apiThrowResponse = { status: false, statuscode: 401, messages: 'rquest Urls type not found' } as IApiThrowResponse;
            throw apiThrowResponse;
        }

    }
    else {
        let apiThrowResponse = { status: false, statuscode: -1, messages: 'rquest Urls not found' } as IApiThrowResponse;
        throw apiThrowResponse;

    }
}
