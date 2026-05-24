import { flowStep, prescriptionResponse } from "../utils/types";

const prescriptionResult: prescriptionResponse = {
      sessionId: "sess_12345",
      status: "completed",
      prescriptionReference: "RX-****-5678",
      patientReference: "PAT-001",
      medicationName: "Mock Medication",
      pharmacyId: "pharmacy_demo_001",
      pharmacyName: 'ABC Pharmacy'
}

export const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const startPrescriptionSession = async (): Promise<{sessionId: string, status: string}> => {
    await delay(1000);
    const sessionId = `sess_${Math.random().toString(36).substring(2, 9)}`;
    return {
        sessionId,
        status: 'created'
    }
}

export const checkSessionStatus = async (currentStatus: flowStep): Promise<flowStep> => {
    await delay(1500)
    switch(currentStatus){
        case "created":
            return "authorizing";
        case "authorizing":
            return "received";
        case "received":
            return "ready";
        default:
            return currentStatus;
    }
}

export const completePrescriptionSession = async () => {
    await delay(1500)
    return prescriptionResult
}
