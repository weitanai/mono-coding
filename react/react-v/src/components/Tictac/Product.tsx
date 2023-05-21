export const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];
  
export default function RecipeList() {
    const list = recipes.map(item => {
        return (
            <div key={item.id}>
                <h2>item.name</h2>
                {
                    item.ingredients&&item.ingredients.map(name=> {
                        return (<li key={name}> {name} </li>)
                    })
                }
            </div>
        )
    })
  return (
    <div>
      <h1>Recipes</h1>
    </div>
  );
}
