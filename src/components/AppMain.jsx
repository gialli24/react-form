import { useState } from "react";
import Article from "./Article";

export default function AppMain({ articles }) {

    const [newTitle, setNewTitle] = useState("");
    const [articlesList, setArticlesList] = useState(articles);

    function handleSubmit(e) {
        e.preventDefault();

        const newArticle = {
            title: newTitle,
            image: "https://picsum.photos/400/300?random=1"
        };

        setArticlesList([newArticle, ...articlesList]);
    }

    return (
        <main>
            <section className="articles-form border-bottom bg-body-tertiary py-4">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <h2>Inserisci un articolo</h2>

                        <div className="d-flex gap-4 mt-3">
                            <input type="text" class="form-control" value={newTitle} onChange={e => { setNewTitle(e.target.value) }} />

                            <button type="submit" className="btn btn-primary">
                                Aggiungi
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <section className="articles py-4">
                <div className="container">

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                        {
                            articlesList.map((article, index) => (
                                <Article key={index} article={article} />
                            ))
                        }
                    </div>

                </div>
            </section>

        </main>
    );
}