const GITHUB_USERNAME = "BIEN09-CYBER";

export async function getUser() {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}`
  );

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des données GitHub.");
  }

  return await response.json();
}