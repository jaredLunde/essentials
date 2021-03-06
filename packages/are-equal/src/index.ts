export const areEqualArrays = <A extends any[], B extends any[]>(
  arrA: A,
  arrB: B | A
): boolean => {
  if (arrA === arrB) return true
  if (arrA.length !== arrB.length) return false

  let i = 0
  for (; i < arrA.length; i++) if (arrA[i] !== arrB[i]) return false
  return true
}

export const areEqualObjects = <
  A extends Record<any, any>,
  B extends Record<any, any>
>(
  objA: A,
  objB: B | A
): boolean => {
  if (objA === objB) return true
  const keysA = Object.keys(objA)
  if (keysA.length !== Object.keys(objB).length) return false

  let i = 0
  for (; i < keysA.length; i++)
    if (objA[keysA[i]] !== objB[keysA[i]]) return false
  return true
}

export const areEqual = <
  A extends Record<any, any> | any[],
  B extends Record<any, any> | any[]
>(
  objA: A,
  objB: B | A
): boolean =>
  // @ts-ignore
  (Array.isArray(objA) === true ? areEqualArrays : areEqualObjects)(objA, objB)

export default areEqual
