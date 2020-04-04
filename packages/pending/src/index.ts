/**
 *  A helper function that adds error handling to async/await without having to use try/catch block.
 *
 * @param callback This callback should return a Promise that will be resolved in our try/catch
 * @returns The second element will be undefined if the Promise resolved successfully.
 *   The first argument will be undefined if there was an error resolving the Promise.
 *
 * @example
 *  // returns [true, undefined]
 *  const [value, error] = await pending(() => Promise.resolve(true))
 * @example
 *  // returns [undefined, 'uh oh']
 *  const [value, error] = await pending(() => Promise.reject('uh oh'))
 */
async function pending<
  PromiseReturnType extends any = any,
  ErrorType extends any = Error
>(
  callback: () => Promise<PromiseReturnType>
): Promise<[PromiseReturnType | undefined, ErrorType | undefined]> {
  try {
    return [await callback(), undefined]
  } catch (error) {
    return [undefined, error]
  }
}

export default pending
