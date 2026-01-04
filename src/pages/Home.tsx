import { BABox, BAPera } from "basuite";
import { Route, Routes, useNavigate } from "react-router";
import Students from "./Students";
import StudentForm from "./StudentForm";
import Attendance from "./Attendance";
import { useSelector } from "react-redux";

export default function Home() {
    const navigate = useNavigate()
    const reduxData = useSelector(a => a)
    console.log(reduxData)


    const menu = [
        {
            route: "student",
            label: "Students"
        },
        {
            route: "attendance",
            label: "Attendance"
        },
    ]
    return <>
        <BABox className="grid grid-cols-12 h-screen overflow-auto">
            <BABox className="col-span-2 bg-gray-950 text-white flex flex-col justify-between p-2">
                <BABox></BABox>
                <BABox>
                    {menu.map((m, i) => <BAPera className="p-2 mb-1 bg-[rgba(255,255,255,.2)] hover:bg-[rgba(255,255,255,.3)] cursor-pointer" onClick={() => {
                        navigate(`/${m.route}`)
                    }} key={i}>{m.label}</BAPera>)}
                </BABox>
                <BABox></BABox>
            </BABox>
            <BABox className="col-span-10">
                <Routes>
                    <Route path="student" element={<Students />} />
                    <Route path="studentform" element={<StudentForm />} />
                    <Route path="studentform/:id" element={<StudentForm />} />
                    <Route path="attendance" element={<Attendance />} />
                </Routes>
            </BABox>
        </BABox>
    </>
}