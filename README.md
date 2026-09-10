# @kamve/react-buttons

A personal React button component library with custom branding and colors.

## Install

```bash
npm install @kamve/react-buttons
```

Requires `react`, `@types/react`, and `framer-motion` as peer dependencies.

## Usage

```tsx
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

## License

ISC
