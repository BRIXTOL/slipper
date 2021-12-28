### Slipper 👟

A document generator for [Brixtol Textiles](https://brixtoltextiles.com). Slipper generates document sheets that can be printed by parsing query parameters from the window location.

> Slipper is for internal use.

### Installation

All dependencies are included with the `package.json` file. There are 3 CLI commands.

| Command           | Operation                                           |
| ----------------- | --------------------------------------------------- |
| `pnpm dev`        | Rollup watch development mode                       |
| `pnpm serve`      | Starts Netlify localhost                            |
| `pnpm serve:live` | Starts Netlify https                                |
| `pnpm strip`      | Minifies the Liquid return slip URL                 |
| `pnpm build`      | Builds into `dist` for production                   |
| `pnpm upload`     | Pushes the `dist` directory to the gh-pages branch. |

### Documents

Slipper handles document sheets for the following

| URL                  | Operation             |
| -------------------- | --------------------- |
| `/returns?key=value` | Creates Rewaxing slip |

### Stylesheet

<table style="border: none;">
  <tr>
    <td style="width: 35px">
      <a href="{{ line.url }}">
        <img style="width: 100%; height: auto;" src="https://cdn.shopify.com/s/files/1/0638/4637/products/Buster_Black_Navy_Black_Side_compact_cropped.jpg?v=1566548989">
      </a>
    </td>
    <td>
      <a href="{{ line.url }}" class="title pl-2">
        {{ line_title }}
      </a>
      <span class="d-block vendor pt-2 pl-2">
        {{ line_variant }}
      </span>
    </td>
    <td>
      <span class="quantity">
        x{{ line.quantity }}
      </span>
    </td>
  </tr>

</table>
