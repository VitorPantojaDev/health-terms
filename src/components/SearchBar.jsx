export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      aria-label="Buscar termo"
      placeholder="Buscar termo..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
