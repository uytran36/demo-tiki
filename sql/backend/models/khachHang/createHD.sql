declare @outputtable table (MaHD int);
INSERT INTO [HoaDon]
    (
    [MaKH]
    ,[MaNVGH]
    ,[MaKMai]
    ,[NgayLap]
    ,[TongTien]
    ,[TinhTrang]
    ,[SLTikiXu]
    ,[PhiVC]
    ,[ThanhTienHD]
    ,[NgayGiaoTC]
    ,[GhiChu]
    )
output inserted.MaHD into @outputtable(MaHD)
VALUES 
    (
    @MaKH,
    @MaNVGH,
    @MaKMai,
    @NgayLap,
    @TongTien,
    @TinhTrang,
    @SLTikiXu,
    @PhiVC,
    @ThanhTienHD,
    @NgayGiaoTC,
    @GhiChu
    )   
SELECT * FROM @outputtable