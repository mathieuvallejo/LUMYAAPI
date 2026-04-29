const OPENDATA_API_URL = 'https://tabular-api.data.gouv.fr/api/resources/fffda7e9-0ea2-4c35-bba0-4496f3af935d/data/';

async function verifierProfessionnel(siret, nom) {
  const params = new URLSearchParams({
    'Numéro SIRET site__exact': siret,
    "Nom d'exercice__exact": nom,
  });

  const response = await fetch(`${OPENDATA_API_URL}?${params.toString()}`);

  if (!response.ok) {
    throw new Error(`Erreur open data : ${response.status}`);
  }

  const json = await response.json();
  return json.data && json.data.length > 0;
}

export { verifierProfessionnel };