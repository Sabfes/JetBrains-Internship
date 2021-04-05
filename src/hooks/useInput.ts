import {ChangeEvent, useState} from "react";
import {useValidation} from "./useValidation";

export const useInput = (initialValue: any, validations: any) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        setDirty(true)
    }

    const clearValue = () => {
        setValue('')
        setDirty(false)
    }

    const onBlur = (e: any) => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid,
        clearValue,
    }
}
