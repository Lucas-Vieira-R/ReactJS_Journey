# Portal de Receitas

Um portal de receitas com um mecanismo de pesquisa, um método que retorna uma receita aleatória e a funcionalidade de favoritar suas receitas preferidas, que persistem no navegador!!
As receitas são fornecidas pela API [Meals DB](https://www.themealdb.com/api.php).

A grande novidade nesse projeto foi justamente o consumo da API! Nesse caso escolhi e aprendi mais sobre a biblioteca Axios, que realmente facilita o consumod e API com parametros. Anteriormente já havia utilzado o método `fecth()` com AJAX para consumir uma API, e em comparação o Axios realmente facilita nossa vida como veremos em breve.

Mesmo esse projeto não possuindo tantos componetes, ainda implemente a Context API para organizar toda a lógica de usabilidade e também do consumo de API.

Para o componente principal, com os cards de cada receita, primeiramente consumi o endpoint de pesquisa da API `https://www.themealdb.com/api/json/v1/1/search.php?s=` com o parametro `s` vazio. ( E aqui você já imagina também como vai funcionar o componente de pesquisa). Com o axios fica assim:
```
import axios from 'axios'
const AllMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

  const fetchMeals = async (url) => {
    setloading(true)
    try {
      const { data } = await axios.get(url)
      if (data.meals) {
        setMeals(data.meals)
      } else {
        setMeals([])
      }

    } catch (e) {
      console.log(e.response)
    }
    setloading(false)
  }
```

Veja que também foi implementada uma funcionalidade de pagina de carregamento, onde é mostrado ...loading caso a requisição não tenha sido respondida, puro charme.

No caso da pesquisa, um state searchTerm é definido e é implementado um input controlado que salva a string a ser pesquisada e depois é chamada no método fetchMeals, concatenando com a url principal.

Dois hooks useEffect() foram definidos para fazer pesquisas no componente `<Search />`:
```
  useEffect(() => {
    fetchMeals(AllMealsUrl)
  }, [])

  useEffect(() => {
    if (!searchTerm) return
    fetchMeals(`${AllMealsUrl}${searchTerm}`)

  }, [searchTerm])
```
Assim temos um código que funciona tanto para a pesquisa, quanto para todas as refeições, apenas alterando a url a ser consumida, usando parametro ou nao.

Para renderizar as refeições no componente `<Meals />` utilizei o map() no state meals:
```
      {meals.map((meal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = meal
        return (<article key={idMeal} className='single-meal'>
          <img src={image} style={{ width: '100%' }} className='img' onClick={() => selectMeal(idMeal)} />
          <footer>
            <h5>{title}</h5>
            <button className='like-btn' onClick={() => { addToFavorites(idMeal) }}><FaThumbsUp /></button>
          </footer>
        </article>)
      })}
```
No Modal para simplificar as coisas, utilizei as classes do bootstrap, e dois states (showModal, que guarda um booleano e selectedMeal para definir qual refeição apresentar no modal).

Gostei demais de desenvolver esse projeto principalmente por construir a página dinamicamente através da API e dos dados consumidos por ela.

Consumir API com o axios e trabalhar com os dados recebidos é uma habilidade tremendamente essencial para um desenvolvedor, e saber fazer isso já de cabeça é um grande passo para a formação do mesmo.

