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

export type PrescriptionError = 'SERVICE_UNAVAILABLE'
  | 'SESSION_EXPIRED'
  | 'USER_CANCELLED'
  | 'PRESCRIPTION_DATA_MISSING'
  | 'NETWORK_REQUEST_FAILED'
  | 'UNSUPPORTED_DEVICE';

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