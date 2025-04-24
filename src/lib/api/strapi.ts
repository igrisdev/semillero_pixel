const { STRAPI_HOST, STRAPI_TOKEN } = import.meta.env

export function query(url: string) {
  return fetch(`${STRAPI_HOST}/api/${url}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  }).then((res) => res.json())
}
