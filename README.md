# @kamvedev/react-buttons

My personal React button component library with custom branding and colors.

## Install

```bash
npm install @kamvedev/react-buttons
```

- Requires `react` and `@types/react`as peer dependencies.
- Requires dependency versions `react/react-dom ^19.3.0`

## API Usage

Import the stylesheet once (e.g. in your app's entry point), then use the components:

```tsx
import "@kamvedev/react-buttons/dist/index.css";
import { SaveButton } from "@kamvedev/react-buttons";

function Example() {
    return (
        <SaveButton 
            text="Save" 
            onClick={() => console.log("saved")} 
        />
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

Components are styled with plain CSS — no Tailwind required.

Without these variables defined, the components still render (browsers treat
an undefined `var()` with no fallback as its initial/inherited value), just
without the brand colors.

## License
ISC