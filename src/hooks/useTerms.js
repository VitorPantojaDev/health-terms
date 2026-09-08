import { useState, useEffect } from 'react';
import { fetchBffTerms, fetchOwnApiTerms } from '../services/termsService';
function useTerms() {
    const [terms, setTerms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
 
    useEffect(() => {
        async function loadTerms() {
          try {
            const results = await Promise.allSettled([
                fetchBffTerms(),
                fetchOwnApiTerms(),
            ]);
            const combined = results
                .filter((r) => r.status === 'fulfilled')
                .flatMap((r) => r.value);
                setTerms(combined);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        loadTerms();
    }, []);
    
    return { terms, loading, error };
}

export default useTerms;
