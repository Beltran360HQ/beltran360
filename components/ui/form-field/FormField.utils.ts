export function buildAriaDescribedBy(
  descriptionId: string,
  errorId: string,
  hasDescription: boolean,
  hasError: boolean
): string | undefined {
  const ids: string[] = [];

  if (hasDescription) {
    ids.push(descriptionId);
  }

  if (hasError) {
    ids.push(errorId);
  }

  return ids.length > 0 ? ids.join(" ") : undefined;
}