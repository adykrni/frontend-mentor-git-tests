export default function Home() {
  return (
    <main>
      <div className="card">
        <img
          className="qr-code"
          src="/images/image-qr-code.png"
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
