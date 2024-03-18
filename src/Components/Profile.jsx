const Profile = () => {
  return (
    <div className="lg:w-1/2 md:w-1/2 w-full mx-auto flex-col items-center py-16 h-[calc(100vh-5rem)] relative flex">
      <div className="profile w-52 h-52 cursor-pointer bgzinc-300 overflow-hidden border hover:scale-110 relative hover:-translate-y-5 transition-all duration-300 mt-10 rounded-full">
        <img
          src="./assets/razvan.jpeg"
          className="w-full h-full object-contain"
          alt=""
        />
      </div>
      <div className="w-full flex flex-col text-center justify-center mt-5">
        <h2 className="text-3xl font-semibold">I'm razvanbotea</h2>
        <h1 className="text-6xl flex items-center gap-4 justify-center tracking-tighter font-bold uppercase mt-3">
          AWS DevOps
          <div
            id="div"
            className="h-full cursor-pointer overflow-hidden relative w-72"
          >
            <span
              id="span"
              className="left-0 top-0 transition-all absolute duration-500"
            >
              Engineer
            </span>
          </div>
        </h1>
        <h4 className="text-xl font-semibold mt-2">
          Over 8 years of experience with AWS
        </h4>
      </div>
    </div>
  );
};

export default Profile;
