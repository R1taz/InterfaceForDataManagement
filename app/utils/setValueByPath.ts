export function setValueByPath(
  obj: Record<string, unknown>,
  path: string,
  value: unknown,
): Record<string, unknown> {
  const keys = path.split('.');
  const lastKey = keys.pop();
  const nested = keys.reduce((acc, key) => {
    if (typeof acc[key] !== 'object' || acc[key] === null) acc[key] = {};
    return acc[key] as Record<string, unknown>;
  }, obj);
  if (lastKey) (nested as Record<string, unknown>)[lastKey] = value;
  return obj;
}
