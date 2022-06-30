import React from "react";
import { Link } from "@inertiajs/inertia-react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Index() {
    const pt = React.useRef(null);
    const ptt = document.getElementById("ptt");
    const [ps, setPs] = React.useState("");
    const handleClick = () => {
        //setPs(pt.current.value);
        //alert(pt.current);
        console.log(pt.current);
        console.log(ptt);
        pt.current.innerHTML = "11111111111111";
        pt.current.style.color = "blue";
        ptt.innerHTML = "22222222222";
        ptt.style.color = "red";
    };
    return (
        <AdminLayout>
            <h3>Product List</h3>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <Link
                    href={route("admin.product.create")}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Create Product
                </Link>
            </div>
            <div>
                <p ref={pt}>Day la the p 1</p>
                <p id="ptt">Day la the p 2</p>
                <button onClick={handleClick}>click</button>
                <p>{ps}</p>
            </div>
        </AdminLayout>
    );
}
