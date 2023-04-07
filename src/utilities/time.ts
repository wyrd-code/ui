export async function delay(
  ms: number,
  callback: (...args: any) => any
): Promise<void> {
  // return await for better async stack trace support in case of errors.
  return await new Promise((resolve) =>
    setTimeout(async () => {
      if (callback) {
        await callback()
      }
      resolve()
    }, ms)
  )
}
