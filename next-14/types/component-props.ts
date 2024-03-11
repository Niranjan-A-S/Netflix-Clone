export interface IInputProps {
    id: string;
    onChange: any;
    value: string;
    label: string;
    type?: string;
};

export interface IParentProps {
    children: React.ReactNode;
}
