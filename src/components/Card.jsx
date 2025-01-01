/* eslint-disable react/prop-types */
// import chat from "../assets/chat.jpg";

const Card = ({ data }) => {
  return (
    <div className="bg-slate-200 p-4  rounded-md">
      <div>
        <img
          src={data.image}
          alt=""
          className="w-72 h-44 border-2 rounded-sm border-violet-400"
        />
      </div>
      <div>
        <p className="text-xl font-bold my-2">{data.application}</p>
        <div className="my-2 mx-4 flex justify-center flex-wrap gap-2">
          {/* <button className="bg-white px-6 border-2 border-violet-400 hover:bg-violet-800 hover:text-white  rounded-md py-2  ">
            Github
          </button>
          <button className="bg-violet-800 text-white  px-2 border-2 border-violet-400 hover:bg-white hover:text-black  rounded-md py-2 ">
            Live Demo
          </button> */}
          {data.git && (
            <a href={data.git} target="_blank" rel="noopener noreferrer">
              <button className="bg-white px-6 border-2 border-violet-400 hover:bg-violet-800 hover:text-white rounded-md py-2">
                Github
              </button>
            </a>
          )}
          {data.live && (
            <a href={data.live} target="_blank" rel="noopener noreferrer">
              <button className="bg-violet-800 text-white px-2 border-2 border-violet-400 hover:bg-white hover:text-black rounded-md py-2">
                Live Demo
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
