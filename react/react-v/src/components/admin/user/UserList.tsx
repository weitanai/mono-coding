import "./UserList.css";
import React, { useState, useEffect } from "react";
import { getUserList } from "../../../api/index";
import { Table, Form, Button, InputNumber, Input } from "antd";
import { modifyUser, deleteUser } from "../../../api/index";
import {  Link, useNavigate } from "react-router-dom";

function UserList() {
    const [userList, setUserList] = useState<any[]>([]);
    const [page, setPape] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);
    const navigation = useNavigate();
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            editable: true,
            render: (text) => <span >{text}</span>,
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
            editable: true,
            render: (text) => <span>{text}</span>,
        },

        {
            title: "Avatar",
            dataIndex: "avatar",
            key: "avatar",
            editable: true,
            render: (text) => <img src={text} className="user-avatar"></img>,
        },
        {
            title: "action",
            key: "action",
            render: (_, record: Item) => {
                const idEdit = isEditing(record);
                if (idEdit) {
                    return (
                        <div className="row-action">
                            <span className="row-modify" onClick={() => save(record.key)}>save</span> <span>cancel</span>
                        </div>
                    );
                } else {
                    return (
                        <div className="row-action">
                            <span onClick={() => edit(record)} className="row-modify">modify</span>
                            <span onClick={() => { handleRowDelete(record.id); }}>delete</span>
                        </div>
                    );
                }
            }


        }
    ];
    function handleRowDelete(id) {
        deleteUser("user/delete", { id }).then(res => {
            getUserLists({});
        })
            .catch(err => console.log(err));
    }

    const getUserLists = ({ name, age }: { name?: string, age?: number }) => {
        getUserList("user/list", { page, name, age }).then(res => {
            console.log(res, "----");
            const { total, userList, page } = res;
            const formatRes = userList.map(item => {
                return { key: item.id, ...item };
            });
            setUserList(formatRes);
            setPape(page);
            setTotal(total);
        });
    };
    function handlePage(e) {
        setPape(e);
    }
    useEffect(() => {
        console.log("userList --");
        getUserLists({});
    }, [page]);



    function submitUser(data) {
        modifyUser("user/modify", data)
            .then(res => {
            }).catch(err => console.log(err));
    }
    const [searchConditon, setSearchCondition] = useState({ name: "", age: 0 });
    function handleSearchNmae(e) {
        setSearchCondition({ ...searchConditon, name: e.target.value });
    }

    function handleSearchAge(e) {
        setSearchCondition({ ...searchConditon, age: e.target.value });
    }
    function searchUser() {
        const { name, age } = searchConditon;
        if (!name && !age) return;
        const params: { name?: string, age?: number } = {};
        if (name) {
            params.name = name;
        }
        if (age) {
            params.age = age;
        }
        getUserLists(params);
    }


    const [form] = Form.useForm();
    const [editKey, setEditingKey] = useState("");
    const isEditing = (record: Item) => record.key === editKey;
    const edit = (record: Partial<Item> & { key: React.Key }) => {
        form.setFieldsValue({ name: "", age: "", avatar: "", ...record });
        setEditingKey(record.key);
    };
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: Item) => ({
                record,
                inputType: col.dataIndex === "age" ? "number" : "text",
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    const save = async (key: React.Key) => {
        try {
            const row = (await form.validateFields()) as Item;
            const resMod = await submitUser({ ...row, id: key });
            // just post modify data; not request new data list;
            console.log(row, key, "--");
            const newData = [...userList];
            const index = newData.findIndex((item) => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                setUserList(newData);
                setEditingKey("");
            } else {
                newData.push(row);
                setUserList(newData);
                setEditingKey("");
            }
        } catch (errInfo) {
            console.log("Validate Failed:", errInfo);
        }
    };
    return (
        <div className='user-liset-wrapper'>
            <div>search table
                <div>
                    <span>name: </span>
                    <input value={searchConditon.name} onChange={(e) => handleSearchNmae(e)} />

                </div>
                <div>
                    <span>age: </span>
                    <input value={searchConditon.age} onChange={(e) => handleSearchAge(e)} />
                </div>
                <div>
                    <Button onClick={searchUser}>search</Button>
                    <Button onClick={()=> navigation("/admin/user/add?name=hello")} >  add user</Button>
                </div>
            </div>
            <Form form={form} component={false}>

                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    columns={mergedColumns}
                    dataSource={userList}
                    pagination={
                        {
                            current: page,
                            total,
                            pageSize: 6,
                            onChange: handlePage
                        }
                    }
                ></Table>
            </Form>
        </div>
    );
}
interface Item {
    id?: any;
    key: string;
    name: string;
    age: number;
    avtart: string;
}


interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: "number" | "text";
    record: Item;
    index: number;
    children: React.ReactNode;
}
const EditableCell: React.FC<EditableCellProps> = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};
export default UserList;


// edit table cell;
// table cell is form item and support edit
// cloumn 