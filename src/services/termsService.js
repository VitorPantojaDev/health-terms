export async function fetchBffTerms() {
 const response = await fetch(import.meta.env.VITE_BFF_URL);
 if (!response.ok) throw new Error('Falha ao buscar termos do BFF');
 return response.json();
}
export async function fetchOwnApiTerms() {
 const response = await fetch(import.meta.env.VITE_OWN_API_URL);
 if (!response.ok) throw new Error('Falha ao buscar termos da API propria');
 return response.json();
}