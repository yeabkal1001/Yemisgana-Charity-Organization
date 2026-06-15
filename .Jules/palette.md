## 2023-10-27 - Missing Keyboard Navigation Focus States
**Learning:** The navigation menu and mobile overlay completely lacked `focus-visible` states, making them inaccessible for keyboard users to navigate.
**Action:** Applied consistent `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime` classes with appropriate offsets to interactive elements to ensure clear focus indicators.
