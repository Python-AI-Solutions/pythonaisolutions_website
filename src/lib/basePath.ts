export const basePath = ''

export function getBasePath() {
  return basePath
}

export function getAssetPath(path: string) {
  const basePath = getBasePath()
  // Ensure the path starts with a slash and encode any spaces or special characters
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${cleanPath}`
}
