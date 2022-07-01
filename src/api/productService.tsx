const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getProduct(category: string, id: string) {
  const response = await fetch(baseUrl + "/" + category + "/" + id);
  if (response.ok) return response.json();
  throw response;
}

export async function getProductById(id: string) {
  const response = await fetch(baseUrl + "products/" + id);
  if (response.ok) return response.json();
  throw response;
}
