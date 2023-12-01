// KIỂM TRA XEM NGƯỜI ĐƯỢC XEM THÔNG TIN LÀ AI vd: Admin
const authPage = (Permissions) => {
    return (req, res, next) => {
        const userRole = req.body.role;
        if(Permissions.includes(userRole)){
            next();
        }else{
            return res.status(401).json("You can't!")
        }
    }
}

// TÌM SỐ CÓ TRONG MẢNG NHẬP VÀO KHÔNG vd: Bạn đưa vào một dãy số và những số đó được gọi tên sẽ có mặt
const authNumber = ( req, res, next) => {
    const textNumber = parseInt(req.params.number);
    if(req.body.number.includes(textNumber)){
        next();
    }else{
        return res.status(401).json("You not number!")
    }
}

module.exports = { authPage, authNumber};