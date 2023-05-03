export default function MockList({ item }) {
  return (
    <>
      <pre>{JSON.stringify(item, null, 4)}</pre>
    </>
  );
}
