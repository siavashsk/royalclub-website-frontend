import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { successMessage } from "services/utils/toastMessages";
import { loginSchema } from "../../services/utils/formikSchema";
import Spinner from "../UI/Loadings/Spinner";
import "react-toastify/dist/ReactToastify.css";
import { IValues } from "services/types/auth";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values: IValues) => {
    const user = { username: values.username, password: values.password };
    try {
      // const { data } = await loginPostEndpoint("login/admin", user);
      // let expirationTime = new Date().getTime() + 3600000;
      // dispatch(login({ token: data, expirationTime }));
      navigate("/panel/dashboard", { replace: true });
      successMessage("Login Successful");
    } catch (error: any) {
      console.log("Login ERROR: ", error);
      setSubmitMessage(error.message);
    }
  };

  const { values, errors, handleChange, handleSubmit, isSubmitting, touched } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  return (
    <>
      <div className="absolute top-0 w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"></div>
      <div className="container mx-auto p-4">
        <form onSubmit={handleSubmit}>
          <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
            <CardHeader
              variant="gradient"
              color="teal"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Log In
              </Typography>
            </CardHeader>
            <div className="text-center">
              {submitMessage && (
                <p className="text-xs font-semibold text-[#e13535] mx-4">
                  {submitMessage}
                </p>
              )}
            </div>
            <CardBody className="flex flex-col gap-2">
              <Input
                id="username"
                name="username"
                type="username"
                label="Username"
                size="lg"
                color="teal"
                value={values.username}
                onChange={handleChange}
              />
              {errors?.username && touched?.username && (
                <p className="text-xs text-[#e13535] font-semibold">
                  {errors?.username}
                </p>
              )}
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPass ? "text" : "password"}
                  label="Password"
                  size="lg"
                  color="teal"
                  value={values.password}
                  onChange={handleChange}
                />
                <div className="absolute inset-y-0 right-0 pr-2 flex items-center text-sm">
                  <IconButton
                    color="teal"
                    variant="text"
                    size="sm"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? (
                      <AiOutlineEye size={20} />
                    ) : (
                      <AiOutlineEyeInvisible size={20} />
                    )}
                  </IconButton>
                </div>
              </div>
              {errors?.password && touched?.password && (
                <p className="text-xs text-[#e13535] font-semibold">
                  {errors?.password}
                </p>
              )}
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" color="teal" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" color="teal" fullWidth type="submit">
                {isSubmitting ? <Spinner /> : "Login"}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
};
export default Login;
