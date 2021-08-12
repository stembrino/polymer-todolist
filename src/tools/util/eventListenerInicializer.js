/**
 * @description event listener types
 */
export const EVENT_LISTENER_TYPES = {
  SEND_DATA_TABLE: "sendDataTable",
  SHOW_TABLE: "showTable",
  HAS_ERROR_LISTENER: "hasErrorListener"
};

/**
 *
 * @param {String} eventListenerName
 * @param {Any} data send in event listener 
 * @returns
 */
export function initEventListnet(eventListenerName, payload) {
  if (!eventListenerName || typeof eventListenerName !== "string")
    return console.error("eventListener should be defined and a String", eventListenerName);
  let customEventListener = new CustomEvent(eventListenerName);
  customEventListener.payload = payload;
  return customEventListener;
}
