import { Iterable } from ''

test('Iterable.value', () => {
  const a = { b: 1 }
  expect(Iterable(a).value()).toBe(a)
})

test('Iterable.map', () => {
  const obj = { a: 1, b: 2, c: 2, d: 3 }
  expect(
    Iterable(obj)
      .map(({ value }) => value + 1)
      .value()
  ).toEqual({ a: 2, b: 3, c: 3, d: 4 })
  expect(
    Iterable(obj)
      .map(({ value }) => value + 1)
      .map(({ key, value }) => `${key}-${value}`)
      .value()
  ).toEqual({ a: 'a-2', b: 'b-3', c: 'c-3', d: 'd-4' })
})

test('Iterable.filter', () => {
  const obj = { a: 1, b: 2, c: 2, d: 3 }
  expect(
    Iterable(obj)
      .filter(({ value }) => value === 2)
      .value()
  ).toEqual({ b: 2, c: 2 })
  expect(
    Iterable(obj)
      .filter(({ key }) => key === 'a')
      .value()
  ).toEqual({ a: 1 })
})

test('Iterable combination', () => {
  const obj = { int1: 1, int2: 2, int3: 2, int4: 3, str1: 'a', str2: 'b', str3: 'c' }
  expect(
    Iterable(obj)
      .filter(({ key }) => key.startsWith('int'))
      .map(({ value }) => value + 1)
      .reduce((result, entry) => result + entry.value, 0)
      .value()
  ).toEqual(12)
})
