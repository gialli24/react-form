import { useState } from "react";
import Article from "./Article";

export default function AppMain({ articles }) {

    const [newTitle, setNewTitle] = useState("");
    const [articlesList, setArticlesList] = useState(articles);

    function handleSubmit(e) {
        e.preventDefault();

        const newArticle = {
            title: newTitle
        };

        setArticlesList([newArticle, ...articlesList]);
    }

    return (
        <main>
            {
                articlesList.map((article, index) => (
                    <Article key={index} article={article} />
                ))
            }

            <form onSubmit={handleSubmit}>
                <h2>Inserisci un articolo</h2>

                <input type="text" value={newTitle} onChange={e => { setNewTitle(e.target.value) }} />

                <button type="submit">
                    Aggiungi
                </button>
            </form>
        </main>
    );
}