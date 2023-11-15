"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGrantsDetails = exports.getGrantsId = exports.getGrant = exports.getGrants = void 0;
function getGrants() {
    return __awaiter(this, void 0, void 0, function* () {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json, text/plain, */*");
        myHeaders.append("Accept-Language", "en-US,en;q=0.9");
        myHeaders.append("Connection", "keep-alive");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("DNT", "1");
        myHeaders.append("Origin", "https://grants.gov");
        myHeaders.append("Referer", "https://grants.gov/");
        myHeaders.append("Sec-Fetch-Dest", "empty");
        myHeaders.append("Sec-Fetch-Mode", "cors");
        myHeaders.append("Sec-Fetch-Site", "same-site");
        myHeaders.append("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36");
        myHeaders.append("sec-ch-ua", '"Chromium";v="119", "Not?A_Brand";v="24"');
        myHeaders.append("sec-ch-ua-mobile", "?0");
        myHeaders.append("sec-ch-ua-platform", '"macOS"');
        const requestParams = {
            keyword: null,
            oppNum: null,
            cfda: null,
            agencies: null,
            sortBy: "openDate|desc",
            rows: 5000,
            eligibilities: null,
            fundingCategories: "AG",
            fundingInstruments: "G",
            dateRange: "",
            oppStatuses: "forecasted|posted",
        };
        const body = JSON.stringify(requestParams);
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body,
            redirect: "follow",
        };
        try {
            const res = yield fetch("https://apply07.grants.gov/grantsws/rest/opportunities/search", requestOptions);
            const data = (yield res.json());
            return data;
        }
        catch (error) {
            console.log("error", error);
        }
    });
}
exports.getGrants = getGrants;
function getGrant(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "*/*");
        myHeaders.append("Accept-Language", "en-US,en;q=0.9");
        myHeaders.append("Connection", "keep-alive");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        myHeaders.append("DNT", "1");
        myHeaders.append("Origin", "https://grants.gov");
        myHeaders.append("Referer", "https://grants.gov/");
        myHeaders.append("Sec-Fetch-Dest", "empty");
        myHeaders.append("Sec-Fetch-Mode", "cors");
        myHeaders.append("Sec-Fetch-Site", "same-site");
        myHeaders.append("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36");
        myHeaders.append("sec-ch-ua", '"Chromium";v="119", "Not?A_Brand";v="24"');
        myHeaders.append("sec-ch-ua-mobile", "?0");
        myHeaders.append("sec-ch-ua-platform", '"macOS"');
        const raw = `oppId=${id}`;
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };
        try {
            const res = yield fetch("https://apply07.grants.gov/grantsws/rest/opportunity/details", requestOptions);
            const data = (yield res.json());
            return data;
        }
        catch (error) {
            console.log("error", error);
        }
    });
}
exports.getGrant = getGrant;
function getGrantsId(grantsResponse) {
    const grants = grantsResponse.oppHits;
    const grantsId = grants.map((grant) => grant.id);
    return grantsId;
}
exports.getGrantsId = getGrantsId;
function getGrantsDetails(grantsIds) {
    return __awaiter(this, void 0, void 0, function* () {
        const grantDetailsArray = [];
        for (let i = 0; i < grantsIds.length; i++) {
            const grantDetail = yield getGrant(grantsIds[i]);
            grantDetail && grantDetailsArray.push(grantDetail);
        }
        return grantDetailsArray;
    });
}
exports.getGrantsDetails = getGrantsDetails;
