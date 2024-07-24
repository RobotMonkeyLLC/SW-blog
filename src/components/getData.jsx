export const getData = async(type) => {
    let people;
    await fetch('https://swapi.dev/api/'+type+'/')
    .then(response => response.json())
    .then(data => people = data.results)
    .then(data => {
        data.map(x => {
            x.isFavorite=false;
            // used to bridge between the API and the Card component
            x.category = type == 'people' ? 'characters' : type;
        });
    });
    return people;

}
export default getData;