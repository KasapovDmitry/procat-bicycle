import * as UserActionCreators from './user'
import * as CaseActionCreators from './case'
import * as RegistrActionCreators from './reg'
import * as AuthActionCreators from './auth'


export default {
    ...UserActionCreators,
    ...CaseActionCreators,
    ...RegistrActionCreators,
    ...AuthActionCreators,
}