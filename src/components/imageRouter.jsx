export default function imageRouter(targetUrl) {
    let imgUrl = 'https://starwars-visualguide.com/assets/img'
    let pathID = targetUrl.split('/')[5]
    if (targetUrl.includes('people')) {
        imgUrl += '/characters/' + pathID + '.jpg'
    } else if (targetUrl.includes('vehicles')) {
        imgUrl += '/vehicles/' + pathID + '.jpg'
    } else if (targetUrl.includes('planets')) {
        imgUrl += '/planets/' + pathID + '.jpg'
    }
    return imgUrl
}