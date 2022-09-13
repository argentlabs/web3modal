import { IAbstractConnectorOptions } from "../../helpers";
export interface IArgentConnectorOptions extends IAbstractConnectorOptions {
    rpcUrl: string;
    chainId: number;
}
declare const ConnectToArgent: (ArgentLogin: any, opts: IArgentConnectorOptions) => Promise<any>;
export default ConnectToArgent;
//# sourceMappingURL=argent.d.ts.map