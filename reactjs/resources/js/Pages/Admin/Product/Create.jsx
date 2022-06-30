import { useRef } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { Editor } from "@tinymce/tinymce-react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Create() {
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef);
        }
    };
    const validationSchema = yup.object({
        ten: yup.string().required("Ten is required"),
        mo_ta: yup.string().required("Mo ta is required"),
    });

    const editorRef = useRef(null);

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
            <button onClick={log}>Log editor content</button>
            <div className="w-max">
                <form
                    onSubmit={formik.handleSubmit}
                    className="p-10 bg-white rounded-lg drop-shadow-lg space-y-4"
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
                        <Editor
                            onEditorChange={formik.handleChange}
                            value={formik.values.mo_ta}
                            tinymceScriptSrc="/vendor/tinymce/tinymce.min.js"
                            onInit={(evt, editor) =>
                                (editorRef.current = editor)
                            }
                            init={{
                                height: 500,
                                path_absolute: "/",
                                plugins: [
                                    "image",
                                    "code",
                                    "table",
                                    "link",
                                    "media",
                                    "codesample",
                                ],
                                toolbar:
                                    "undo redo | formatselect | " +
                                    "bold italic backcolor | alignleft aligncenter " +
                                    "alignright alignjustify | bullist numlist outdent indent | " +
                                    "removeformat | help",
                                content_style:
                                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                                file_picker_callback: function (
                                    callback,
                                    value,
                                    meta
                                ) {
                                    let x =
                                        window.innerWidth ||
                                        document.documentElement.clientWidth ||
                                        document.getElementsByTagName("body")[0]
                                            .clientWidth;
                                    let y =
                                        window.innerHeight ||
                                        document.documentElement.clientHeight ||
                                        document.getElementsByTagName("body")[0]
                                            .clientHeight;
                                    let cmsURL =
                                        "http://localhost:8000/laravel-filemanager?field_name=" +
                                        meta.fieldname;

                                    if (meta.filetype == "image") {
                                        cmsURL = cmsURL + "&type=Images";
                                    } else {
                                        cmsURL = cmsURL + "&type=Files";
                                    }
                                    editorRef.current.windowManager.openUrl({
                                        url: cmsURL,
                                        title: "Filemanager",
                                        width: x * 0.8,
                                        height: y * 0.8,
                                        resizable: "yes",
                                        close_previous: "no",
                                        onMessage: (api, message) => {
                                            callback(message.content);
                                        },
                                    });
                                },
                            }}
                        />
                    </div>
                    {/* <div className="flex flex-col">
                        <label htmlFor="mo_ta">Mo ta</label>
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
                    </div> */}
                    <button type="submit" className="px-5 py-1 bg-amber-500">
                        Create
                    </button>
                </form>
            </div>
        </AdminLayout>
    );
}
