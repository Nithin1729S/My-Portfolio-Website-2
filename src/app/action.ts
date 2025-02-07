export default async function increasePokeCounter() {
  if (typeof window !== "undefined") {
    let count = parseInt(localStorage.getItem("pokeCounter") || "0", 10);
    localStorage.setItem("pokeCounter", (count + 1).toString());
  }
}
