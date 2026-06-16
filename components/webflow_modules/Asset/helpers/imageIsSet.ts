export const imageIsSet = (image: string | undefined): boolean =>
  image != null && image.trim() !== "";
