import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const login = (user) => (dispatch) => ({
  APIUtil.login(user).then((session) => dispatch(receiveCurrentUser(session)))
})

export const receiveCurrentUser = (session) => ({
  type: RECEIVE_CURRENT_USER,
  session
})

git filter-branch -f --env-filter "GIT_AUTHOR_NAME='John Ballon'; GIT_AUTHOR_EMAIL='ballonj1@tcnj.edu'; GIT_COMMITTER_NAME='John Ballon'; GIT_COMMITTER_EMAIL='ballonj1@tcnj.edu';" HEAD
