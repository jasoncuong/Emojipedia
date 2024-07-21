import "./Content.css";
import Card from "./Card";
import emojipedia from "../emojipedia";

function createCard(card) {
    return (
        <Card
            key={card.id}
            emoji={card.emoji}
            name={card.name}
            meaning={card.meaning}
        />
    );
}

function Content() {
    return (
        <div className="container">
            {emojipedia.map(createCard)}
            {/* <Card
                emoji={emojipedia[0].emoji}
                name={emojipedia[0].name}
                meaning={emojipedia[0].meaning}
            />
            <Card
                emoji={emojipedia[1].emoji}
                name={emojipedia[1].name}
                meaning={emojipedia[1].meaning}
            />
            <Card
                emoji={emojipedia[2].emoji}
                name={emojipedia[2].name}
                meaning={emojipedia[2].meaning}
            />
            <Card
                emoji={emojipedia[3].emoji}
                name={emojipedia[3].name}
                meaning={emojipedia[3].meaning}
            />
            <Card
                emoji={emojipedia[4].emoji}
                name={emojipedia[4].name}
                meaning={emojipedia[4].meaning}
            /> */}
        </div>
    );
}

export default Content;
