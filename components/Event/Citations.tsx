interface CitationProps {
  citations: string[2];
}
function Citations({ citations }: CitationProps) {
  if (citations[0] == null || citations[0] === "") {
    return <p>No citations.</p>;
  }
  if (citations[0] != null && citations[1] === undefined) {
    return <p className="italic font-light">Citation: {citations[0]}</p>;
  } else {
    return (
      <div>
        <p className="italic font-light text-sm">
          Citations: {citations[0]}, {citations[1]}
        </p>
      </div>
    );
  }
}
export default Citations;
