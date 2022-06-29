import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Create() {
    const validationSchema = yup.object({
        ten: yup.string().required("Ten is required"),
        mo_ta: yup.string().required("Mo ta is required"),
    });

    const formik = useFormik({
        initialValues: {
            ten: "",
            mo_ta: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            Inertia.post(route("admin.product.store"), values, {
                onError: (errors) => {
                    //formik.setFieldError("ten", errors.ten);
                    formik.setErrors(errors);
                },
            });
        },
    });

    const { errors } = usePage().props;

    return (
        <AdminLayout>
            {errors.ten}
            <div className="w-screen h-screen bg-purple-700 flex justify-center items-center">
                <form
                    onSubmit={formik.handleSubmit}
                    className="p-10 bg-white rounded-lg drop-shadow-lg space-y-4"
                    action=""
                >
                    <h1 className="text-xl font-light">Create new product</h1>

                    <div className="flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="ten"
                            onChange={formik.handleChange}
                            value={formik.values.ten}
                            id="ten"
                            className="peer border border-slate-400"
                        />
                        {formik.touched.ten && Boolean(formik.errors.ten) && (
                            <p className=" text-red-700 font-light">
                                {formik.errors.ten}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message">Mo ta</label>
                        <textarea
                            name="mo_ta"
                            id="mo_ta"
                            cols="30"
                            rows="3"
                            onChange={formik.handleChange}
                            value={formik.values.mo_ta}
                            className="peer border border-slate-400"
                        ></textarea>
                        {formik.touched.mo_ta &&
                            Boolean(formik.errors.mo_ta) && (
                                <p className="text-red-700 font-light">
                                    {formik.errors.mo_ta}
                                </p>
                            )}
                    </div>
                    <button type="submit" className="px-5 py-1 bg-amber-500">
                        Create
                    </button>
                </form>
            </div>
        </AdminLayout>
    );
}
