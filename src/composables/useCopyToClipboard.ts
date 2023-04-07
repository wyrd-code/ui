export function useCopyToClipboard() {
  function copyToClipboard(content: string) {
    navigator.clipboard.writeText(content)
  }

  return {
    copyToClipboard,
  }
}
