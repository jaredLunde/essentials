export declare const areEqualArrays: <A extends any[], B extends any[]>(
  arrA: A,
  arrB: A | B
) => boolean
export declare const areEqualObjects: <
  A extends Record<any, any>,
  B extends Record<any, any>
>(
  objA: A,
  objB: A | B
) => boolean
export declare const areEqual: <
  A extends any[] | Record<any, any>,
  B extends any[] | Record<any, any>
>(
  objA: A,
  objB: A | B
) => boolean
export default areEqual
