import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "../src/Home";

// Teacher

import TeacherAssignment from "./Teacher/Pages/TeacherAssignment";
import TeacherAttendance from "./Teacher/Pages/TeacherAttendance";
import TeacherSalary from "./Teacher/Pages/TeacherSalary";
import TeacherProfile from "./Teacher/Pages/TeacherProfile";
import TeacherDashboard from "./Teacher/Pages/TeacherDashboard";
import TeacherClass from "./Teacher/Pages/TeacherClass";
import TeacherNotes from "./Teacher/Pages/TeacherNotes";
import TeacherNotice from "./Teacher/Pages/TeacherNotice";
import TeacherLogin from "./Teacher/TeacherLogin";
// import TeacherRegistration from "./Teacher/TeacherRegistration";
import TeacherTimeSchedule from "./Teacher/Pages/TeacherTimeSchedule";

// Student

import { StudentPayment } from "./Student/Pages/StudentPayment";
// import StudentRegistration from "./Student/StudentRegistration";
import StudentLogin from "./Student/StudentLogin";
import { StudentMenu } from "./Student/StudentMenu";
import StudentDashboard from "./Student/Pages/StudentDashboard";
import StudentGeneralRegister from "./Student/Pages/StudentGeneralRegister";
import StudentClassDetails from "./Student/Pages/StudentClassDetails";
import StudentTimetable from "./Student/Pages/StudentTimetable";
import StudentFees from "./Student/Pages/StudentFees";
import { StudentAttendance } from "./Student/Pages/StudentAttendance";
import StudentHoliday from "./Student/Pages/StudentHoliday";
import StudentLearningMaterial from "./Student/Pages/StudentLearningMaterial";
import StudentResult from "./Student/Pages/StudentResult";
import StudentPracticeTest from "./Student/Pages/StudentPracticeTest";
import StudentFeedback from "./Student/Pages/StudentFeedback";
import StudentDigitalICard from "./Student/Pages/StudentDigitalICard";
import StudentProfile from "./Student/Pages/StudentProfile";

// Admin

