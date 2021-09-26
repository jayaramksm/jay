
import Axios from 'axios';
import { getversionCheckInterval, isTokenIsAvailble } from './helpersIndex';
import { isNumeric } from 'rxjs/internal-compatibility';

let versionhash: string

// class VersionCheckService extends React.Component<Props, any>{
// this will be replaced by actual hash post-build.js

// constructor(props) {
//     super(props);
// }

/**
 * Checks in every set frequency the version of frontend application
 * @param url
 * @param {number} frequency - in milliseconds, defaults to 30 minutes
 */
export const initVersionCheck = (url, routes, message) => {
    let frequency = getversionCheckInterval();
    frequency = isNumeric(frequency) ? frequency * 1000 : 300000;
    console.log("frequency=>", url, frequency);


    checkVersion(url, routes, message);
    setInterval(() => {
        checkVersion(url, routes, message);
    }, frequency);
}

/**
 * Will do the call and check if the hash has changed or not
 * @param url
 */
const checkVersion = (url, routes, message) => {
    // timestamp these requests to invalidate caches
    Axios.get(url + '?t=' + new Date().getTime())
        .then(
            (response: any) => {
                console.log("response", response, url + '?t=' + new Date().getTime());

                if (versionhash) {
                    const hash = response.data.hash;
                    console.log("hash", hash, versionhash);

                    // const hashChanged = this.hasHashChanged(this.versionhash, hash);

                    // If new version, do something

                    if (versionhash !== hash) {
                        // ENTER YOUR CODE TO DO SOMETHING UPON VERSION CHANGE
                        // for an example: location.reload();
                        versionhash = hash;
                        const hashPath = window.location.hash;
                        let showConfirmBox = false;
                        let index = routes.filter(y => !y.ispublic).findIndex(x => '#' + x.path === hashPath);
                        showConfirmBox = index !== -1 ? isTokenIsAvailble() : false
                        console.log("currentHashhh==>", hash, window.location.href, hashPath);
                        if (!showConfirmBox) {
                            window.location.reload(true);
                        }
                        else {
                            message = message.replace('{version}', response.data.version).replace('{updatedOn}', response.data.updatedOn)
                            if (window.confirm(message))
                                window.location.reload(true);
                        }
                    }
                }
                else {

                    versionhash = response.data.versionhash
                    console.log("currentHash==>", versionhash);
                }
                // store the new hash so we wouldn't trigger versionChange again
                // only necessary in case you did not force refresh

            },
            (err) => {
                console.error(err, 'Could not get version ', versionhash);
            }
        );
}

/**
 * Checks if hash has changed.
 * This file has the JS hash, if it is a different one than in the version.json
 * we are dealing with version change

 * @param newHash
 * @returns {boolean}
 */

export default initVersionCheck;