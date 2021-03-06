import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import {PATH} from "../constants/paths"
import { HandleJoin } from "../pages/Invite/HandleJoin";
import { PageNotFound } from "../pages/404/PageNotFound";
import DetailClassReviewGrade from "../pages/Class/DetailClassReviewGrade";
import VerifyEmail from "../pages/VerifyEmail/VerifyEmail";

const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Register/Register"));
const DetailClassGrade = lazy(() => import("../pages/Class/DetailClassGrade"));
const DetailStudentGrade = lazy(() => import("../pages/Class/DetailStudentGrade"));

const DetailClassPeople = lazy(() =>
  import("../pages/Class/DetailClassPeople.js")
);
const DetailClass = lazy(() => import("../pages/Class/DetailClass"));
const Home = lazy(() => import("../pages/Home/Home"))
const ManageProfile = lazy(() =>
  import("../pages/ManageProfile/ManageProfile")
);


const AuthRoutes = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route exact path={PATH.DETAIL_CLASS_PEOPLE} element={<DetailClassPeople />} />
        <Route exact path={PATH.HOME} element={<Home />} />
        <Route exact path={PATH.DETAIL_CLASS} element={<DetailClass />} />
        <Route exact path={PATH.MANAGE_PROFILE} element={<ManageProfile />} />
        <Route exact path={PATH.LOGIN} element={<Login />} />
        <Route exact path={PATH.REGISTER} element={<Register />} />
        <Route exact path={PATH.JOIN_CLASS} element={<HandleJoin/>} />
        <Route exact path={PATH.GRADE} element={<DetailClassGrade />} />
        <Route exact path={PATH.GRADE_REVIEW} element={<DetailClassReviewGrade />} />
        <Route exact path={PATH.STUDENT_GRADE} element={<DetailStudentGrade />} />
        <Route exact path={PATH.VERIFY_EMAIL} element={<VerifyEmail />} />
        <Route exact path="*" element={<PageNotFound/>} />
      </Routes>
    </Suspense>
  );
};

export {AuthRoutes};