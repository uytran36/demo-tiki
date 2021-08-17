UPDATE [Tiki].[dbo].[SanPham]
SET 
    [TenSP] =  @TenSP
    ,[MoTaSP] =  @MoTaSP
    ,[SLTonSP] =  @SLTonSP
    ,[GiaBanSP] =  @GiaBanSP
    ,[GiaGiamSP] = @GiaGiamSP
    ,[ThanhTienSP] = @ThanhTienSP
    ,[HoaHong] = @HoaHong
    ,[MaLoaiSP] = @MaLoaiSP
    ,[MaNhaBan] = @MaNhaBan
    ,[url] = @url
WHERE  [MaSP] = @MaSP


