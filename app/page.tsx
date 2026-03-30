export default function Home() {
  /** Same value as BASE_PATH in GitHub Actions so /public assets load under the repo subpath. */
  const basePath = process.env.BASE_PATH ?? "";
  const qrSrc = `${basePath}/images/image-qr-code.png`;

  return (
    <main>
      <div className="card">
        <img
          className="qr-code"
          src={qrSrc}
          alt="QR code linking to Frontend Mentor"
          width={288}
          height={288}
        />
        <h1 className="title">
          Improve your front-end skills by building projects
        </h1>
        <p className="description">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </main>
  );
}
