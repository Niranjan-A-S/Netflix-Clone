import React from "react";
import { AuthForm } from "@/components/auth-page/auth-form";
import { FormLayout } from "@/components/auth-page/form-layout";

const Auth = () => {
    return (
        <FormLayout>
            <AuthForm />
        </FormLayout>
    );
};

export default React.memo(Auth);