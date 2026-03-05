import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Int "mo:core/Int";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";

actor {
  type AuditRequest = {
    name : Text;
    email : Text;
    instagramHandle : Text;
    submissionTime : Time.Time;
  };

  type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    submissionTime : Time.Time;
  };

  module AuditRequest {
    public func compareByNewestFirst(a : AuditRequest, b : AuditRequest) : Order.Order {
      Int.compare(b.submissionTime, a.submissionTime);
    };
  };

  module ContactSubmission {
    public func compareByNewestFirst(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Int.compare(b.submissionTime, a.submissionTime);
    };
  };

  let auditRequests = Map.empty<Int, AuditRequest>();
  let contactSubmissions = Map.empty<Int, ContactSubmission>();
  var nextId = 0;

  public query ({ caller }) func hasAuditRequests() : async Bool {
    not auditRequests.isEmpty();
  };

  public query ({ caller }) func hasContactSubmissions() : async Bool {
    not contactSubmissions.isEmpty();
  };

  public shared ({ caller }) func submitAuditRequest(name : Text, email : Text, instagramHandle : Text) : async () {
    let audit : AuditRequest = {
      name;
      email;
      instagramHandle;
      submissionTime = Time.now();
    };
    auditRequests.add(nextId, audit);
    nextId += 1;
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, message : Text) : async () {
    let contact : ContactSubmission = {
      name;
      email;
      phone;
      message;
      submissionTime = Time.now();
    };
    contactSubmissions.add(nextId, contact);
    nextId += 1;
  };

  public query ({ caller }) func getAuditRequestCount() : async Nat {
    auditRequests.size();
  };

  public query ({ caller }) func getContactSubmissionCount() : async Nat {
    contactSubmissions.size();
  };

  public query ({ caller }) func getAllAuditRequestsSortedNewestFirst() : async [AuditRequest] {
    auditRequests.values().toArray().sort(AuditRequest.compareByNewestFirst);
  };

  public query ({ caller }) func getAllContactMessagesSortedNewestFirst() : async [ContactSubmission] {
    contactSubmissions.values().toArray().sort(ContactSubmission.compareByNewestFirst);
  };
};
