# Login with Argent

1. Install Provider Package

```bash
npm install --save @argent-connect/core
# OR
yarn add @argent-connect/core
```

2. Set Provider Options

```typescript
import * as ArgentLogin from "@argent-connect/core";

const providerOptions = {
  argent: {
    package: ArgentLogin,
    options: {
      chainId: 280,
      rpcUrl: "https://zksync2-testnet.zksync.dev",
    }
  }
};
```
