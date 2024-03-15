import { InfoModalProvider } from '@/context/info-modal-context';
import { IParentProps } from '@/types/component-props';

export default async function ProtectedLayout({
    children
}: IParentProps) {

    return (
        <InfoModalProvider>
            {children}
        </InfoModalProvider>
    );
}
