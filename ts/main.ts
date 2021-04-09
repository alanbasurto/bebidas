const contenedor = document.getElementById('contenedor')
const llamarAPI = async () => {
    
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    const data = await res.json()
    const bebidas = data.drinks
    const result = bebidas.map(generaBebida).join(' ')
    contenedor.innerHTML=result
}
const generaBebida = (bebidas) =>{
    return `
    <section class="card">
        <figure>
          <img src="${bebidas.strDrinkThumb}" alt="${bebidas.strDrink}">
        </figure>
        <div class="info">
            <h3>${bebidas.strDrink}</h3>
            <span>Instrucciones:</span>
            <p>${bebidas.strInstructions}</p>
        </div>
        <div class="ingre">
          <span>Ingredientes mas importantes</span>
          <ol>
            <li>${bebidas.strIngredient1}</li>
            <li>${bebidas.strIngredient2}</li>
            <li>${bebidas.strIngredient3}</li>
            <li>${bebidas.strIngredient4}</li>
            <li>${bebidas.strIngredient5}</li>
            <li>${bebidas.strIngredient6}</li>
            <li>${bebidas.strIngredient7}</li>
          </ol>
        </div>
    </section>`
}
llamarAPI()