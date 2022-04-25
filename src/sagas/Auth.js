import {all, call, fork, put, takeEvery,takeLatest,spawn} from "redux-saga/effects";
import {
    auth,
    facebookAuthProvider,
    githubAuthProvider,
    googleAuthProvider,
    twitterAuthProvider
} from "../firebase/firebase";
import {
    SIGNIN_FACEBOOK_USER,
    SIGNIN_GITHUB_USER,
    SIGNIN_GOOGLE_USER,
    SIGNIN_TWITTER_USER,
    SIGNIN_USER,
    SIGNOUT_USER,
    SIGNUP_USER
} from "constants/ActionTypes";
import {showAuthMessage, userSignInSuccess, userSignOutSuccess, userSignUpSuccess} from "actions/Auth";
import {
    userFacebookSignInSuccess,
    userGithubSignInSuccess,
    userGoogleSignInSuccess,
    userTwitterSignInSuccess
} from "../actions/Auth";
import {
    postRequest,
    getErrorRequest
} from '../util/apiFetch';

const createUserWithEmailPasswordRequest = async (email, password) =>
    await auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => authUser)
        .catch(error => error);


export function* signInUserWithEmailPasswordRequest(user, password){
    /*await auth.signInWithEmailAndPassword(email, password)
        .then(authUser => authUser)
        .catch(error => error);*/
}

const signOutRequest = async () =>
    await auth.signOut()
        .then(authUser => authUser)
        .catch(error => error);


const signInUserWithGoogleRequest = async () =>
    await auth.signInWithPopup(googleAuthProvider)
        .then(authUser => authUser)
        .catch(error => error);

const signInUserWithFacebookRequest = async () =>
    await auth.signInWithPopup(facebookAuthProvider)
        .then(authUser => authUser)
        .catch(error => error);

const signInUserWithGithubRequest = async () =>
    await auth.signInWithPopup(githubAuthProvider)
        .then(authUser => authUser)
        .catch(error => error);

const signInUserWithTwitterRequest = async () =>
    await auth.signInWithPopup(twitterAuthProvider)
        .then(authUser => authUser)
        .catch(error => error);

function* createUserWithEmailPassword({payload}) {
    const {email, password} = payload;
    try {
        const signUpUser = yield call(createUserWithEmailPasswordRequest, email, password);
        if (signUpUser.message) {
            yield put(showAuthMessage(signUpUser.message));
        } else {
            localStorage.setItem('user_id', signUpUser.user.uid);
            yield put(userSignUpSuccess(signUpUser.user.uid));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

function* signInUserWithGoogle() {
    try {
        const signUpUser = yield call(signInUserWithGoogleRequest);
        if (signUpUser.message) {
            yield put(showAuthMessage(signUpUser.message));
        } else {
            localStorage.setItem('user_id', signUpUser.user.uid);
            yield put(userGoogleSignInSuccess(signUpUser.user.uid));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}


function* signInUserWithFacebook() {
    try {
        const signUpUser = yield call(signInUserWithFacebookRequest);
        if (signUpUser.message) {
            yield put(showAuthMessage(signUpUser.message));
        } else {
            localStorage.setItem('user_id', signUpUser.user.uid);
            yield put(userFacebookSignInSuccess(signUpUser.user.uid));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}


function* signInUserWithGithub() {
    try {
        const signUpUser = yield call(signInUserWithGithubRequest);
        if (signUpUser.message) {
            yield put(showAuthMessage(signUpUser.message));
        } else {
            localStorage.setItem('user_id', signUpUser.user.uid);
            yield put(userGithubSignInSuccess(signUpUser.user.uid));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}


function* signInUserWithTwitter() {
    try {
        const signUpUser = yield call(signInUserWithTwitterRequest);
        if (signUpUser.message) {
            if (signUpUser.message.length > 100) {
                yield put(showAuthMessage('Your request has been canceled.'));
            } else {
                yield put(showAuthMessage(signUpUser.message));
            }
        } else {
            localStorage.setItem('user_id', signUpUser.user.uid);
            yield put(userTwitterSignInSuccess(signUpUser.user.uid));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

function* signInUserWithEmailPassword({payload}) {
    const {email, password} = payload;
    const requestURL = `token`;
    const payloadObj={
        usuario:email,
        password:password
    };
    const response= yield call(postRequest,requestURL,payloadObj);
    const { error, message } =yield call(getErrorRequest,response);
    if(error){
        yield put(showAuthMessage(message));
    }else{
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
        localStorage.setItem('user_id', obj.usuario.id);
        localStorage.setItem('userSession', JSON.stringify(obj));
        yield put(userSignInSuccess(obj.usuario.id));
    }
}

function* signOut() {
    try {
        const signOutUser = yield call(signOutRequest);
        if (signOutUser === undefined) {
            localStorage.removeItem('user_id');
            localStorage.removeItem('userSession');
            yield put(userSignOutSuccess(signOutUser));
        } else {
            yield put(showAuthMessage(signOutUser.message));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

export function* createUserAccount() {
    yield takeEvery(SIGNUP_USER, createUserWithEmailPassword);
}

export function* signInWithGoogle() {
    yield takeEvery(SIGNIN_GOOGLE_USER, signInUserWithGoogle);
}

export function* signInWithFacebook() {
    yield takeEvery(SIGNIN_FACEBOOK_USER, signInUserWithFacebook);
}

export function* signInWithTwitter() {
    yield takeEvery(SIGNIN_TWITTER_USER, signInUserWithTwitter);
}

export function* signInWithGithub() {
    yield takeEvery(SIGNIN_GITHUB_USER, signInUserWithGithub);
}

export function* signInUser() {
    yield takeLatest(SIGNIN_USER, signInUserWithEmailPassword);
}

export function* signOutUser() {
    yield takeEvery(SIGNOUT_USER, signOut);
}

export default function* rootSaga() {
    yield spawn(signInUser);
    yield spawn(createUserAccount);
    yield spawn(signInWithGoogle);
    yield spawn(signInWithFacebook);
    yield spawn(signInWithTwitter);
    yield spawn(signInWithGithub);
    yield spawn(signOutUser);
    /*yield all([fork(signInUser),
        fork(createUserAccount),
        fork(signInWithGoogle),
        fork(signInWithFacebook),
        fork(signInWithTwitter),
        fork(signInWithGithub),
        fork(signOutUser)]);*/
}