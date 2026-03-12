export default function Article({ article, deleteArticle, index }) {

    return (
        <article>
            <div className="pb-2 d-flex justify-content-end gap-2">
                <button className="btn p-0 text-secondary">
                    <i className="bi bi-pencil-square"></i>
                </button>
                <button onClick={() => deleteArticle(index)} className="btn p-0 text-secondary">
                    <i className="bi bi-trash"></i>
                </button>
            </div>

            <img src={article.image} className="rounded-4" alt={article.title}></img>

            <div className="article-body py-4">
                <h2 className="fs-4">{article.title}</h2>
            </div>
        </article>
    )
}