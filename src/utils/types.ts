export type flowStep = "created" | "authorizing" | "received" | "ready" | "error" | "session_expired" | "user_cancelled" | "network_failed";

export interface prescriptionResponse {
  sessionId: string;
  status: string;
  prescriptionReference: string;
  patientReference: string;
  medicationName: string;
  pharmacyId: string;
  pharmacyName: string
};
export interface OrderReviewRequest {
  sessionId: string;
  prescriptionReference: string;
  pharmacyId: string;
  patientReference: string;
}
export interface OrderReviewResponse {
  orderId: string;
  status: string;
  submittedAt: string;
  message: string;
}