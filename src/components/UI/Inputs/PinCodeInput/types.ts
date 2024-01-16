import React from 'react';
import { FormikErrors } from 'formik';

export interface IPinCodeInputProps {
    digits: string[];
    validateForm: () => void;
    changeHandler: (
        values: React.SetStateAction<string[]>,
        shouldValidate?: boolean
    ) => Promise<any>;
    errors: FormikErrors<{ code: string }>;
}
