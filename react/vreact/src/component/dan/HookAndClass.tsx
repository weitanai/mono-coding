import React, {useState} from 'react';

export default function HookAndClass () {
    const [name, setName] = useState('Dan');
    
    return (
        <div>
            <h1>HookAndClass</h1>
            <div>
                <button  onClick={()=> setName('wei')}>set to wei</button>
            </div>
            <div>current name {name}</div>
            <ProfilePage user={name}/>
            <FnProfilePage user={name}/>
        </div>
    );
}

class ProfilePage extends React.Component {
    showMessage = () => {
        alert('Followed ' + this.props.user);
    };

    handleClick = () => {
        setTimeout(this.showMessage, 3000);
    };

    render() {
        return <button onClick={this.handleClick}>Follow</button>;
    }
}

function FnProfilePage({user} : any) {
    const showMessage = () => {
        alert('Followed ' + user);
    };

    const handleClick = () => {
        setTimeout(showMessage, 3000);
    };

    return (
        <button onClick={handleClick}>Follow</button>
    );
}