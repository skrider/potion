export type Serializable = string | object | number | boolean | bigint;

export interface AppNode {
  _name: string
  [K: string]: Serializable
}
