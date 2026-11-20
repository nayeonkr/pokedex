// PokeAPI 요청 하나
export async function poke(path) {
  const res = await fetch(`https://pokeapi.co/api/v2${path}`)
  if (!res.ok) {
    throw new Error(`PokeAPI ${res.status}`)
  }
  return await res.json()
}