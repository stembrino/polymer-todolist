/**
 * @description event listener types
 */
export const EVENT_LISTENER_TYPES = {
  SEND_DATA_TABLE: "sendDataTable",
  SHOW_TABLE: "showTable",
};

/**
 *
 * @param {String} eventListenerName
 * @returns
 */
export function initEventListnet(eventListenerName, payload) {
  if (!eventListenerName || typeof eventListenerName !== "string")
    return console.error("eventListener should be defined and a String", eventListenerName);
  if (payload) return new CustomEvent(eventListenerName, { detail: payload });

  return new CustomEvent(eventListenerName);
}
