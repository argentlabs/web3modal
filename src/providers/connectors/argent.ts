import { IAbstractConnectorOptions } from "../../helpers";

export interface IArgentConnectorOptions extends IAbstractConnectorOptions {
  rpcUrl: string;
  chainId: number;
}

const ConnectToArgent = async (
  ArgentLogin: any,
  opts: IArgentConnectorOptions
) => {
  const provider = ArgentLogin.getEthereumProvider(opts);
  await provider.enable();
  return provider;
};

export default ConnectToArgent;
