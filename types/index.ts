export interface GrantsResponse {
  searchParams: SearchParams;
  hitCount: number;
  startRecord: number;
  oppHits: OppHit[];
  oppStatusOptions: Agency[];
  dateRangeOptions: Agency[];
  suggestion: string;
  eligibilities: Agency[];
  fundingCategories: Agency[];
  fundingInstruments: Agency[];
  agencies: Agency[];
  accessKey: string;
  errorMsgs: any[];
}

export interface Agency {
  subAgencyOptions?: Agency[];
  label: string;
  value: string;
  count: number;
}

export interface OppHit {
  id: string;
  number: string;
  title: string;
  agencyCode: string;
  agency: string;
  openDate: string;
  closeDate: string;
  oppStatus: OppStatus;
  docType: DocType;
  cfdaList: string[];
}

export enum DocType {
  Forecast = "forecast",
  Synopsis = "synopsis",
}

export enum OppStatus {
  Forecasted = "forecasted",
  Posted = "posted",
}

export interface SearchParams {
  resultType: string;
  searchOnly: boolean;
  sortBy: string;
  dateRange: string;
  oppStatuses: string;
  startRecordNum: number;
  fundingInstruments: string;
  fundingCategories: string;
  rows: number;
  keywordEncoded: boolean;
}

export interface GrantResponse {
  id: number;
  revision: number;
  opportunityNumber: string;
  opportunityTitle: string;
  owningAgencyCode: string;
  listed: string;
  publisherUid: string;
  flag2006: string;
  opportunityCategory: OpportunityCategory;
  synopsis: Synopsis;
  agencyDetails: AgencyDetails;
  topAgencyDetails: AgencyDetails;
  synopsisAttachmentFolders: any[];
  synopsisDocumentURLs: any[];
  synAttChangeComments: any[];
  cfdas: Cfda[];
  opportunityHistoryDetails: any[];
  opportunityPkgs: any[];
  closedOpportunityPkgs: any[];
  originalDueDate: string;
  synopsisModifiedFields: any[];
  forecastModifiedFields: any[];
  errorMessages: any[];
  synPostDateInPast: boolean;
  docType: string;
  forecastHistCount: number;
  synopsisHistCount: number;
  assistCompatible: boolean;
  assistURL: string;
  relatedOpps: any[];
  draftMode: string;
}

export interface AgencyDetails {
  code: string;
  seed: string;
  agencyName: string;
  agencyCode: string;
  topAgencyCode: string;
}

export interface Cfda {
  id: number;
  opportunityId: number;
  cfdaNumber: string;
  programTitle: string;
}

export interface OpportunityCategory {
  category: string;
  description: string;
}

export interface Synopsis {
  opportunityId: number;
  version: number;
  agencyCode: string;
  agencyName: string;
  agencyPhone: string;
  agencyAddressDesc: string;
  agencyDetails: AgencyDetails;
  topAgencyDetails: AgencyDetails;
  agencyContactPhone: string;
  agencyContactName: string;
  agencyContactDesc: string;
  agencyContactEmail: string;
  agencyContactEmailDesc: string;
  synopsisDesc: string;
  responseDate: string;
  postingDate: string;
  archiveDate: string;
  costSharing: boolean;
  awardCeiling: string;
  awardCeilingFormatted: string;
  awardFloor: string;
  awardFloorFormatted: string;
  sendEmail: string;
  createTimeStamp: string;
  createdDate: string;
  lastUpdatedDate: string;
  applicantTypes: ApplicantType[];
  fundingInstruments: ApplicantType[];
  fundingActivityCategories: ApplicantType[];
  responseDateStr: string;
  postingDateStr: string;
  archiveDateStr: string;
  createTimeStampStr: string;
}

export interface ApplicantType {
  id: string;
  description: string;
}
