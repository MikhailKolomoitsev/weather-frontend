export const isEmpty = (objOrArray: any[] | object | string|null) =>
  objOrArray === null || objOrArray === undefined || Object.values(objOrArray).length === 0
