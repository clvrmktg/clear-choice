SASS Project Structure Guide

A scalable, maintainable, and modular structure for SASS projects.
This structure follows best practices inspired by 7-1 Pattern, SMACSS, and BEM.

📂 Folder Structure

📂 assets/
 ├── 📂 styles/
 │    ├── 📂 abstracts/      # (Variables, Mixins, Functions, Placeholders)
 │    │    ├── _variables.sass
 │    │    ├── _mixins.sass
 │    │    ├── _functions.sass
 │    │    ├── _placeholders.sass
 │    │    ├── _config.sass
 │    │    └── _index.sass
 │    │
 │    ├── 📂 base/           # (Global styles, Typography, Resets)
 │    │    ├── _reset.sass
 │    │    ├── _typography.sass
 │    │    ├── _base.sass
 │    │    ├── _animations.sass
 │    │    ├── _utilities.sass
 │    │    └── _index.sass
 │    │
 │    ├── 📂 components/     # (Buttons, Cards, Forms, Navbars, etc.)
 │    │    ├── _buttons.sass
 │    │    ├── _cards.sass
 │    │    ├── _forms.sass
 │    │    ├── _navbar.sass
 │    │    ├── _badges.sass
 │    │    ├── _modals.sass
 │    │    ├── _tooltips.sass
 │    │    └── _index.sass
 │    │
 │    ├── 📂 layout/         # (Header, Footer, Sidebar, Grid)
 │    │    ├── _header.sass
 │    │    ├── _footer.sass
 │    │    ├── _sidebar.sass
 │    │    ├── _grid.sass
 │    │    ├── _forms.sass
 │    │    └── _index.sass
 │    │
 │    ├── 📂 pages/          # (Page-Specific Styles)
 │    │    ├── _home.sass
 │    │    ├── _about.sass
 │    │    ├── _contact.sass
 │    │    ├── _blog.sass
 │    │    └── _index.sass
 │    │
 │    ├── 📂 themes/         # (Light, Dark, Custom Themes)
 │    │    ├── _light.sass
 │    │    ├── _dark.sass
 │    │    ├── _custom.sass
 │    │    └── _index.sass
 │    │
 │    ├── 📂 vendors/        # (Third-party styles like Bootstrap, Tailwind overrides)
 │    │    ├── _bootstrap-overrides.sass
 │    │    ├── _tailwind-overrides.sass
 │    │    ├── _fontawesome.sass
 │    │    └── _index.sass
 │    │
 │    ├── main.sass          # (Main entry file)
 │    └── _index.sass        # (Import all partials)
 │
 ├── 📂 js/
 ├── 📂 images/
 ├── 📂 fonts/
 └── 📂 components/

📌 Folder Breakdown

## 📌 SASS Folder Breakdown

| **Order** | **Folder**       | **Purpose** |
|----------|-----------------|-------------|
| 1️⃣ | `abstracts/`    | 🛠 **Global settings** – Variables, mixins, functions, placeholders |
| 2️⃣ | `vendors/`      | 🎨 **Third-party styles** – Bootstrap, Tailwind, FontAwesome overrides |
| 3️⃣ | `base/`         | 🌍 **Global styles** – Resets, typography, animations, utility classes |
| 4️⃣ | `layout/`       | 📐 **Structural styles** – Header, footer, sidebar, grid, forms |
| 5️⃣ | `components/`   | 🔹 **Reusable UI elements** – Buttons, cards, forms, modals, tooltips |
| 6️⃣ | `pages/`        | 📄 **Page-specific styles** – Home, about, blog, contact, etc. |
| 7️⃣ | `themes/`       | 🎨 **Custom themes** – Light mode, dark mode, custom styles |

---

## 📌 Import Order in `_index.sass`
To maintain consistency, import them in the following order:
```sass
@import abstracts/index
@import vendors/index
@import base/index
@import layout/index
@import components/index
@import pages/index
@import themes/index
```

📂 Folder	📌 Purpose

abstracts/	Stores global variables, mixins, functions, and placeholders.
base/	Contains resets, typography, animations, and utility classes.
components/	Holds reusable UI elements (buttons, cards, modals, tooltips).
layout/	Defines structural styles (header, footer, sidebar, grid).
pages/	Styles specific to individual pages (home, about, blog).
themes/	Stores light, dark, and custom theme styles.
vendors/	Holds third-party overrides (Bootstrap, Tailwind, FontAwesome).