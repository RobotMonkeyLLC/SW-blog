export const getData = async(type) => {
    let people;
    await fetch('https://swapi.dev/api/'+type+'/')
    .then(response => response.json())
    .then(data => people = data.results)
    .then(data => {
        data.map(x => {
            x.isFavorite=false;
        });
    });
    return people;

}
export default getData;