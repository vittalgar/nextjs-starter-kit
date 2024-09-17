import RegisterForm from "@/components/Forms/RegisterForm";
import React from "react";

export default function page() {
  return (
    <section>
      <div className="md:container px-4 md:px-0">
        <div className="border-gray-200 dark:border-gray-700 max-w-xl mx-auto border my-3 shadow rounded-md ">
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}
