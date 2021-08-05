INSERT INTO [Tiki].[dbo].[KhachHang]
    (
       [MaKH],
       [Ten],
       [Sdt],
       [SoNha],
       [Duong],
       [Phuong],
       [Quan],
       [ThanhPho],
       [Email],
       [MatKhau],
       [GioiTinh],
       [NgaySinh],
       [TikiXu]
    )
VALUES 
    (
       @MaKH,
       @Ten,
       @Sdt,
       @SoNha,
       @Duong,
       @Phuong,
       @Quan,
       @ThanhPho,
       @Email,
       @MatKhau,
       @GioiTinh,
       @NgaySinh,
       @TikiXu
    )

SELECT SCOPE_IDENTITY() AS MaKH