import store from '../store/index';
import { IRoleDesc, IBranchTypeEnum, IRoutePath } from '../models/utilitiesModel';

const branchTypeServingCategoryPriviligesData = [
    { branchTypeCode: 'PH', registration: true, vitals: false, floating: false, appointmentTypeMapping: false },
    { branchTypeCode: 'LAB', registration: true, vitals: false, floating: false, appointmentTypeMapping: false },
    { branchTypeCode: 'RG', registration: true, vitals: false, floating: false, appointmentTypeMapping: false },
    { branchTypeCode: 'CL', registration: true, vitals: true, floating: true, appointmentTypeMapping: true },
    { branchTypeCode: 'NCL', registration: true, vitals: false, floating: false, appointmentTypeMapping: false }
];

const checkAndReplacedTokenInfo = (url, ApiDataRaw) => {

    let storeData = store.getState()['SessionState'];
    let token;
    let language = 'en';
    let authentiction = false;
    if (storeData?.token) {
        authentiction = true;
        token = storeData.token;
        language = storeData?.language ? storeData?.language : 'en';
        let userDto = storeData?.userDto;
        if (userDto) {
            let epid = userDto?.enterprise?.enterpriseId ? userDto.enterprise.enterpriseId : 0;
            let roleId = userDto?.roles?.roleId ? userDto.roles.roleId : 0;
            let roleCode = userDto?.roles?.roleCode ? userDto.roles.roleCode : 0;
            if (url) {
                url = url.replace('{userid}', userDto.userId + '').replace('{epid}', epid + '')
                    .replace('{roleid}', roleId + '').replace('{rolecode}', roleCode + '').replace('{locationId}', storeData.locationId + '');
            }
            else if (ApiDataRaw) {
                ApiDataRaw.forEach(data => {
                    data.url = data.url.replace('{userid}', userDto.userId + '').replace('{epid}', epid + '')
                        .replace('{roleid}', roleId + '').replace('{rolecode}', roleCode + '').replace('{locationId}', storeData.locationId + '');
                });
            }
        }
    }
    return { url, ApiDataRaw, token, authentiction, language };
}
//is user is logged in
const isTokenIsAvailble = () => {
    let storeData = store.getState()['SessionState'];
    return storeData && storeData.token ? true : false;
}
const isUserAuthenticated = (rest) => {

    let storeData = store.getState()['SessionState'];
    console.log("isUserAuthenticated=>", storeData, rest.routeProps.isDefultauth);
    if (storeData && storeData.token && storeData.userDto) {
        if (storeData.isDefultPasswordAuth && storeData.isDefultPasswordAuth.enable) {
            return rest.routeProps.isDefultauth ? IRoutePath.isAuthenticated : IRoutePath.notAuthenticated
        }
        else {
            let roleCode = storeData.userDto?.roles?.roleCode;
            let isUserProfile = storeData.userDto?.isUserProfile;
            if (storeData.menuData) {
                if (rest.path.endsWith('1') || rest.routeProps.isNotMenuAuth) {
                    if (rest.routeProps.isNotMenuAuth && rest.routeProps?.isParentLinks) {
                        if (storeData.menuData.findIndex(x => rest.routeProps.isParentLinks.includes(x.link) || x.subModules.findIndex(y => rest.routeProps.isParentLinks.includes(y.link)) !== -1) !== -1)
                            return IRoutePath.isAuthenticated;
                    }
                    else
                        return IRoutePath.isAuthenticated;
                }
                else if (roleCode === IBranchTypeEnum.PHARMACY || roleCode === IBranchTypeEnum.CLINICAL || roleCode === IBranchTypeEnum.RADIOLOGY || roleCode === IBranchTypeEnum.LABORATORY || roleCode === IBranchTypeEnum.NONCLINICAL) {
                    if (rest.routeProps.isClient && rest.routeProps.isProfilePath && !isUserProfile) {
                        return rest.routeProps.isProfilePath;
                    }
                    else if (rest.routeProps.isClient && !rest.routeProps.isProfilePath)
                        return IRoutePath.isAuthenticated;

                }
                let index = storeData.menuData.findIndex(x => '/' + x.link === rest.path || x.subModules.findIndex(y => '/' + y.link === rest.path) !== -1);
                if (index !== -1)
                    return IRoutePath.isAuthenticated;
            }
        }
    }

    return IRoutePath.notAuthenticated;
}
const getSelectedState = (data) => {

    return store.getState()[data];
}
const getEnvironment = {
    pageSize: process.env.NODE_ENV === 'production' ? 7 : 7,
    pageRightSize: process.env.NODE_ENV === 'production' ? 5 : 5,
    listPageSize: process.env.NODE_ENV === 'production' ? 20 : 20
};

const getModulePrivilages = (loginUserRolecode, menuData, path, defaultPrivilages) => {
    let privileges = [...defaultPrivilages];

    if (menuData) {
        if (loginUserRolecode !== IRoleDesc.SUPERADMIN && loginUserRolecode !== IRoleDesc.ENTERPRISEADMIN) {
            privileges = [];
            let moduleIndex = menuData.findIndex(x => x.subModules.findIndex(y => y.link === path) !== -1);
            if (moduleIndex !== -1) {
                let subModuleIndex = menuData[moduleIndex].subModules.findIndex(y => y.link === path);
                if (subModuleIndex !== -1) {
                    (menuData[moduleIndex].subModules[subModuleIndex].privileges).forEach(z => {
                        privileges.push(z.permission);
                    });
                }
            }
        }
    }
    return { loginUserRolecode, privileges };
}

const getBranchTypeServingCategoryPriviliges = (value) => {
    return value ? branchTypeServingCategoryPriviligesData.find(x => x.branchTypeCode === value) : undefined;
}

export {
    checkAndReplacedTokenInfo, getEnvironment, getSelectedState, isUserAuthenticated, isTokenIsAvailble, getModulePrivilages, getBranchTypeServingCategoryPriviliges
    //, postRegister, postLogin, postForgetPwd
}