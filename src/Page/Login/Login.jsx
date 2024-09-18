import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center p-6">
      <div className="flex flex-col lg:flex-row h-full w-full overflow-hidden rounded-xl shadow-md md:h-[90%] md:w-[80%] lg:h-[70%]">
        {/* Design Side */}
        <div className="relative h-full items-center justify-center bg-[#F2D184CC] md:flex md:w-[100%] lg:w-[40%]">
          <div className="space-y-2 text-center">
            <h2 className="md:text-4xl lg:text-5xl font-medium text-[#F65D4E] ">
              Now
            </h2>
            <h2 className="animate-pulse text-3xl md:text-5xl lg:text-7xl font-semibold text-[#F65D4E] ">
              Find your life partner
            </h2>
            <p className="animate-pulse text-xl md:text-3xl lg:text-4xl font-poppins font-semibold text-[#F65D4E] pt-6">
              Easy and fast.
            </p>

            <Marquee>
              <img
                className="w-full lg:pt-20"
                src="https://i.ibb.co/4TxsdDM/login-bg.png"
                alt="Login Background"
              />
            </Marquee>
          </div>
        </div>
        {/* Input Side */}
        <div className="flex w-full flex-col justify-center bg-white lg:w-[60%] space-y-6 mt-4">
          <p className="-mb-4 text-center text-xl font-semibold text-[#F65D4E]">
            START FOR FREE
          </p>
          <h2 className=" text-center text-3xl font-bold text-[#F65D4E]">
            Sign in to Matrimony
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex  w-full flex-col items-center justify-center gap-4"
          >
            <input
              {...register("email", { required: true })}
              className="w-[80%] rounded-lg border border-[#F65D4E] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#F65D4E]/50 lg:w-[60%]"
              type="email"
              placeholder="Email"
              name="email"
            />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
            <input
              {...register("password", { required: true })}
              className="w-[80%] rounded-lg border border-[#F65D4E] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#F65D4E]/50 lg:w-[60%]"
              type="password"
              placeholder="Password"
              name="password"
            />
            {errors.password && (
              <span className="text-red-600">Password is required</span>
            )}
            <p className="text-[14px] text-[#F65D4E]">
              Do not have an account?{" "}
              <Link to="/registration" className="text-[#F65D4E] font-bold">
                Registration Now
              </Link>
            </p>
            <input
              className="w-[92%] rounded-lg bg-[#F65D4E] px-6 py-2 font-bold text-white md:w-[88%] lg:w-[65%]"
              type="submit"
              value="Sign In"
            />
          </form>
          {/* Divider */}
          <div className="my-8 flex items-center px-8">
            <hr className="flex-1" />
            <div className="mx-4 text-gray-400">OR</div>
            <hr className="flex-1" />
          </div>
          {/* Sign in with Google */}
          <div className="mx-auto flex h-[50px] w-[200px] gap-2 items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow hover:cursor-pointer">
            <div className="flex h-full w-[50%] items-center bg-[#F65D4E] pl-4 text-sm text-white">
              Sign With
            </div>
            <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#F65D4E] group-hover:hidden"></span>
            <span className="pr-4 text-4xl font-bold text-[#F65D4E]">G+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
