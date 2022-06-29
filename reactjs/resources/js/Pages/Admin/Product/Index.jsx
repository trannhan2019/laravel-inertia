import React from "react";
import { Link } from "@inertiajs/inertia-react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Index() {
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
        </AdminLayout>
    );
}
