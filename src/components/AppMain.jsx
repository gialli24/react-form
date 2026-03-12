export default function AppMain({ articles }) {
    return (
        <main>
            {
                articles.map(article => (
                    <article key={article.id}>
                        <h2>{article.title}</h2>
                    </article>
                ))
            }
        </main>
    );
}