import { useRef } from "react";

import { Editor } from "@tinymce/tinymce-react";

const EditorTiny = ({ value, handleChange, name }) => {
    const editorRef = useRef(null);
    return (
        <div className="flex flex-col items-start">
            <Editor
                onEditorChange={(e) => {
                    handleChange({ target: { name: name, value: e } });
                }}
                value={value}
                tinymceScriptSrc="/vendor/tinymce/tinymce.min.js"
                onInit={(evt, editor) => (editorRef.current = editor)}
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
                    file_picker_callback: function (callback, value, meta) {
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
                        // let cmsURL =
                        //     "http://localhost:8000/laravel-filemanager?field_name=" +
                        //     meta.fieldname;

                        // if (meta.filetype == "image") {
                        //     cmsURL = cmsURL + "&type=Images";
                        // } else {
                        //     cmsURL = cmsURL + "&type=Files";
                        // }
                        editorRef.current.windowManager.openUrl({
                            url: "/file-manager/tinymce5",
                            title: "Laravel File manager",
                            width: x * 0.8,
                            height: y * 0.8,
                            onMessage: (api, message) => {
                                callback(message.content, {
                                    text: message.text,
                                });
                            },
                        });
                    },
                }}
            />
        </div>
    );
};

export default EditorTiny;
