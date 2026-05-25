export const strings = {
    startFlow: {
        pharmacyName: 'ABC Pharmacy',
        startScreenDescription : 'Start your prescription request securely. Your prescription data will be retrieved and sent to the pharmacy for review.',
        trustMessage: '🔒 Your data is encrypted and never stored on this device.',
        cta: 'Start prescription flow',
    },
    sessionFlow: {
      title: 'Setting Up Your Session...',
      subtitle: 'Please wait while we connect to the prescription service.',
    },
    reviewFlow: {
        title: 'Review Your Prescription',
        labels: {
            prescriptionRef: 'Prescription Reference',
            medication: 'Medication',
            patient: 'Patient Reference',
            pharmacy: 'Pharmacy',
        },
        demoNotice: '⚠️ This is demo/mock data. No real prescription is being processed.',
        cta: 'Submit Order Request',
        pharmacyReview: 'Your prescription request has been sent to the pharmacy. The pharmacy team will review it and contact you if anything else is needed.'

    },
    confirmationFlow: {
      nextSteps: 'What happens next?',
      steps: [
        'The pharmacy reviews your prescription request.',
        'You will receive a notification when it is ready.',
        'Visit the pharmacy or request home delivery.',
      ],
      goHome: 'Go Home',
    }
}

export const status = {
    SESSION_CREATED: 'Session created',
    EXT_AUTHORIZATION: 'Waiting for external authorization',
    PRESCRIPTION_RECEIVED: 'Prescription received',
    SUBMIT_ORDER: 'Ready to submit order'
}

export const statusSteps = [
  {
    key: "created",
    label: status.SESSION_CREATED,
  },
  {
    key: "authorizing",
    label: status.EXT_AUTHORIZATION,
  },
  {
    key: "received",
    label: status.PRESCRIPTION_RECEIVED,
  },
  {
    key: "ready",
    label: status.SUBMIT_ORDER,
  },
];

export const stepStatus: any = {
  created: 0,
  authorizing: 1,
  received: 2,
  ready: 3,
  error: -1,
  session_expired: -1,
  user_cancelled: -1,
  network_failed: -1,
};