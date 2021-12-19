import request from 'request-promise';
import React from 'react';


export const postApi = async function (url, data) {
    const options = {
        method: 'POST',
        uri: url,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: JSON.stringify(data)
        })
    }

    const dataResult = [];
    await request(options)
        .then(function (parsedBody) {
            const parsedBodyArr = JSON.parse(parsedBody)
            dataResult.push(parsedBodyArr.result)
        })
    if (dataResult.length > 0) {
        return dataResult[0]
    } else {
        return dataResult
    }
};

const user = 'congaubeo@123';
const password = 'congaubeo@123';

const base64encodedData = Buffer.from(user + ':' + password).toString('base64');

export const postApiNew = async function (method, url, data) {
    let token = data.token ? data.token : ''
    if (data.token) {
        delete data.token
    }
    const options = {
        method: method,
        uri: url,
        headers: {
            Accept: 'application/json',
            'token': token,
            'mobile-secret-key': '3953390b-42bb-11eb-9f8b-1111914b71be',
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + base64encodedData
        },
        body: JSON.stringify(data)
    }


    console.log(data)
    let dataResult = {
        data: null,
        message: 'Lỗi server'
    };
    await request(options)
        .then(function (parsedBody) {
            dataResult = JSON.parse(parsedBody)

        }).catch(function (err) {
            dataResult = JSON.parse(err.error)
            if (dataResult.code === 401) {
                sessionStorage.setItem('users', '')
                // window.location.href = "/";
            }
        });
    return dataResult
};

export function urlApi() {
    return 'https://us-central1-autolike-cc-f0644.cloudfunctions.net';
}

export function urlApiNewPublic() {
    return 'https://adminapi-autolike.congaubeo.us/public-api/v1';
}

const Domain = "https://adminapi-autolike.congaubeo.us"

export function urlList() {
    return {
        "URL_SERVICE": {
            "ALL_SERVICE": Domain + "/public-api/v1/employees/services/all",
            "SERVICE_SEARCH": Domain + "/public-api/v1/employees/services/search",
            "PAUSE": Domain + "/public-api/v1/employees/services/pause",
            "UID_SCAN_HISTORY": Domain + "/public-api/v1/employees/uid-scan-history/all",
            "RESUM": Domain + "/public-api/v1/employees/services/resume-by-code",
            "REPORT": Domain + "/public-api/v1/employees/services/report-by-code",
            "PAUSE_SERVICE_WARRANTY": Domain + "/public-api/v1/employees/services/pause-service-warranty"
        },
        "URL_SERVICE_LOG": {
            "ALL_SERVICE_LOG": Domain + "/public-api/v1/employees/service-logs/all"
        },
        "URL_LOG": {
            "URL": "https://api.autolike.cc/public-api/v1/get-log-by-service-code"
        },
        "URL_COMMENT": {
            "ALL_COMMENT": Domain + "/public-api/v1/employees/comments/search",
            "UPDATE_COMMENT": Domain + "/public-api/v1/employees/comments/update",
            "DELETE_COMMENT": Domain + "/public-api/v1/employees/comments/delete",
            "ALL_CONTENT": Domain + "/public-api/v1/employees/comments/all-content-by-id"
        },
        "URL_USER": {
            "HISTORY": Domain + "/public-api/v1/employees/wallet-logs/all",
            "ALL": Domain + "/public-api/v1/employees/users/all",
            "DETAIL_BY_PHONE": Domain + "/public-api/v1/employees/users/detail-by-phone",
            "DETAIL": Domain + "/public-api/v1/employees/users/detail",
            "UPDATE": Domain + "/public-api/v1/employees/users/update",
            "DELETE": Domain + "/public-api/v1/employees/users/delete",
            "UPDATE_PERMISSIONS": Domain + "/public-api/v1/employees/user-permissions/update",

        },
        "URL_AGENCY": {
            "CREATE": Domain + "/public-api/v1/employees/agency/create",
            "ALL": Domain + "/public-api/v1/employees/agency/all",
            "UPDATE_INFO": Domain + "/public-api/v1/employees/agency/update-info",
            "UPDATE_STATUS": Domain + "/public-api/v1/employees/agency/update-status",
            "DELETE": Domain + "/public-api/v1/employees/agency/delete",
            "DETAIL": Domain + "/public-api/v1/employees/agency/detail",
            "CREATE_SITE": Domain + "/public-api/v1/employees/agency/create-domain",
            "ALL_DOMAIN": Domain + "/public-api/v1/employees/agency/all-domain",
        },
        "URL_PACK": {
            "CREATE": Domain + "/public-api/v1/employees/packs/create",
            "UPDATE": Domain + "/public-api/v1/employees/packs/update",
            "DELETE": Domain + "/public-api/v1/employees/packs/delete",
            "ALL": "https://api-autolike.congaubeo.us/public-api/v1/packs/all",
            "DETAIL": "https://api-autolike.congaubeo.us/public-api/v1/packs/detail",
        },
        "URL_TRANSACTION": {
            "DETAIL": Domain + "/public-api/v1/employees/transactions/detail",
            "ALL": Domain + "/public-api/v1/employees/transactions/all",
            "ACTIVE": Domain + "/public-api/v1/employees/transactions/active",
        },
        "URL_SETTING": {
            "CREATE": Domain + "/public-api/v1/employees/settings/create",
            "UPDATE": Domain + "/public-api/v1/employees/settings/update",
            "DETAIL": "https://api-autolike.congaubeo.us/public-api/v1/settings/detail",
        },
        "URL_GIFT": {
            "GEN": Domain + "/public-api/v1/employees/gift/gen",
            "APPLY": Domain + "/public-api/v1/employees/gift/apply",
            "ALL": Domain + "/public-api/v1/employees/gift/all",
            "HISTORY": Domain + "/public-api/v1/employees/gift/all-history",
            "UPDATE_STATUS": Domain + "/public-api/v1/employees/gift/update-status",
            "DELETE": Domain + "/public-api/v1/employees/gift/delete",
        },
        "URL_WARRANTY": {
            "ALL": Domain + "/public-api/v1/employees/services/search",
            "ACTIVE": Domain + "/public-api/v1/employees/service-warrantys/active-v2",
            "All_SERVICE": Domain + "/public-api/v1/employees/service-end-info/All",
        },
        "URL_CONTACT": {
            "ALL": Domain + "/public-api/v1/employees/contacts/all",
            "UPDATE": Domain + "/public-api/v1/employees/contacts/active",
        },
        "URL_REPORT": {
            "DETAIL": Domain + "/public-api/v1/employees/reports/detail"
        },
        "CHECK_INFO": {
            "ALL": Domain + "/public-api/v1/employees/service-check-info/All"
        },
        "SHARE_LOG": {
            'ALL': Domain + "/public-api/v1/employees/share-post-log/all"
        }
    }
}

export function convertToTime(myDate) {
    return new Date(myDate).getTime();
}

export function convertDate(str) {
    str = str.toString();
    let parts = str.split(" ");
    let months = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12"
    };
    return parts[3] + "-" + months[parts[1]] + "-" + parts[2];
};

export function convertTodate(timeStamp) {
    if (timeStamp > 0) {
        timeStamp = parseInt(timeStamp) + 7 * 60 * 60 * 1000
        return new Date(timeStamp).toISOString().slice(0, 19).replace('T', ' ')
    } else {
        return ''
    }

};

