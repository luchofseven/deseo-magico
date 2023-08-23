const API_URL = 'https://api.bluelytics.com.ar/v2/latest'

export const getDolarPrice = async (): Promise<number> => {
  const res = await fetch(API_URL)
  const json = await res.json()

  return json.oficial?.value_sell
}
