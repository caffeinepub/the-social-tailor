import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface AuditRequest {
    name: string;
    instagramHandle: string;
    email: string;
    submissionTime: Time;
}
export type Time = bigint;
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    submissionTime: Time;
    phone: string;
}
export interface backendInterface {
    getAllAuditRequestsSortedNewestFirst(): Promise<Array<AuditRequest>>;
    getAllContactMessagesSortedNewestFirst(): Promise<Array<ContactSubmission>>;
    getAuditRequestCount(): Promise<bigint>;
    getContactSubmissionCount(): Promise<bigint>;
    hasAuditRequests(): Promise<boolean>;
    hasContactSubmissions(): Promise<boolean>;
    submitAuditRequest(name: string, email: string, instagramHandle: string): Promise<void>;
    submitContactForm(name: string, email: string, phone: string, message: string): Promise<void>;
}
