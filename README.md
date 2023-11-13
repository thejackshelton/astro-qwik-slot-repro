This repo is a reproduction of the problem with Qwik's <Slot> component and when children are added in an Astro file.

If we normally try to pass in children of a JSX component in an Astro file, it would be done like this:

inside `MyReactComponent`:

```tsx
import React from "react";

const MyReactComponent = ({ children }) => {
  return <div>{children}</div>;
};

export default MyReactComponent;
```

in `index.astro`

```tsx
---
import MyReactComponent from './MyReactComponent.jsx';
---

<MyReactComponent>
  <h1>Hello, world!</h1>
  <p>This is a paragraph.</p>
</MyReactComponent>
```

If we do the same in Qwik:

```tsx
import { Slot } from "@builder.io/qwik";

export const MyQwikComponent = (props) => {
  return (
    <div {...props}>
      <Slot />
    </div>
  );
};
```

**index.astro**

```
---
import MyQwikComponent from './MyQwikComponent.tsx';
---

<MyQwikComponent>
  <h1>Hello, world!</h1>
  <p>This is a paragraph.</p>
</MyQwikComponent>
```

This causes an error, and will not render anything.
