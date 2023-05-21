import './AddUser.css';
import { useState, useContext } from 'react';
import { signUp } from '../../../api/index';
import { Button, Modal } from 'antd';

import {  useParams } from 'react-router-dom';
function AddUser() {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [avatar, setAvatar] = useState();
    const [isShow, toggleShow] = useState(false);
    const params = useParams();
    console.log(params, 'params--');
    function handleName(e) {
        setName(e.target.value);
    }
    function handleAge(e: InputEvent) {
      setAge(e.target.value);
    }
    function blobToBase64(blob: Blob) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => resolve(reader.result);
        });
    }
    function handleImg(e: Event) {
        const blob = e.target.files[0];
        blobToBase64(blob).then(res => setAvatar(res)).catch(err => console.error(err));

    }

    const handleSubmit = () => {
        console.log('excuting add user');
        if (!name || !age || !avatar) {
            return;
        }
        const params = {
            name,
            age,
            avatar,
        }
        signUp('/user/createUser', params).then(res => {
            if (res) {
                console.log('add user success');
            }
        })
            .catch(err => { console.error(err) })
            .finally(()=>toggleShow(false));
    }
    return (
        <div>
            <Button onClick={()=>toggleShow(true)}>add User</Button>
            <Modal open={isShow} onOk={handleSubmit} onCancel={() => toggleShow(false)}  >
                <div>name: <input value={name} onChange={handleName} /></div>
                <div>age: <input value={age} onChange={handleAge} /></div>
                <div>avatar: <input type="file" onChange={handleImg} /></div>
            </Modal>
        </div>

    )

}

export default AddUser;