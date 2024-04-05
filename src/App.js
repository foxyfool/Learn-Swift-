import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Common/Navbar";
import OpenRoute from "./components/core/Auth/OpenRoute";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import TermsConditions from "./pages/termsConditions";
import RefundCancel from "./pages/Refund";
import PrivacyPolicy from "./pages/privacyPolicy";
import Contact from "./pages/Contact";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Error from "./pages/Error";
import Settings from "./components/core/Dashboard/Settings/Settings";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import { ACCOUNT_TYPE } from "./utils/constants";
import Cart from "./components/core/Dashboard/Cart";
import AddCourse from "./components/core/Dashboard/AddCourse";
import MyCourses from "./components/core/Dashboard/MyCourses";
import EditCourse from "./components/core/Dashboard/EditCourse";
import Catalog from "./pages/Catalog";
import CourseDetails1 from "./pages/CourseDetails";
import ViewCourse from "./pages/ViewCourse";
import VideoDetails from "./components/core/ViewCourse/VideoDetails";
import Instructor from "./components/core/Dashboard/Instructor";
import { getUserDetails } from "./services/operations/profileAPI";

// pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);
  return (
    <div className="flex min-h-screen w-screen  flex-col bg-gradient-to-r from-blue-200 to-blue-700 font-inter">
      <Navbar />
      <Routes>
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-&-conditions" element={<TermsConditions />} />
        <Route path="refund-&-cancellation-policy" element={<RefundCancel />} />
        <Route path="/" element={<Home />} />
        <Route path="courses/:courseId" element={<CourseDetails1 />} />
        <Route path="catalog/:catalogName" element={<Catalog />} />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />

        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />

        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Private Route - for Only Logged in User */}
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {/* Route for all users */}
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/settings" element={<Settings />} />
          {/* Route only for Students */}
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route path="/dashboard/cart" element={<Cart />} />
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
            </>
          )}
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/instructor" element={<Instructor />} />
              <Route path="/dashboard/add-course" element={<AddCourse />} />
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
            </>
          )}
        </Route>

        {/* For the watching course lectures */}
        <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
