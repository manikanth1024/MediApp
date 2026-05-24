import { strings } from "../utils/strings";
import { OrderReviewRequest, OrderReviewResponse } from "../utils/types";
import { delay } from "./sessionStatusService";

const orderResponse: OrderReviewResponse = {
    orderId: `ORD-${Date.now()}`,
    status: 'Order submitted successfully to pharmacy.',
    submittedAt: new Date().toISOString(),
    message: strings.reviewFlow.pharmacyReview,
}


export const submitOrderRequest = async (order: OrderReviewRequest) => {
    await delay(1500);
    return orderResponse;
} 