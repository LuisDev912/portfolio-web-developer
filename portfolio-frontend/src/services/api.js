const API_URL = 'http://localhost:3001/api'; // Having hard coded APIs is not a good practice. This will be changed

export async function getProjects() {
    const res = await fetch(`${API_URL}/projects`);

    if (!res.ok) {
        throw new Error('Failed to fetch projects');
    }

    return res.json();
};

export async function getFeatured() {
    const res = await fetch(`${API_URL}/projects?featured=true`);

    if (!res.ok) throw new Error('Failed to fetch featured projects');
    
    return res.json();
};

// --- courses ---

export async function getCourses() {
    const res = await fetch(`${API_URL}/learning`);

    if (!res.ok) {
        throw new Error('Failed to fetch learning');
    }

    return res.json();
};