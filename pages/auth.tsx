import React from "react";
import { AuthForm } from "@/components/auth-page/auth-form";
import { FormLayout } from "@/components/auth-page/form-layout";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

const Auth = () => {
    return (
        <FormLayout>
            <AuthForm />
        </FormLayout>
    );
};

export const getServerSideProps = async (context: NextPageContext) => {
    const session = await getSession(context);
    if (session) {
        return {
            redirect: {
                destination: '/profiles',
                permanent: false,
            },
        };
    }
    return {
        props: {},
    };
};

export default React.memo(Auth);