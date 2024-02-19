import { DateTime } from "luxon";

export interface Donation {
  userId: string;
  userNickname: string;
  message: string;
  createdAt: DateTime;
}
