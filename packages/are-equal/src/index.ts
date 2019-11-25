export const areEqualArrays = (arrA: any[], arrB: any[]): boolean => {
  if (arrA === arrB) return true
  if (arrA.length !== arrB.length) return false

  let i = 0
  for (; i < arrA.length; i++) if (arrA[i] !== arrB[i]) return false
  return true
}

export const areEqualObjects = (objA: {}, objB: {}): boolean => {
  if (objA === objB) return true
  const keysA = Object.keys(objA)
  if (keysA.length !== Object.keys(objB).length) return false

  let i = 0
  for (; i < keysA.length; i++)
    if (objA[keysA[i]] !== objB[keysA[i]]) return false
  return true
}

export const areEqual = (objA: {} | any[], objB: {} | any[]): boolean =>
  // @ts-ignore
  (Array.isArray(objA) === true ? areEqualArrays : areEqualObjects)(objA, objB)

export default areEqual
