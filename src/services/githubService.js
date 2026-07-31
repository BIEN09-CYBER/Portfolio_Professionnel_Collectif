export async function getUser(username) {

  const response = await fetch(
    `https://api.github.com/users/${username}`
  );

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des données GitHub.");
  }

  return response.json();
}