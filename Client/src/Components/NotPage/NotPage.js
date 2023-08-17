import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const NotPage = () => {
    const history = useHistory();
    const backHome = () => {
        history.push("/");
    }
    return (
        <div style={{textAlign:"center"}}>
            <i class="fa-solid fa-triangle-exclamation"
            style={{
                marginTop:"30px",
                fontSize:"70px",
                color: "red"
            }}
            ></i>
            <h3 style={{fontSize:"20px", color:"#65676b", fontWeight:"700", lineHeight:"24px", marginTop:"10px"}}>Bạn hiện không xem được nội dung này</h3>
            <p style={{fontSize:"17px", color:"#65676b", lineHeight:"20.0005px", marginTop:"10px"}}>Lỗi này thường do chủ sở hữu chỉ chia sẻ nội dung với một<br/> nhóm nhỏ, thay đổi người được xem hoặc đã xóa nội dung.</p>
            <button onClick={() => backHome()} 
            style={{
                backgroundColor: "#1b74e4",
                borderRadius: "6px",
                color: "white",
                padding: "20px 40px",
                fontSize: "17px",
                outline: "none",
                border: "none",
                fontWeight: "600",
                marginTop: "10px",
                cursor:"pointer",
            }}
            >Trở về trang chủ</button>
        </div>
    );
};

export default NotPage;