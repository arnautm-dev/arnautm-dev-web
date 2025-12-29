async function includeHeaderFooter() {
    // Calcula el path base segons la profunditat actual
    const pathDepth = window.location.pathname.split('/').filter(p => p).length;
    const basePath = pathDepth > 1 ? '../' : './';
    
    async function fetchAndInsert(path, selector) {
        try {
            const res = await fetch(path);
            if (!res.ok) throw new Error("No s'ha pogut carregar " + path);
            const html = await res.text();
            document.querySelector(selector).innerHTML = html;
        } catch (err) {
            console.error('Error incloent fragment:', err);
        }
    }

    await fetchAndInsert(basePath + 'includes/header.html', '#site-header');
    await fetchAndInsert(basePath + 'includes/footer.html', '#site-footer');
}

// Crida la funció quan el DOM està llest
document.addEventListener('DOMContentLoaded', includeHeaderFooter);