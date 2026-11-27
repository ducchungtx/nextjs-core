'use client';
import App from '@/App';
import React, { ReactNode, Suspense } from 'react';
import Loading from '@/components/layouts/loading';

interface IProps {
    children?: ReactNode;
}

const ProviderComponent = ({ children }: IProps) => {
    return (
        <Suspense fallback={<Loading />}>
            <App>{children}</App>
        </Suspense>
    );
};

export default ProviderComponent;
// todo
// export default appWithI18Next(ProviderComponent, ni18nConfig);
