export interface IInputProps {
    id: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
    type: string;
    value: string;
    label: string;
    name: string;
}

export interface IParentProps {
    children: React.ReactNode;
}