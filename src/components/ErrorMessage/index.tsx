import { ReactNode } from "react";

interface ErrorMessageProps {
    message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
    return (
        <span style={{ color: 'red', fontWeight: 'bold', fontStyle: 'italic', fontSize: '12px' }}>{message}</span>
    );
}