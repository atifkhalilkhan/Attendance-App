import { BABox, BAButton, BAGrid, BAScreenHeader } from "basuite";
import supabase from "../config/dbconfig";
import { message } from "antd";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { updateStudentCount } from "../config/redux/reducers/instConfig";
import { useFetch } from "../config/customhooks";

export default function Students() {
    const navigate = useNavigate()
    const [listData, setListData] = useState<any>([])
    const dispatch = useDispatch()

    const getData = async () => {
        const res: any = useFetch("students")
        if (res.error) {
            message.error(res.error.message)
        } else {
            console.log(res.data)
            setListData(res.data)
            dispatch(updateStudentCount(res.data.length))
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return <>
        <BABox className="p-2">
            <BAScreenHeader title={"Students"} headerOptions={[
                {
                    displayField: () => <BAButton onClick={() => {
                        navigate('/studentform')
                    }} icon={<Plus size={20} />} label="Add Student" />
                }
            ]} />
            <BABox className="py-2">
                <BAGrid datasourse={listData} cols={[
                    {
                        key: "firstName",
                        label: "First Name"
                    },
                    {
                        key: "lastName",
                        label: "Last Name"
                    },
                    {
                        key: "rollNo",
                        label: "Roll #"
                    },
                    {
                        key: "",
                        label: "",
                        displayField: (row) => `Student=${row.rollNo}`
                    },
                ]} />
            </BABox>
        </BABox>
    </>
}