import Manipulate from ''

const usersById = {
  ltm: {
    name: 'Luke Millar',
    isAdmin: true,
    followers: 2496
  },
  dshankar: {
    name: 'Darshan Shankar',
    isAdmin: true,
    followers: 8472
  },
  jazzychad: {
    name: 'Chad Etzel',
    isAdmin: false,
    followers: 4759
  }
}

test('Manipulate.value', () => {
  expect(Manipulate(usersById).value()).toBe(usersById)
})

test('Manipulate.map', () => {
  expect(
    Manipulate(usersById)
      .map(({ value: user }) => user.name)
      .value()
  ).toEqual({ ltm: 'Luke Millar', dshankar: 'Darshan Shankar', jazzychad: 'Chad Etzel' })
})

test('Manipulate.filter', () => {
  expect(
    Manipulate(usersById)
      .filter(({ value: user }) => user.isAdmin)
      .value()
  ).toEqual({
    ltm: {
      name: 'Luke Millar',
      isAdmin: true,
      followers: 2496
    },
    dshankar: {
      name: 'Darshan Shankar',
      isAdmin: true,
      followers: 8472
    }
  })
})

test('Manipulate.reduce', () => {
  expect(
    Manipulate(usersById)
      .reduce((totalFollowers, { value: user }) => totalFollowers + user.followers, 0)
      .value()
  ).toEqual(15727)
})

test('Manipulate combination', () => {
  expect(
    Manipulate(usersById)
      .filter(({ value }) => value.isAdmin)
      .map(({ value }) => value.followers)
      .reduce((totalFollowers, { value: followers }) => totalFollowers + followers, 0)
      .value()
  ).toEqual(10968)
})
