import { BABox, BAFormElement, BAScreenHeader, goBack } from "basuite";
import { useEffect, useState } from "react";
import supabase from "../config/dbconfig";
import { message } from "antd";
import { useParams } from "react-router";

export default function StudentForm() {
    const params = useParams()
    const [model, setModel] = useState({})
    const [saveLoader, setSaveLoader] = useState(false)
    const [loader, setLoader] = useState(false)

    const save = async () => {
        setSaveLoader(true)
        const { error, data } = await supabase.from("Student").insert(model)

        if (error) {
            message.error(error.message)
        } else {
            console.log(data)
            message.success("Student Created Successfully")
            goBack()
        }
        setSaveLoader(false)
    }
    const getDataById = async () => {
        setLoader(true)
        const { error, data } = await supabase.from('Student').select('*').eq('id', params.id)
        if (error) {
            console.log(error)
            message.error(error.message)
        } else {
            console.log(data)
            setModel({ ...data[0] })
        }
        setLoader(false)
    }

    useEffect(() => {
        if (params.id) {
            getDataById()
        }
    }, [])

    return <>
        <BABox className="p-2">
            <BAScreenHeader title={"Student"} />
            <BABox className="py-2">
                <BAFormElement
                    loading={loader}
                    onSaveClick={save}
                    saveLoader={saveLoader}
                    model={model}
                    setModel={setModel}
                    formElement={[
                        {
                            col: 6,
                            elementType: "input",
                            key: "firstName",
                            label: "First Name"
                        },
                        {
                            col: 6,
                            elementType: "input",
                            key: "lastName",
                            label: "Last Name"
                        },
                    ]}
                />
            </BABox>
        </BABox>
    </>
}