import { useToast } from "native-base";


export const isEmail = (email) => {
    var check = String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    return !!check
};

export const isValidUsername = (username) => {
    var check = String(username)
        .toLowerCase()
        .match(
            /^(?=.{4,20}$)(?![_.])(?!.*[.]{2})[A-Za-z][A-Za-z0-9._-]*$/
        )
    return !!check
}
