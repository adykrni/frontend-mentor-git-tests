export default function Home() {
  const basePath = process.env.BASE_PATH ?? "";
  const asset = (path: string) => `${basePath}${path}`;

  return (
    <main className="page-shell">
      <div className="card">
        <img
          className="illustration"
          src={asset("/images/illustration-article.svg")}
          alt=""
          width={336}
          height={201}
        />
        <div className="chip">
          <p className="chip-text">Learning</p>
        </div>
        <p className="description-main">Published 30 March 2026</p>
        <h1 className="title">HTML &amp; CSS Foundations</h1>
        <p className="description">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="name-tag-container">
          <img
            className="avatar"
            src={asset("/images/image-avatar.webp")}
            alt=""
            width={30}
            height={30}
          />
          <p className="name-tag">Greg Hooper</p>
        </div>
      </div>
    </main>
  );
}
