import { MdKeyboardArrowDown } from "react-icons/md";

interface iUser {
  name: string;
}

export default function InfoUser() {
  const user: iUser = {
    name: "diego Delli Colli Ramos",
  };

  return (
    <div className="flex justify-between items-center min-w-40 max-w-64">
      <span className="flex items-center justify-center bg-state-500-opacity rounded-full w-8 h-8">
        <p className="uppercase text-gray-200 font-semibold text-x1">
          {user.name[0]}
        </p>
      </span>
      <h3 className="text-gray-200 capitalize px-3">{user.name}</h3>
      <MdKeyboardArrowDown className=" w-5 h-5 text-gray-200" />
    </div>
  );
}
