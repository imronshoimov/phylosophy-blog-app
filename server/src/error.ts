import { ApolloError } from 'apollo-server-core'

export class MyError extends ApolloError {
  constructor(message: string) {
    super(message, 'MY_ERROR_CODE')
  }
}
