import { rest } from 'msw'

let email
let invitation = {
  id: 12,
  invitationUrl: null
}
const companies = [
  { id: 1, name: 'Company 1' },
  { id: 2, name: 'Company 2' },
  { id: 3, name: 'Company 3' },
  { id: 4, name: 'Company 4' },
  { id: 5, name: 'Company 5' },
]

export const handlers = [
  rest.get('/companies', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(companies))
  }),
  rest.get('/users/:id', ({ params }, res, ctx) => {
    if (params.id !== '1') {
      return res(ctx.status(404))
    }
    return res(
      ctx.status(200),
      ctx.json({
        firstName: 'John',
        lastName: 'Smith',
      }),
    )
  }),
  rest.post('/invitations', ({ body }, res, ctx) => {
    email = body.email

    setTimeout(() => {
      invitation.invitationUrl = `https://invitation-link.com/${invitation.id}?email=${email}`
    }, 4000)

    return res(
      ctx.status(200),
      ctx.json(invitation),
    )
  }),
  rest.get('/invitations/:id', ({ params }, res, ctx) => {
    if (params.id !== '12') {
      return res(ctx.status(404))
    }

    return res(
      ctx.status(200),
      ctx.json(invitation),
    )
  })
]
