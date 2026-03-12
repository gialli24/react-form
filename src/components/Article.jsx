import { useState } from "react"

export default function Article({ article, deleteArticle, index, articlesList, setArticlesList }) {

    const [updateArticle, setUpdateArticle] = useState(false);
    const [newTitle, setNewTitle] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (newTitle.length < 4) {
            alert("Il titolo deve contenere almeno 5 caratteri");
            return;
        }

        const updateArticles = [...articlesList];
        updateArticles[index].title = newTitle;

        setArticlesList(updateArticles);

        setNewTitle("");
        setUpdateArticle(false);
    }

    return (
        <article>
            <div className="pb-2 d-flex justify-content-end gap-2">
                <button onClick={() => { setUpdateArticle(!updateArticle); setNewTitle(article.title) }} className="btn p-0 text-secondary">
                    <i className="bi bi-pencil-square"></i>
                </button>
                <button onClick={() => deleteArticle(index)} className="btn p-0 text-secondary">
                    <i className="bi bi-trash"></i>
                </button>
            </div>

            <img src={article.image} className="rounded-4" alt={article.title}></img>

            <div className="article-body py-4">
                {
                    updateArticle ?

                        <form onSubmit={handleSubmit}>
                            <input className="form-control mb-2 w-100" type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                            <button className="btn btn-primary w-100">Modifica</button>
                        </form>

                        :

                        <h2 className="fs-4">{article.title}</h2>
                }
            </div>
        </article>
    )
}