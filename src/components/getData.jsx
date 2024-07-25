import imageRouter from './imageRouter'

export const getData = async(type) => {
    let people;
    let baseUrl = 'https://swapi.dev/api/';
    await fetch(baseUrl+type+'/')
    .then(response => response.json())
    .then(data => people = data.results)
    .then(data => {
        data.map(x => {
            x.isFavorite=false;
            // used to bridge between the API and the Card component
            x.category = type == 'people' ? 'characters' : type;
            x.path = x.url.replace(baseUrl, '');
            x.image = imageRouter(x.url);
        });
    });
    return people;

}
export default getData;