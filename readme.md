### Slipper 👟

A document generator from [Brixtol Textiles](https://brixtoltextiles.com). Slipper generates document sheets that can be printed by integrating paramaters from the `URL` into views.

> Slipper is for internal use only.

### Installation
All dependencies are included with the `package.json` file. There are 3 CLI commands.

|Command| Operation |
|--|--|
| `yarn watch` |  Runs development from `dist`   |
| `yarn build` |  Builds into `dist` for production |
| `yarn icons` |  Creates SVG Sprite from `/src/icons` |
| `yarn upload` |  Pushes the `dist` directory to the gh-pages branch. |

### Documents
Slipper handles document sheets for the following

|URL| Operation |
|--|--|
| `/rewaxing?foo=bar` |  Creates Rewaxing slip  |
| `/korallen?foo=bar` |  Creates Return Slip & Order Receipt |

### Github Pages Branch
Push `dist` directory to the `gh-pages` branch when updates are made.

```
git subtree push --prefix dist origin gh-pages
```
