INSERT INTO [Tiki].[dbo].[SanPham]
    (
       [MaSP]
      ,[TenSP]
      ,[MoTaSP]
      ,[SLTonSP]
      ,[GiaBanSP]
      ,[GiaGiamSP]
      ,[ThanhTienSP]
      ,[HoaHong]
      ,[MaLoaiSP]
      ,[MaNhaBan]
      ,[url]
    )
VALUES 
    (
       @MaSP,
       @TenSP,
       @MoTaSP,
       @SLTonSP,
       @GiaBanSP,
       @GiaGiamSP,
       @ThanhTienSP,
       @HoaHong,
       @MaLoaiSP,
       @MaNhaBan,
       @url
    )


