// Test API query (dummy or real)
async function askSupport(question) {
    const res = await fetch('/api/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
    });
    const data = await res.json();
    console.log(data.answer);
}

// Example usage:
// askSupport("Explain Newton's first law");
