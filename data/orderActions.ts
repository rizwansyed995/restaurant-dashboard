// data/orderActions.ts

import { Order, OrderStatus } from "./orders";

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
      return ["VIEW_DETAILS", "CANCEL", "MARK_READY"];

    case "READY":
      return ["VIEW_DETAILS", "CANCEL", "HANDED_OFF"];

    case "COMPLETED":
    default:
      return [];
  }
}
