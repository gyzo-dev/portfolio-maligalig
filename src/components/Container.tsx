import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    className?: string;
    id?: string;
};

function Container({ children, id }: Props) {
    return (
        <section
            id={id}
        >
            {children}
        </section>
    );
}

export default Container;