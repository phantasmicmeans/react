import React, { Component } from "react";

class PhoneInfo extends Component {
    static defaultProps = { // default
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        }
    };

    state = {
        editing: false,
        name: '',
        phone: '',
    };

    handleRemove = () => {
        // 삭제 버튼 클릭시 onRemove에 id 넣어서 호출
        const { info, onRemove } = this.props;
        onRemove(info.id);
    };

    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing});
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (!this.state.editing && !nextState.editing && nextProps.info === this.props.info) {
            return false;
        }
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // editing 값이 바뀔 때 처리 할 로직이 적혀있음.
        // 수정 누르면 기존의 값이 input에 나타나고,
        // 수정 적용시 input 값들을 부모에게 전달
        const { info, onUpdate } = this.props;
        if (!prevState.editing && this.state.editing) {
            this.setState({
                name: info.name,
                phone: info.phone
            });
        }

        if (prevState.editing && !this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }

    render() {
        console.log('render PhoneInfo' + this.props.info.id);
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const { editing } = this.state;

        if (editing) { // 수정모드
            return (
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name="phone"
                            placeholder="전화번호"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            );
        }


        const {
            name, phone, id
        } = this.props.info; // props로 부터 info 객체를 받아올 것임. (없으면 crash)

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        )
    }
}

export default PhoneInfo;