import AdminLogin from "./Admin/Pages/Admin/Home/AdminLogin";
import AdminRegistration from "./Admin/Pages/Admin/Home/AdminRegistration";
import AdminHome from "./Admin/Pages/Admin/Home/AdminHome";
import AddClasses from "./Admin/Pages/Admin/Classes/AddClasses";
import Classes from "./Admin/Pages/Admin/Classes/Classes";
import ShowClasses from "./Admin/Pages/Admin/Classes/ShowClasses";
import AddStudents from "./Admin/Pages/Admin/Student/AddStudents";
import StudentForm from "./Admin/Pages/Admin/Student/StudentForm";
import ShowStudentDetails from "./Admin/Pages/Admin/Student/ShowStudentDetails";
import StudentDetails from "./Admin/Pages/Admin/Student/StudentDetails";
import FeeDetails from "./Admin/Pages/Admin/Student/FeeDetails";
import UpdateStudentDetails from "./Admin/Pages/Admin/Student/UpdateStudentDetails";
import DisplayStudentDetails from "./Admin/Pages/Admin/Student/DisplayStudentDetails";
import ShowClassTeacher from "./Admin/Pages/Admin/Teacher/ShowClassTeacher";
import ShowAllTeachersList from "./Admin/Pages/Admin/Teacher/ShowAllTeachersList";
import UpdateTeacherDetails from "./Admin/Pages/Admin/Teacher/UpdateTeacherDetails";
import ShowProfile from "./Admin/Pages/Admin/Teacher/ShowProfile";
import SalaryDetails from "./Admin/Pages/Admin/Teacher/SalaryDetails";
import AddTeacher from "./Admin/Pages/Admin/Teacher/AddTeacher";
import ShowTeachersList from "./Admin/Pages/Admin/Teacher/ShowTeachersList";
import ViewNotes from "./Admin/Pages/Admin/Notes/ViewNotes";
import UpdateNotice from "./Admin/Pages/Admin/Notes/UpdateNotice";
import AddNotice from "./Admin/Pages/Admin/Notes/AddNotice";
import AddSubjects from "./Admin/Pages/Admin/Subjects/AddSubjects";
import Feedback from "./Admin/Pages/Admin/Feedback/Feedback";
import LogOut from "./Admin/Pages/Admin/AdminLogOut/LogOut";
import Profile from "./Admin/Pages/Admin/AdminProfile/Profile";
import RoleSelection from "./RoleSelection";
import { Timetable } from "./Admin/Pages/Admin/Timetables/Timetable";
import { AddAdmin } from "./Admin/Pages/Admin/AddAdmin/AddAdmin";
import { AddClassTeacher } from "./Admin/Pages/Admin/Teacher/AddClassTeacher";
import TeacherUpdateAttendence from "./Teacher/Pages/TeacherUpdateAttendence";
import StudentNotice from "./Student/Pages/StudentNotice";
import { Showsubjects } from "./Admin/Pages/Admin/Subjects/Showsubjects";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roleSelection" element={<RoleSelection />} />

          {/* admin */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/login" element={<Login />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="/categoryHome" element={<CategoryHome/>}></Route> */}
          <Route path="/addadmin" element={<AddAdmin />} />
          <Route path="/adminhome" element={<AdminHome />}></Route>
          <Route path="/AdminLogin" element={<AdminLogin />}></Route>
          <Route
            path="/adminregistration"
            element={<AdminRegistration />}
          ></Route>
          {/* class */}
          <Route path="/addclasses" element={<AddClasses />} />
          <Route path="/addclasses/class" element={<Classes />} />
          <Route path="/addclasses/showclasses" element={<ShowClasses />} />
          <Route
            path="/showclassTeacher/addclassteacher/:classid"
            element={<AddClassTeacher />}
          />

          {/* student */}

          <Route path="/addstudents" element={<AddStudents />} />
          <Route path="/addstudents/studentform" element={<StudentForm />} />
          <Route
            path="/addstudents/showstudentdetails"
            element={<ShowStudentDetails />}
          />
          <Route
            path="/addstudents/showstudentdetails/studentdetails/:classId"
            element={<StudentDetails />}
          />
          <Route
            path="/addstudents/showstudentdetails/studentdetails/feedetails/:id"
            element={<FeeDetails />}
          />
          <Route
            path="/addstudents/showstudentdetails/studentdetails/updatestudentdetails/:studentId"
            element={<UpdateStudentDetails />}
          />
          <Route
            path="/addstudents/showstudentdetails/studentdetails/displaystudentdetails/:studentId"
            element={<DisplayStudentDetails />}
          />

          {/* Teacher */}
          <Route path="/showclassTeacher" element={<ShowClassTeacher />} />
          <Route
            path="/showclassTeacher/showallteacherlist"
            element={<ShowAllTeachersList />}
          />
          <Route
            path="/showclassTeacher/showallteacherlist/updatetecherdetails/:teacherid"
            element={<UpdateTeacherDetails />}
          />
          <Route
            path="/showclassTeacher/showallteacherlist/showprofile/:teacherId"
            element={<ShowProfile />}
          />
          <Route
            path="/showclassTeacher/showallteacherlist/salarydetails/:teacherid"
            element={<SalaryDetails />}
          />
          <Route path="/showclassTeacher/addteacher" element={<AddTeacher />} />
          <Route
            path="/showclassTeacher/showteacherslist/:classname"
            element={<ShowTeachersList />}
          />

          <Route
            path="/adminhome/viewnotes/:NoticeId"
            element={<ViewNotes />}
          />
          <Route
            path="/adminhome/updatenotice/:NoticeId"
            element={<UpdateNotice />}
          />
          <Route path="/adminhome/addNotice" element={<AddNotice />} />
          <Route path="/timetable" element={<Timetable />} />

          {/* <Route path="/notes" element={<Notes />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/adminlogout" element={<LogOut />} />
          <Route path="/addsubjects" element={<AddSubjects />} />
          <Route path="/addsubjects/showsubjects" element={<Showsubjects/>}/>
          <Route path="/feedback" element={<Feedback />} />

          {/* teacher */}
          <Route path="/teacherLogin" element={<TeacherLogin />} />
          {/* <Route path="/teacherRegistration" element={<TeacherRegistration />}/> */}
          <Route path="/teacherDashboard" element={<TeacherDashboard />} />
          <Route path="/teacherClass" element={<TeacherClass />} />
          <Route path="/teacherNotes" element={<TeacherNotes />} />
          <Route path="/teacherAssignment" element={<TeacherAssignment />} />
          <Route path="/teacherAttendence" element={<TeacherAttendance />} />
          <Route
            path="/teacherTimeSchedule"
            element={<TeacherTimeSchedule />}
          />
          <Route path="/teacherProfile" element={<TeacherProfile />} />
          <Route path="/teacherNotice" element={<TeacherNotice />} />
          <Route path="/teacherSalary" element={<TeacherSalary />} />
          <Route
            path="/techerUpdateAttendence"
            element={<TeacherUpdateAttendence />}
          />

          {/* student */}
          <Route
            path="/studentMenu/studentDashboard"
            element={<StudentDashboard />}
          />
          <Route path="/studentLogin" element={<StudentLogin />} />
          <Route path="/studentMenu" element={<StudentMenu />} />
          {/* <Route path="/studentRegistration" element={<StudentRegistration />} /> */}
          <Route
            path="/studentMenu/studentPayment"
            element={<StudentPayment />}
          />
          <Route
            path="/studentMenu/studentDashboard/studentGeneralRegister"
            element={<StudentGeneralRegister />}
          />
          <Route
            path="/studentMenu/studentDashboard/studentClassDetails"
            element={<StudentClassDetails />}
          />
          <Route
            path="/studentMenu/studentDashboard/studentNotice"
            element={<StudentNotice />}
          />
          <Route
            path="/studentMenu/studentDashboard/studentTimetable"
            element={<StudentTimetable />}
          />
          <Route
            path="/studentMenu/studentDashboard/studentFees"
            element={<StudentFees />}
          />
          <Route
            path="/studentMenu/studentDashboard/studentAttendance"
            element={<StudentAttendance />}
          />
          <Route
            path="/studentMenu/studentDashboard/studentHoliday"
            element={<StudentHoliday />}
          />
          <Route
            path="/studentMenu/studentDashboard/studentLearningMaterial"
            element={<StudentLearningMaterial />}
          />
          <Route
            path="/studentMenu/studentDashboard/studentResult"
            element={<StudentResult />}
          />
          <Route
            path="/studentMenu/studentDashboard/studentPracticeTest"
            element={<StudentPracticeTest />}
          />
          <Route
            path="/studentMenu/studentDashboard/studentFeedback"
            element={<StudentFeedback />}
          />
          <Route
            path="/studentMenu/studentProfile"
            element={<StudentProfile />}
          />
          <Route
            path="/studentMenu/studentDigitalI_Card"
            element={<StudentDigitalICard />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
