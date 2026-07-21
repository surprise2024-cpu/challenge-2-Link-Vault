import type { Bookmark } from "./types";

const KEY = 'vaultlink-bookmarks'

export function getBookmarks(): Bookmark[] {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
}

export function saveBookmark(bookmark: Bookmark): Bookmark[] {
    const all = getBookmarks();
    all.push(bookmark);
    localStorage.setItem(KEY, JSON.stringify(all))
    return all;
}

export function deleteBookmark(id: string): Bookmark[] {
    const all = getBookmarks().filter(b => b.id !== id);
    localStorage.setItem(KEY, JSON.stringify(all));
    return all;
}

export function updateBookmark(id: string, updates: Partial<Bookmark>): Bookmark[] {
    const all = getBookmarks().map(b => (b.id === id ? { ...b, ...updates } : b))
    localStorage.setItem(KEY, JSON.stringify(all))
    return all;
}