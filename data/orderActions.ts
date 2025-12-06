// data/orderActions.ts

import { OrderStatus } from "./orders";

export type OrderAction =
  | "VIEW_DETAILS"
  | "REJECT"
  | "ACCEPT"
  | "CANCEL"
  | "MARK_READY"
  | "HANDED_OFF";

export function getActions(status: OrderStatus): OrderAction[] {
  switch (status) {
    case "NEW":
      return ["VIEW_DETAILS", "REJECT", "ACCEPT"];

    case "ACCEPTED":
      return ["VIEW_DETAILS",  "MARK_READY"];

    case "READY":
      return ["VIEW_DETAILS", "HANDED_OFF"];

    case "COMPLETED":
      return ["VIEW_DETAILS"];
    
    case "CANCELED":
      return ["VIEW_DETAILS"];
    default:
      return [];
  }
}
