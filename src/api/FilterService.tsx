const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getCategories() {
  const response = await fetch(baseUrl + "categories");
  if (response.ok) return response.json();
  throw response;
}

export async function getTags() {
  const response = await fetch(baseUrl + "tags");
  if (response.ok) return response.json();
  throw response;
}
