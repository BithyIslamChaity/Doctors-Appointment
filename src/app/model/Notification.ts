export interface Notification {
    id: number;
    userId: number;
    appointmentId?: number;
    message: string;
    type: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  }
  