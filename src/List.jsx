export default function List({ item }) {
  return (
    <h2>
      <pre>{JSON.stringify(item, null, 4)}</pre>
    </h2>
  );
}
