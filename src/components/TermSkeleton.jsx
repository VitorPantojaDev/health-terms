export default function TermSkeleton({ count = 1 }) {
    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="skeleton-card" />
            ))}
        </>
    );
}