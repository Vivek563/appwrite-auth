import { account } from "@/appwrite/appwrite";
import { registerValidationSchema } from "@/types/user.types";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function Register() {
     const navigate = useNavigate();

     const formik = useFormik({
          initialValues: {
               first_name: "",
               last_name: "",
               email: "",
               password: "",
               confirmPassword: "",
          },
          validationSchema: registerValidationSchema,
          onSubmit: async (values) => {
               try {
                    const user = await account.create("unique()", values.email, values.password, `${values.first_name} ${values.last_name}`);
                    console.log("User registered:", user);
                    navigate("/login");
               } catch (error) {
                    console.error("Error registering user:", error);
               }
          },
     });

     return (
          <div className="min-h-screen flex items-center flex-col justify-center">
               <form className="gap-1 w-[50%] border-[1px] border-black p-10" onSubmit={formik.handleSubmit}>
                    <h1 className="flex font-bold items-center justify-center text-[2rem] uppercase underline">Register</h1>
                    <div className="flex-col flex mt-2 gap-3 w-full">
                         <div className="flex-col flex gap-1 w-full">
                              <Label htmlFor="first_name" className="uppercase tracking-wide font-nunito text-subheading font-bold">
                                   First Name
                              </Label>
                              <Input
                                   type="text"
                                   id="first_name"
                                   placeholder="First Name"
                                   className="border-2 font-nunito rounded-md outline-0 focus:ring-1 text-subheading focus:ring-offset-0 focus:ring-[#5B527E]"
                                   {...formik.getFieldProps("first_name")}
                              />
                              {formik.touched.first_name && formik.errors.first_name ? <div className="text-red-500">{formik.errors.first_name}</div> : null}
                         </div>
                         <div className="flex-col flex gap-1 w-full">
                              <Label htmlFor="last_name" className="uppercase tracking-wide font-nunito text-subheading font-bold">
                                   Last Name
                              </Label>
                              <Input
                                   type="text"
                                   id="last_name"
                                   placeholder="Last Name"
                                   className="border-2 font-nunito rounded-md outline-0 text-subheading focus:ring-1 focus:ring-offset-0 focus:ring-[#5B527E]"
                                   {...formik.getFieldProps("last_name")}
                              />
                              {formik.touched.last_name && formik.errors.last_name ? <div className="text-red-500">{formik.errors.last_name}</div> : null}
                         </div>
                         <div className="flex-col flex gap-1 w-full">
                              <Label htmlFor="email" className="uppercase tracking-wide font-nunito text-subheading font-bold">
                                   Email
                              </Label>
                              <Input
                                   type="email"
                                   id="email"
                                   placeholder="Email"
                                   autoComplete="email"
                                   className="border-2 font-nunito rounded-md outline-0 focus:ring-1 text-subheading focus:ring-offset-0 focus:ring-[#5B527E]"
                                   {...formik.getFieldProps("email")}
                              />
                              {formik.touched.email && formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
                         </div>
                         <div className="flex-col flex gap-1 w-full">
                              <Label htmlFor="password" className="uppercase tracking-wide font-nunito text-subheading font-bold">
                                   Password
                              </Label>
                              <Input
                                   type="password"
                                   id="password"
                                   placeholder="Password"
                                   autoComplete="current-password"
                                   className="border-2 font-nunito rounded-md outline-0 text-subheading focus:ring-1 focus:ring-offset-0 focus:ring-[#5B527E]"
                                   {...formik.getFieldProps("password")}
                              />
                              {formik.touched.password && formik.errors.password ? <div className="text-red-500">{formik.errors.password}</div> : null}
                         </div>
                         <div className="flex-col flex gap-1 w-full">
                              <Label htmlFor="confirmPassword" className="uppercase tracking-wide font-nunito text-subheading font-bold">
                                   Confirm Password
                              </Label>
                              <Input
                                   type="password"
                                   id="confirmPassword"
                                   placeholder="Confirm Password"
                                   autoComplete="new-password"
                                   className="border-2 font-nunito rounded-md outline-0 text-subheading focus:ring-1 focus:ring-offset-0 focus:ring-[#5B527E]"
                                   {...formik.getFieldProps("confirmPassword")}
                              />
                              {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="text-red-500">{formik.errors.confirmPassword}</div> : null}
                         </div>
                    </div>
                    <div className="flex items-center w-full mt-8 justify-start">
                         <Button type="submit" className="uppercase bg-[#F6B60E]/80 w-full hover:bg-[#F6B60E] text-subheading rounded-[16px]">
                              SIGN UP
                         </Button>
                    </div>
               </form>
               <div className="flex w-[50%] mt-6">
                    <div className="flex flex-col gap-2 justify-start">
                         <p className="text-[#353535] font-nunito text-body font-bold">{`Do have an account?`}</p>
                         <Button onClick={() => navigate("/login")} className="uppercase mb-10 rounded-[16px]">
                              LOGIN
                         </Button>
                    </div>
               </div>
          </div>
     );
}

export default Register;
