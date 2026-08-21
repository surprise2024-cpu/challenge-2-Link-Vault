# Vault Link

> Keep your favorite links safe and sound - accessibles from anywhere, not just one browser.

Vault link is a bookmark manager built as a React + TypeScript MVP. Unlike native browser bookmarks, which are tied to a single browser on a single device, Vault Link gives you a dedicated, portable space to save, organize and search the links that matter to you - complete with titles, descriptions and tags.

![Vault Link Home Page](/src/assets/home-page.png)

---

## Features

- **Save links** with a title, URL, optional description, and comma-seperated tags.

- **View all saved links** in a card-based grid.

- **Bookmark / unbookmark** any link to mark it as a favorite.

- **Dedicated Bookmarked view** showing only your starred links.

- **Edit links** in place via a modal, without leaving the page.

- **Delete links** with a confirmation step to prevent accidental removal.

- **Live search** across titles, URLs, descriptions anf tags.

- **Toast notifications** consfirming saves, edits and deletions as they happen.

- **Persistent storage** - all data is saved to `localStorage`, so it survives page refreshes.

---

## Screenshots

### Home Page

![Home Page](/src/assets/home-page.png)

### Bookmarked Page

![Bookmarked Page](/src/assets/bookmarked.png)

### Form Page

![Form Page](/src/assets/form.png)

### Editing a link

![Edit link modal](/src/assets/editModal.png)

## Tech Stack

|  |  |
|---|---|
| React + TypeScript ||
| React Router | Client=side routing |
| CSS modules | plain CSS |
| localStorage | Persistence layer for this MVP |
| Vite | Build tool / dev server |

## Architecture

```
src/
  assets/
  components/
    Alert/
      Alert.module.css
      Alert.tsx
      AlertProvider.tsx
    Body/
      Body.module.css
      Body.tsx
    Button/
      Button.module.css
      Button.tsx
    ConfirmDialog/
      ConfirmDialog.module.css
      ConfigureDialog.tsx
    EditModal/
      EditModal.module.css
      EditModal.tsx
    Footer/
      Footer.module.css
      Footer.tsx
    hooks/
      useBookmarks.tsx
    library/
      storage.tsx
      types.tsx
    Navbar/
      Navber.module.css
      Navabr.css
    Search/
      LinkForm.tsx
      Search.module.css
      Search.tsx
      SearchBar.tsx
    StatsPanel/
      StatsPanel.module.css
      StatsPanel.tsx
    Text/
      Text.module.css
      Text.tsx
  pages/
    Bookmarked.tsx
    FormPage.tsx
    Home.tsx
    LinksPage.module.css
    LinksPage.tsx
  App.css
  App.tsc
  asset-attribution.txt
  ContentContainer.tsx
  index.css
  index.tsx
  main.tsx
.gitignore
eslint.config.js
package-lock.json
package.json
README.md
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.congig.ts
```

**Why this structure** All `localStorage` access is isolated inside `library/storage.tsx`, and every component talks to it exclusively through the `useBookmarks` hook.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/surprise2024-cpu/challenge-2-Link-Vault.git
cd link-vault

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be running at `http://localhost:5173`.

### Building for production

```bash
npm run build
```

---

## Usage

||||

|---|---|---|
| 1. | **Save a link** | Fill in the Title, URL (required), plus optional Description and Tags, then hit **Save Link**. |
| 2. | **Browse your links** | Head to the **Links** page to see every saved bookmark as a card. |
| 3. | **Search** | use the search bar on the Links or Bookmarded page to filter by title, URL, description or tag. |
| 4. | **Bookmark a favorite** | click **Bookmark** on any card to star it; it'll now appear on the **Bookmarkd links** page/ |
| 5. | **Edit** | click **Edit** to opena modal pre-filled with tthe link's current details; make changes and click **Save Changes** |
| 6. | **Delete** | click **Delete**; you'll be asked to confirm before the link is permanently removed.

---

## Roadmap / Future Improvements

- [ ] Replace `localStorage` with a real backend for true cross device access.
- [ ] User accounts and authentication.
- [ ] Drag-and-drop link reordering.
- [ ] Browser extension for one-click saving from any page.
- [ ] Import/export bookmarks as JSON
    

