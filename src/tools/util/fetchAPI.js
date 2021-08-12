/**
 *
 * @param {String} url
 * @param {Object} params objects with paramaters
 * @returns
 */
export async function getRequest(url, params) {
  if (params) {
    url += new URLSearchParams(params);
  }
  try {
    let dataJson = await fetch(url);

    return await dataJson.json();
  } catch (error) {
    return new Error({ apiErr: "api error" });
  }
}
