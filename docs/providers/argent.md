# Login with Argent

1. Install Provider Package

```bash
npm install --save @argent/login
# OR
yarn add @argent/login
```

2. Set Provider Options

```typescript
import ArgentLogin from "@argent/login";

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
