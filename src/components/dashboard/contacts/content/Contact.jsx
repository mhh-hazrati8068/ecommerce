import React from "react";
import { useDeleteContactMutation } from "../../../../future/dashboard/contacts/contactSlice";

function Contact({ name, email, phone, body, _id }) {
  const [deleteContact] = useDeleteContactMutation();

  const deleteHandler = (id) => {
    deleteContact(id);
  };

  return (
    <tr className="even:bg-[#F6F8FA]">
      <td className="py-2 px-4">{name}</td>
      <td className="py-2 px-4">{email}</td>
      <td className="py-2 px-4">{phone}</td>
      <td className="py-2 px-4">{body}</td>
      <td className="text-sm flex items-center justify-center gap-3 py-2 px-4">
        <button
          className="border border-btn-red text-btn-red hover:text-white hover:bg-btn-red rounded-md px-1.5 py-0.5 duration-150"
          value={_id}
          onClick={(e) => deleteHandler(e.target.value)}
        >
          حذف
        </button>
      </td>
    </tr>
  );
}

export default Contact;
