import { faker } from '@faker-js/faker'

const commentText = `<div>Terdapat ${faker.random.numeric()} komentar dalam artikel ini</div>`

document.querySelector('#list-comments').innerHTML = commentText