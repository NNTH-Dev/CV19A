import CamelcaseKeys from 'camelcase-keys';
import SnakecaseKeys from 'snakecase-keys';

export const toCamel = <T>(data: T): T => {
  return CamelcaseKeys(data, { exclude: [/-/], deep: true }) as T;
};

export const toSnake = <T>(data: T): T | string => {
  if (typeof data === 'string') {
    return Object.keys(SnakecaseKeys({ [data]: null }))[0];
  }
  return SnakecaseKeys(data, { deep: true }) as T;
};
