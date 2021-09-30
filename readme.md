### Slipper 👟

A document generator for [Brixtol Textiles](https://brixtoltextiles.com). Slipper generates document sheets that can be printed by parsing query parameters from the window location.

> Slipper is for internal use.

### Installation

All dependencies are included with the `package.json` file. There are 3 CLI commands.

| Command       | Operation                                           |
| ------------- | --------------------------------------------------- |
| `pnpm dev`    | Runs development from `dist`                        |
| `pnpm strip`  | Minifies the Liquid return slip URL                 |
| `pnpm build`  | Builds into `dist` for production                   |
| `pnpm upload` | Pushes the `dist` directory to the gh-pages branch. |

### Documents

Slipper handles document sheets for the following

| URL                 | Operation                           |
| ------------------- | ----------------------------------- |
| `/returns?key=value` | Creates Rewaxing slip               |

### Github Pages Branch

Push `dist` directory to the `gh-pages` branch when updates are made.

```
git subtree push --prefix dist origin gh-pages
```
