/* eslint-disable react/prop-types */
const SkillButton = ({ data }) => {
  return (
    <span className="text-xl border-2 px-2 py-2 text-white rounded-md bg-slate-600 mr-3 mb-3">
      {data}
    </span>
  );
};

export default SkillButton;
