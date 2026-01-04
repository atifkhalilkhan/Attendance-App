import { BABox, BAInput, BAScreenHeader } from "basuite";
import { useState } from "react";
import supabase from "../config/dbconfig";
import { message } from "antd";

export default function Attendance() {
    const [rollNo, setRollNo] = useState(null)
    const [studentData, setStudentData] = useState({})

    const markAttendance = async (e: any) => {
        e.preventDefault()
        console.log(rollNo)
        const student: any = await supabase.from("Student").select("*").eq('rollNo', rollNo)

        if (student.data.length < 1) {
            message.error(student.message)
        } else {
            console.log(student)
        }

    }

    return <>
        <BABox className="p-2">
            <BAScreenHeader title={"Attendance"} />
            <BABox className="py-2">
                <form onSubmit={markAttendance}>
                    <BAInput
                        value={rollNo}
                        onChange={(e: any) => {
                            setRollNo(e.target.value)
                        }}
                        label={"Roll Number"} />
                </form>
            </BABox>
        </BABox>
    </>
}