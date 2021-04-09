const contenedor = document.getElementById('contenedor')
let a,g,ad=""
const llamarAPI = async () => {

    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    const data = await res.json()
    const bebida = data.drinks
    const result = bebida.map(generaBebida).join(' ')
    contenedor.innerHTML=result
    const l=document.querySelector('#lista')
    l.innerHTML=ad
}
const generaBebida = (bebida) =>{ 
  const arr=[bebida.strIngredient1,bebida.strIngredient2,bebida.strIngredient3,bebida.strIngredient4,
    bebida.strIngredient5,bebida.strIngredient6,bebida.strIngredient7,bebida.strIngredient8] 
  a=arr.filter(a=>a!=null)
  g=a.map(ele => `<li>${ele}</li>`)
  g.forEach(element => {
    ad+=element
  });
    return `
    <section class="card">
        <figure>
          <img src="${bebida.strDrinkThumb}" alt="${bebida.strDrink}">
        </figure>
        <div class="info">
            <h3>${bebida.strDrink}</h3>
            <span>Instrucciones:</span>
            <p>${bebida.strInstructions}</p>
        </div>
        <div class="ingre">
          <span>Ingredientes mas importantes</span>
          <ol id="lista">
          </ol>
        </div>
    </section>`
}
llamarAPI()