import { GrantResponse, GrantsResponse } from "../types";

export async function getGrants() {
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
  myHeaders.append(
    "User-Agent",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
  );
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

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body,
    redirect: "follow",
  };

  try {
    const res = await fetch(
      "https://apply07.grants.gov/grantsws/rest/opportunities/search",
      requestOptions
    );
    const data = (await res.json()) as unknown as GrantsResponse;
    return data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function getGrant(id: string) {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "*/*");
  myHeaders.append("Accept-Language", "en-US,en;q=0.9");
  myHeaders.append("Connection", "keep-alive");
  myHeaders.append(
    "Content-Type",
    "application/x-www-form-urlencoded;charset=UTF-8"
  );
  myHeaders.append("DNT", "1");
  myHeaders.append("Origin", "https://grants.gov");
  myHeaders.append("Referer", "https://grants.gov/");
  myHeaders.append("Sec-Fetch-Dest", "empty");
  myHeaders.append("Sec-Fetch-Mode", "cors");
  myHeaders.append("Sec-Fetch-Site", "same-site");
  myHeaders.append(
    "User-Agent",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
  );
  myHeaders.append("sec-ch-ua", '"Chromium";v="119", "Not?A_Brand";v="24"');
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append("sec-ch-ua-platform", '"macOS"');

  const raw = `oppId=${id}`;

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const res = await fetch(
      "https://apply07.grants.gov/grantsws/rest/opportunity/details",
      requestOptions
    );
    const data = (await res.json()) as unknown as GrantResponse;
    return data;
  } catch (error) {
    console.log("error", error);
  }
}

export function getGrantsId(grantsResponse: GrantsResponse) {
  const grants = grantsResponse.oppHits;
  const grantsId = grants.map((grant) => grant.id);
  return grantsId;
}

export async function getGrantsDetails(grantsIds: string[]) {
  const grantDetailsArray: GrantResponse[] = [];
  for (let i = 0; i < grantsIds.length; i++) {
    const grantDetail = await getGrant(grantsIds[i]);
    grantDetail && grantDetailsArray.push(grantDetail);
  }
  return grantDetailsArray;
}
