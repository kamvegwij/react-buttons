# @kamve/react-buttons

A personal React button component library with custom branding and colors.

## Install

```bash
npm install @kamvedev/react-buttons
```

Requires `react` and `@types/react`as peer dependencies.

## Usage

Import the stylesheet once (e.g. in your app's entry point), then use the components:

```tsx
import "@kamve/react-buttons/dist/index.css";
import { SaveButton, PinButton } from "@kamve/react-buttons";

function Example() {
    return (
        <SaveButton text="Save" onClick={() => console.log("saved")} />
    );
}
```

## Components

- `SaveButton`
- `CancelButton`
- `MediaButton`
- `FillableButton`
- `ActionButton`
- `NavigationButton`
- `PinButton`

All components accept the shared `ButtonProps`:

```ts
interface ButtonProps {
    disabled?: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    title?: string;
    text?: string;
    icon?: React.ReactNode;
    isFill?: boolean;
    active?: boolean;
}
```

## Styling

Components are styled with plain CSS (`dist/index.css`, built from
`src/styles/buttons.style.css`) — no Tailwind required.

Without these variables defined, the components still render (browsers treat
an undefined `var()` with no fallback as its initial/inherited value), just
without the brand colors.

## License

ISC
