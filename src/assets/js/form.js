import { SHA256 } from "crypto-js";

export function clearFormInput(form, index) {
    return form[index].value.trim().replace("'","\\'");
}

export function clearFormPassword(form, index) {
    return SHA256(form[index].value.trim().replace("'","\\'")).toString();
}