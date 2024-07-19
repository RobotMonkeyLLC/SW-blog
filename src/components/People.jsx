import Card from "./Card.jsx";

export default function People() {
    const data = {
        title : "People",
        text : "This is a card for people",
        id : 1
    }
    return  (
        <div>
            <Card data={data}/>
        </div>
       
    )
}