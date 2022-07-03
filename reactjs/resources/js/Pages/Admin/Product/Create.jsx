import { Inertia } from "@inertiajs/inertia";
//import { usePage } from "@inertiajs/inertia-react";
// import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { useFormik } from "formik";
import * as yup from "yup";
import AdminLayout from "@/Layouts/AdminLayout";
import Label from "@/Components/Form/Label";
import InputText from "@/Components/Form/InputText";
import EditorTiny from "@/Components/Form/EditorTiny";
import LabelRequired from "@/Components/Form/LabelRequired";
import Button from "@/Components/Form/Button";
import { useState } from "react";
import Upload from "@/Components/Form/Upload";

export default function Create() {
    //const { errors } = usePage().props;
    const [processing, setProcessing] = useState(false);

    const validationSchema = yup.object({
        ten: yup.string().required(),
        mo_ta: yup.string().required(),
    });
    const formik = useFormik({
        initialValues: {
            ten: "",
            mo_ta: "",
            hinh_anh: null,
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            alert(JSON.stringify(values, null, 2));
            // setProcessing(true);
            // Inertia.post(route("admin.product.store"), values, {
            //     onError: (errors) => {
            //         actions.setErrors(errors);
            //     },
            //     onSuccess: () => {
            //         setProcessing(false);
            //     },
            // });
        },
    });

    return (
        <AdminLayout>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <LabelRequired forInput="ten" value="Ten" />
                    <InputText
                        name="ten"
                        value={formik.values.ten}
                        handleChange={formik.handleChange}
                        className="mt-1 block w-full"
                        isFocused={true}
                        error={formik.errors.ten}
                    />
                </div>
                <div>
                    <Label forInput="mo_ta" value="Mo ta" />
                    <EditorTiny
                        name="mo_ta"
                        value={formik.values.mo_ta}
                        handleChange={formik.handleChange}
                    />
                </div>
                <div>
                    <Label forInput="hinh_anh" value="Hinh anh" />
                    <Upload
                        name="hinh_anh"
                        value={formik.values.hinh_anh}
                        handleChange={formik.handleChange}
                    />
                </div>
                <div>
                    <Button processing={processing}>Submit</Button>
                </div>
            </form>
        </AdminLayout>
    );
}
