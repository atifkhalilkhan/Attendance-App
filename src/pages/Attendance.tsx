import { BABox, BAInput, BAScreenHeader } from "basuite";
import { useEffect, useRef, useState } from "react";
import supabase from "../config/dbconfig";
import { Input, message } from "antd";

export default function Attendance() {
    const [rollNo, setRollNo] = useState<any>(null)
    const [studentData, setStudentData] = useState({})
    const inpRef: any = useRef(null)
    const btnRef:any = useRef(null)

    const markAttendance = async (e: any) => {
        e.preventDefault()
        console.log(rollNo)
        const student: any = await supabase.from("Student").select("*").eq('rollNo', rollNo)

        if (student.data.length < 1) {
            message.error(student.message)
            inpRef.current?.focus()
        } else {
            console.log(student)
        }
    }

    useEffect(() => {
        inpRef.current?.focus()        
    }, [])

    return <>
        <BABox className="p-2">
            <BAScreenHeader title={"Attendance"} />
            <BABox className="py-2">
                <form onSubmit={markAttendance}>
                    <Input
                        ref={inpRef}
                        value={rollNo}
                        onChange={(e: any) => {
                            setRollNo(e.target.value)
                        }}
                    />
                </form>
            </BABox>
        </BABox>
    </>
}