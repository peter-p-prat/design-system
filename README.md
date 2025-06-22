# peter-p-prat-design-system

## Development mode

To run the project in storybook to showcase components with hot reload, follow the following steps:

1- Run:

```
yarn storybook
```

## Production/deployment

#### build

To install the library in other projects locally, you must follow the following steps:

1- Run:

```
yarn build
```

2- In the project where you want to use it, install it as local-dependency:

```
yarn add "../relative/route/to/root/design-system"
```

3- Done! You can use it by:

-   In TSX files, importing components from `@peter-p-prat/desing-system` as dependency:

```
import {Button} from "@peter-p-prat/design-system";

<Button label="button" />
```

-   In CSCC files, importing color palette and typography functions and using it in the following way:

```
@import "@peter-p-prat/design-system/dist/assets/colors";
@import "@peter-p-prat/design-system/dist/assets/typography";

.button {
  background-color: colors.palette("primary", 600);
  @include typography.text(xl, bold);
}
```

Enjoy :)
