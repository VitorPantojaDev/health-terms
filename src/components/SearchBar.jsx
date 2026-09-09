export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar-wrapper">
      <input
        type="text"
        aria-label="Buscar termo"
        placeholder="Buscar termo em inglês..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button type="button" className="search-clear" aria-label="Limpar busca" onClick={() => onChange('')}>
          ×
        </button>
      )}
    </div>
  );
}