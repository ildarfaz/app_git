import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

export const errorMessage = (error: FetchBaseQueryError | SerializedError | undefined) => {
    if (error) {
        if ('status' in error) {
            // error is FetchBaseQueryError
            const errMsg = 'error' in error ? error.error : JSON.stringify(error.data);
            return `Something went wrong: ${errMsg}`
        } else {
            // error is SerializedError
            return `Something went wrong: ${error.message}`
        }
    }
};