export default function Size() {
  return (
    <>
      <div className="size">
        {window.innerWidth < 768
          ? "M"
          : window.innerWidth >= 768 && window.innerWidth < 1200
          ? "T"
          : "W"}
      </div>
    </>
  );
}
