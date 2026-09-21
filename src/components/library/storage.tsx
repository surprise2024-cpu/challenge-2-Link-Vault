import type { Bookmark } from "./types";

// creates a KEY name for localStorage
const KEY = 'vaultlink-bookmarks'

// creates a function that returns an array of bookmarks
export function getBookmarks(): Bookmark[] {
    const raw = localStorage.getItem(KEY); // reads what is stored under vaultlink-bookmarks
    return raw ? JSON.parse(raw) : []; // if the information exists turn it into normal JavaScript objects.
}

// creates a function that receives a bookmark and save
export function saveBookmark(bookmark: Bookmark): Bookmark[] {
    const all = getBookmarks();
    all.push(bookmark);
    localStorage.setItem(KEY, JSON.stringify(all))
    return all;
}

//
export function deleteBookmark(id: string): Bookmark[] {
    const all = getBookmarks().filter(b => b.id !== id);
    localStorage.setItem(KEY, JSON.stringify(all));
    return all;
}

//
export function updateBookmark(id: string, updates: Partial<Bookmark>): Bookmark[] {
    const all = getBookmarks().map(b => (b.id === id ? { ...b, ...updates } : b))
    localStorage.setItem(KEY, JSON.stringify(all))
    return all;
}

//
export function searchBookmarks(query: string): Bookmark[] {

    const all = getBookmarks();
    const lowerQuery = query.trim().toLowerCase()

    if(!lowerQuery) {
        return all
    }

    return all.filter(b => b.title.toLowerCase().includes(lowerQuery) || 
        b.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    )

}