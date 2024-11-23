import React, {Dispatch, FC, FormEvent, SetStateAction, useCallback, useEffect, useState} from "react";
import {Button, Form, InputGroup} from "react-bootstrap";
import {FaSearch} from "react-icons/fa";
import {debounce} from "lodash";
import './Input.css'

type Props = {
    placeholder?: string
    value?: string
    onChangeCallback?: (value: string) => void | Dispatch<SetStateAction<string>>
    onSubmit: (value: string) => void
    debounced?: boolean
    customClass?: string
}

export const Input: FC<Props> = (
    {
        placeholder,
        value,
        onChangeCallback,
        onSubmit,
        debounced,
        customClass
    }
) => {
    const [valueInternal, setValueInternal] = useState<string>(value ?? '')

    const onChangeCallbackInternal = useCallback((internalVal: string) => {
        onChangeCallback?.(internalVal)
    }, [onChangeCallback])

    const onChangeDebounced = debounce(onChangeCallbackInternal, 500)

    useEffect(() => {
        if (onChangeCallback === undefined || value === valueInternal) {
            return
        }
        if (debounced) {
            onChangeDebounced(valueInternal)
            return
        }
        onChangeCallback(valueInternal)

    }, [debounced, onChangeCallback, onChangeDebounced, value, valueInternal]);

    const handleAddressChangeInternal = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInternal(e.target.value);
    };

    const onSubmitInternal = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(valueInternal)
    }

    return <>
        <Form className={`custom-input ${customClass ??''}`} onSubmit={onSubmitInternal}>
            <InputGroup>
                <Form.Control
                    type="text"
                    placeholder={placeholder}
                    value={valueInternal}
                    onChange={handleAddressChangeInternal}
                />
                <Button variant="primary" type="submit">
                    <FaSearch/> Search
                </Button>
            </InputGroup>
        </Form>
    </>
}